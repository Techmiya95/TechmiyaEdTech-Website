const fs = require('fs');
const files = [
  'src/components/Header.tsx',
  'src/components/ScrollToTop.tsx',
  'src/app/not-found/not-found.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Header needs use client again since git restore removed it
    if (file === 'src/components/Header.tsx' && !content.includes('"use client"')) {
        content = '"use client";\n' + content;
    }
    
    // Replace imports if necessary
    content = content.replace(/import\s+\{.*useLocation.*\}\s+from\s+['"]react-router-dom['"];?/g, '');
    if (!content.includes('usePathname')) {
        content = content.replace(/import\s+\{\s*useState\s*\}\s+from\s+['"]react['"];/, 'import { useState } from "react";\nimport { usePathname } from "next/navigation";');
    }
    
    // ScrollToTop specific
    if (file === 'src/components/ScrollToTop.tsx') {
        content = content.replace(/import\s+\{\s*useLocation\s*\}\s+from\s+['"]react-router-dom['"];?/, 'import { usePathname } from "next/navigation";');
        content = content.replace(/const\s+\{\s*pathname\s*\}\s*=\s*useLocation\(\);/g, 'const pathname = usePathname();');
        if (!content.includes('"use client"')) content = '"use client";\n' + content;
    }
    
    // Header & not-found specific
    content = content.replace(/const\s+location\s*=\s*useLocation\(\);/g, 'const pathname = usePathname();');
    
    // Fix location.pathname to pathname
    content = content.replace(/location\.pathname/g, 'pathname');
    
    fs.writeFileSync(file, content);
    console.log(`Fixed ${file}`);
  }
});
