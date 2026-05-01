const fs = require('fs');
const { execSync } = require('child_process');

try {
    execSync('git checkout src/pages/CourseDetail.tsx');
    let content = fs.readFileSync('src/pages/CourseDetail.tsx', 'utf8');
    content = '"use client";\n' + content;
    
    // Replace react-router-dom imports
    content = content.replace(/import\s+\{\s*useParams,\s*Link\s*\}\s+from\s+['"]react-router-dom['"];/, 'import { useParams } from "next/navigation";\nimport Link from "next/link";');
    
    // Fix Link tags
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    
    fs.writeFileSync('src/app/courses/[courseSlug]/page.tsx', content);
    fs.unlinkSync('src/pages/CourseDetail.tsx');
    console.log("Restored successfully");
} catch (e) {
    console.error(e.message);
}
