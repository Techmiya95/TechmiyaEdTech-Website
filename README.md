# Techmiya Ed-Tech Website — Technical & Maintenance Documentation

Welcome to the **Techmiya Ed-Tech Website** repository. This document serves as a complete guide for developers, contributors, and maintainers to understand the codebase architecture, recent updates, integrations, and deployment workflows.

---

## 📌 Project Overview
* **Framework:** Next.js (App Router) + React + TypeScript
* **Styling:** Tailwind CSS + Radix UI + Lucide Icons + Framer Motion
* **Deployment:** GitHub Pages (`gh-pages`)
* **Production URL:** [https://techmiyaedtech.com](https://techmiyaedtech.com)

---

## 🛠️ Summary of Key Changes & Features

### 1. Route Migration: `/register` $\rightarrow$ `/enquiry`
* **Folder Structure:** Moved from `src/app/register/` to `src/app/enquiry/`
* **Metadata & SEO:** Updated Canonical URL and OpenGraph URLs in [`src/app/enquiry/page.tsx`](file:///d:/TechmiyaEdTech-Website/src/app/enquiry/page.tsx) to `https://www.techmiyaedtech.com/enquiry`.
* **Cross-Site Navigation:** Updated all internal links across the website (`Header.tsx`, `page.tsx`, `reviews/page.tsx`, `courses/page.tsx`, and course detail pages) to route to `/enquiry`.
* **Form Button Labels:** Changed "Register Now" / "Register" to "Enquire Now".

### 2. Google Sheets Integration for Enquiry Form
* **Component:** [`src/app/enquiry/RegisterClient.tsx`](file:///d:/TechmiyaEdTech-Website/src/app/enquiry/RegisterClient.tsx)
* **Web App URL:** Configured with Google Apps Script Web App endpoint:
  ```typescript
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwYzMb2-dAv_9VOG2ABKti_dgWaIkH3nA5CGkWCCEw_o90VTF0CQ_DEubv86JgPoe6y-w/exec";
  ```
* **Payload Structure:** Submits `{ name, email, phone, course, experience, message, time }` directly using `mode: "no-cors"` with `text/plain;charset=utf-8` to prevent browser CORS preflight blocking.
* **Google Apps Script Code:**
  ```javascript
  function doPost(e) {
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var data = JSON.parse(e.postData.contents);
      sheet.appendRow([
        data.time || new Date().toLocaleString(),
        data.name || "",
        data.email || "",
        data.phone || "",
        data.course || "",
        data.experience || "",
        data.message || ""
      ]);
      return ContentService
        .createTextOutput(JSON.stringify({ "result": "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
      return ContentService
        .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  ```

### 3. Header Navigation & Responsive Styling
* **Component:** [`src/components/Header.tsx`](file:///d:/TechmiyaEdTech-Website/src/components/Header.tsx)
* **Trainer Portal Link:** Added "Trainer" link directly after "Contact" in `navItems`, redirecting to `https://trainers.techmiyaedtech.com`.
* **Overflow & Wrapping Fixes:**
  * Added `shrink-0` and `whitespace-nowrap` to the Logo container and text.
  * Standardized desktop container width to `w-full max-w-[1600px] px-2 sm:px-4 lg:px-6`.
  * Compact navigation padding (`px-1.5 xl:px-2 py-1`) and typography (`text-xs xl:text-[13px] 2xl:text-sm`).
  * Scaled CTA buttons to `h-8` with `px-2 xl:px-3` to ensure zero horizontal scrolling or clipping across all screen sizes (1024px to 4K).

### 4. Homepage Tagline Removal
* **File:** [`src/app/page.tsx`](file:///d:/TechmiyaEdTech-Website/src/app/page.tsx)
* Removed the `"Learn What College Doesn't Teach You"` top banner from the Hero section.

### 5. Sticky Footer Enrollment Flow
* **Component:** [`src/components/StickyFooterBar.tsx`](file:///d:/TechmiyaEdTech-Website/src/components/StickyFooterBar.tsx)
* Clicking **🚀 Enroll Now** opens the learning journey modal dialog.
* Clicking **Enroll Now** inside the modal redirects to the student enrollment portal: `https://enrollment.techmiyaedtech.com/`.

---

## 🚀 Running the Project Locally

### 1. Prerequisites
* **Node.js:** v18.0 or higher
* **Package Manager:** npm or bun

### 2. Installation & Start
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note on Turbopack cache issue on Windows:** If you encounter a Turbopack database panic, clear the `.next` directory:
> ```powershell
> Remove-Item -Recurse -Force .next
> npm run dev
> ```

---

## 🚢 Deployment Workflow (GitHub Pages)

Whenever changes are made:

```bash
# 1. Stage all changed files
git add .

# 2. Commit with descriptive message
git commit -m "Your commit message"

# 3. Push to main branch
git push origin main

# 4. Build and deploy to GitHub Pages
npm run deploy
```

---

## 📂 Key Directory Map
```text
TechmiyaEdTech-Website/
├── src/
│   ├── app/
│   │   ├── page.tsx                     # Homepage (Hero, Features, Stats)
│   │   ├── enquiry/                     # /enquiry route & form
│   │   │   ├── page.tsx                 # Metadata & Server wrapper
│   │   │   └── RegisterClient.tsx       # Client-side form & Google Sheets submission
│   │   ├── courses/                     # All course listing & course detail pages
│   │   ├── reviews/                     # Reviews page
│   │   ├── contact/                     # Contact page
│   │   └── services/                    # Service sub-pages
│   └── components/
│       ├── Header.tsx                   # TopBar + Main Navigation + CTA buttons
│       ├── Footer.tsx                   # Footer with social & quick links
│       ├── StickyFooterBar.tsx          # Floating bottom bar with Enroll Now modal
│       └── ui/                          # Radix UI + Tailwind reusable components
├── package.json                         # Dependencies and build/deploy scripts
└── README.md                            # Documentation
```
