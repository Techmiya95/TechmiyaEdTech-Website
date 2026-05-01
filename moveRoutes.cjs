const fs = require('fs');
const path = require('path');

const appTsx = fs.readFileSync('src/App.tsx', 'utf8');

const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{<([^>]+)\s*\/>\}\s*\/>/g;
let match;

const elementToFileMap = {};

// Parse imports
const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+["']([^"']+)["'];/g;
let importMatch;
while ((importMatch = importRegex.exec(appTsx)) !== null) {
    const elementName = importMatch[1];
    let filePath = importMatch[2];
    if (filePath.startsWith('./')) {
        filePath = path.join('src', filePath);
        if (!filePath.endsWith('.tsx')) {
            filePath += '.tsx';
        }
        elementToFileMap[elementName] = filePath;
    }
}

while ((match = routeRegex.exec(appTsx)) !== null) {
    let routePath = match[1];
    const elementName = match[2];

    if (routePath === '*') {
        // Next.js uses not-found.tsx
        routePath = 'not-found';
    }

    if (routePath.endsWith('.html')) {
        routePath = routePath.replace('.html', '');
    }

    // Convert /:param to /[param]
    routePath = routePath.replace(/\/:([^/]+)/g, '/[$1]');

    let targetDir = path.join('src/app', routePath);
    if (routePath === '/') {
        targetDir = 'src/app';
    } else if (routePath === 'not-found') {
        targetDir = 'src/app'; // not-found.tsx goes in root
    }

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    let targetFile = path.join(targetDir, 'page.tsx');
    if (routePath === 'not-found') {
        targetFile = path.join(targetDir, 'not-found.tsx');
    }

    const sourceFile = elementToFileMap[elementName];

    if (sourceFile && fs.existsSync(sourceFile)) {
        // Just copy for now instead of move, so we don't break things if we fail
        fs.copyFileSync(sourceFile, targetFile);
        console.log(`Copied ${sourceFile} to ${targetFile}`);
        
        // Add "use client" if it's not there
        let content = fs.readFileSync(targetFile, 'utf8');
        if (!content.startsWith('"use client";') && !content.startsWith("'use client';")) {
            content = '"use client";\n' + content;
            fs.writeFileSync(targetFile, content);
        }
    } else {
        console.log(`Could not find source file for element: ${elementName} (expected at ${sourceFile})`);
    }
}
