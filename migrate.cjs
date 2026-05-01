const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'OOM' || err.code === 'EMFILE') throw err;
    }
  });
  return filelist;
};

const files = walkSync('src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace Link import
  if (content.includes('import { Link } from "react-router-dom"') || content.includes("import { Link } from 'react-router-dom'")) {
    content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+["']react-router-dom["'];?/g, 'import Link from "next/link";');
    changed = true;
  }
  
  // Replace other react-router-dom imports (like useNavigate, useParams)
  if (content.includes('react-router-dom')) {
    content = content.replace(/import\s+\{([^}]+)\}\s+from\s+["']react-router-dom["'];?/g, (match, p1) => {
        let newImports = [];
        let nextNavigationImports = [];
        const imports = p1.split(',').map(s => s.trim());
        
        if (imports.includes('useNavigate')) {
            nextNavigationImports.push('useRouter');
        }
        if (imports.includes('useParams')) {
            nextNavigationImports.push('useParams');
        }
        if (imports.includes('useLocation')) {
            nextNavigationImports.push('usePathname');
        }
        if (imports.includes('Link')) {
            // Already handled by the exact match above, or needs separate handling
            newImports.push('import Link from "next/link";');
        }

        let result = '';
        if (nextNavigationImports.length > 0) {
            result += `import { ${nextNavigationImports.join(', ')} } from "next/navigation";\n`;
        }
        if (newImports.length > 0) {
            result += newImports.join('\n') + '\n';
        }
        return result;
    });
    changed = true;
  }

  // Replace <Link to="..."> with <Link href="...">
  if (content.includes('<Link') && content.includes('to=')) {
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    changed = true;
  }

  // Replace useNavigate() with useRouter()
  if (content.includes('useNavigate()')) {
    content = content.replace(/const\s+(\w+)\s*=\s*useNavigate\(\);/g, 'const $1 = useRouter();');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
