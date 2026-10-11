"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Award,
  Terminal,
  BookOpen,
  CheckCircle,
  ExternalLink,
  Code2,
  Sparkles
} from "lucide-react";

export const existingTutorials = [
  { name: "Git & GitHub", path: "/tutorials/git-github", badge: "New & Certified", isCurrent: true },
  { name: "Python", path: "https://tutorials.techmiyaedtech.com/python", isCurrent: false },
  { name: "Java", path: "https://tutorials.techmiyaedtech.com/java", isCurrent: false },
  { name: "Golang", path: "https://tutorials.techmiyaedtech.com/golang", isCurrent: false },
  { name: "C", path: "https://tutorials.techmiyaedtech.com/c", isCurrent: false },
  { name: "C++", path: "https://tutorials.techmiyaedtech.com/cpp", isCurrent: false },
  { name: "JavaScript", path: "https://tutorials.techmiyaedtech.com/javascript", isCurrent: false },
  { name: "SQL", path: "https://tutorials.techmiyaedtech.com/sql", isCurrent: false },
  { name: "Linux", path: "https://tutorials.techmiyaedtech.com/linux", isCurrent: false },
  { name: "Flask", path: "https://tutorials.techmiyaedtech.com/flask", isCurrent: false },
  { name: "Django", path: "https://tutorials.techmiyaedtech.com/django", isCurrent: false },
  { name: "HTML", path: "https://tutorials.techmiyaedtech.com/html", isCurrent: false },
  { name: "CSS", path: "https://tutorials.techmiyaedtech.com/css", isCurrent: false },
  { name: "DevOps", path: "https://tutorials.techmiyaedtech.com/devops", isCurrent: false },
];

export const TutorialHeader: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isGitSection = pathname?.startsWith("/tutorials/git-github");

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Notice Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 text-amber-300 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Techmiya Tutorials Certification:
        </span>
        <span className="hidden sm:inline text-slate-200">
          Complete all 100 Git & GitHub units + 15 Practical Labs + score 31/50 on Final Assessment to earn verified PDF certificate!
        </span>
        <Link
          href="/tutorials/git-github/assessment"
          className="text-amber-400 hover:text-amber-300 underline font-semibold ml-1"
        >
          Take Assessment
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo */}
          <Link href="/tutorials/git-github" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-mono text-base font-black">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight leading-none group-hover:text-amber-600 transition-colors">
                Techmiya <span className="text-amber-500 font-black">Tutorials</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                Learn Programming for Free
              </span>
            </div>
          </Link>

          {/* Center Navigation Menu (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm">
            {/* Tutorials Dropdown with all courses */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                  isGitSection
                    ? "bg-amber-50 text-amber-700 font-bold"
                    : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
              >
                <span>All Tutorials</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-[460px] bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 grid grid-cols-2 gap-1.5 z-50">
                  <div className="col-span-2 px-3 py-1.5 mb-1 bg-amber-50/70 rounded-lg text-xs font-semibold text-amber-800 flex items-center justify-between">
                    <span>Techmiya Learning Tracks</span>
                    <span className="text-[10px] bg-amber-200/80 text-amber-900 px-1.5 py-0.5 rounded font-mono">14 Tracks</span>
                  </div>

                  {existingTutorials.map((course) => (
                    <Link
                      key={course.name}
                      href={course.path}
                      onClick={() => setIsDropdownOpen(false)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        course.name === "Git & GitHub"
                          ? "bg-amber-500 text-slate-950 font-bold shadow-sm"
                          : "text-slate-700 hover:bg-slate-100/80 hover:text-amber-600"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {course.name === "Git & GitHub" ? "🚀" : "📖"}
                        <span>{course.name}</span>
                      </span>
                      {course.badge && (
                        <span className="text-[10px] bg-slate-950 text-amber-300 px-1.5 py-0.5 rounded-full font-bold">
                          {course.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Git & GitHub Module Sub-Navigation */}
            <Link
              href="/tutorials/git-github"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/tutorials/git-github"
                  ? "bg-amber-100 text-amber-900 font-bold"
                  : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
              }`}
            >
              Curriculum (100 Units)
            </Link>

            <Link
              href="/tutorials/git-github/labs"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/tutorials/git-github/labs"
                  ? "bg-amber-100 text-amber-900 font-bold"
                  : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
              }`}
            >
              Practical Labs (15)
            </Link>

            <Link
              href="/tutorials/git-github/assessment"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/tutorials/git-github/assessment"
                  ? "bg-amber-100 text-amber-900 font-bold"
                  : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
              }`}
            >
              Final Assessment (50m)
            </Link>

            <Link
              href="/tutorials/git-github/certificate"
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                pathname === "/tutorials/git-github/certificate"
                  ? "bg-amber-100 text-amber-900 font-bold"
                  : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
              }`}
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Certificate</span>
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="/compiler"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Online Compiler</span>
            </Link>

            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-colors shadow-sm"
            >
              <span>Main Website</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto shadow-xl">
          <div className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-1">
            Git & GitHub Certification
          </div>
          <Link
            href="/tutorials/git-github"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm text-slate-800 hover:bg-amber-50"
          >
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>Course Home (100 Units)</span>
          </Link>
          <Link
            href="/tutorials/git-github/labs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm text-slate-800 hover:bg-amber-50"
          >
            <Terminal className="w-4 h-4 text-emerald-600" />
            <span>Practical Labs (15)</span>
          </Link>
          <Link
            href="/tutorials/git-github/assessment"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm text-slate-800 hover:bg-amber-50"
          >
            <CheckCircle className="w-4 h-4 text-blue-500" />
            <span>Final Assessment (50 Marks)</span>
          </Link>
          <Link
            href="/tutorials/git-github/certificate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm text-slate-800 hover:bg-amber-50"
          >
            <Award className="w-4 h-4 text-amber-500" />
            <span>Download Certificate</span>
          </Link>

          <hr className="border-slate-200" />

          <div className="font-bold text-xs uppercase tracking-wider text-slate-400 pt-1">
            All Techmiya Tutorials Tracks
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {existingTutorials.map((course) => (
              <Link
                key={course.name}
                href={course.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 flex items-center justify-between"
              >
                <span>{course.name}</span>
                {course.badge && (
                  <span className="text-[9px] bg-amber-500 text-slate-950 font-bold px-1 rounded">
                    NEW
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
