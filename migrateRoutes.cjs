const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) { }
  });
  return filelist;
};

const pagesDir = 'src/pages';
const files = walkSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  let relativePath = path.relative(pagesDir, file);
  
  // Custom mappings for special routes from App.tsx
  let targetRoute = '';
  
  // Map files based on the old App.tsx routing
  if (relativePath === 'Index.tsx') targetRoute = 'app';
  else if (relativePath === 'NotFound.tsx') targetRoute = 'app/not-found';
  else if (relativePath === 'CourseDetail.tsx') targetRoute = 'app/courses/[courseSlug]';
  else if (relativePath === 'JobDetails.tsx') targetRoute = 'app/jobs/[jobId]';
  else if (relativePath === 'MachineLearningIntro.tsx') targetRoute = 'app/blog/machine-learning-introduction';
  else if (relativePath === 'ThankYou.tsx') targetRoute = 'app/thankyou';
  else if (relativePath === 'terms.tsx') targetRoute = 'app/conditions';
  else if (relativePath === 'PrivacyPolicy.tsx') targetRoute = 'app/privacy';
  else if (relativePath === 'DataDeletion.tsx') targetRoute = 'app/data-deletion';
  else if (relativePath === 'WorkshopRegister.tsx') targetRoute = 'app/workshop-register';
  else if (relativePath === 'GetVoucher.tsx') targetRoute = 'app/get-voucher';
  // If it's something like `landing\GenerativeAIBangalore.tsx` we map it to `courses/generative-ai-training-bangalore`
  else if (relativePath === 'landing\\GenerativeAIBangalore.tsx' || relativePath === 'landing/GenerativeAIBangalore.tsx') {
      targetRoute = 'app/courses/generative-ai-training-bangalore';
  }
  else if (relativePath === 'landing\\DevOpsJayanagar.tsx' || relativePath === 'landing/DevOpsJayanagar.tsx') {
      targetRoute = 'app/courses/devops-training-jayanagar';
  }
  else if (relativePath === 'blog\\HowToBecomeDevOpsEngineer.tsx' || relativePath === 'blog/HowToBecomeDevOpsEngineer.tsx') {
      targetRoute = 'app/blog/how-to-become-devops-engineer-in-bangalore';
  }
  else {
      // Default: Convert PascalCase filename to kebab-case route
      // e.g., CorporateTraining.tsx -> corporate-training
      let name = path.basename(file, '.tsx');
      let dir = path.dirname(relativePath);
      
      // Kebab case conversion: CorporateTraining -> corporate-training
      let slug = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      
      if (dir === '.') {
          targetRoute = `app/${slug}`;
      } else {
          targetRoute = `app/${dir.replace(/\\/g, '/')}/${slug}`;
      }
  }

  const targetDir = path.join('src', targetRoute);
  if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = targetRoute === 'app/not-found' ? path.join(targetDir, 'not-found.tsx') : path.join(targetDir, 'page.tsx');
  
  // Read source content
  let content = fs.readFileSync(file, 'utf8');
  
  // Add use client
  if (!content.startsWith('"use client";') && !content.startsWith("'use client';")) {
      content = '"use client";\n' + content;
  }
  
  // Update internal imports: any import starting with `../` might be broken if depth changes.
  // We'll replace `../` and `./` with `@/` where applicable, but for simplicity let's just 
  // try to use `@/` alias for all relative imports in src.
  // Actually, `@/` is already heavily used in the project `import { Button } from "@/components/ui/button";`
  // We will just write it and rely on Next.js absolute paths or fix manually.
  
  fs.writeFileSync(targetFile, content);
  console.log(`Migrated ${relativePath} -> ${targetRoute}/page.tsx`);
});
