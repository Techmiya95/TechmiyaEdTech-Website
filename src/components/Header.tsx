"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/logo.jpeg";

const TopBar = () => {
  const branchesItems = (
    <div className="flex items-center gap-x-5 text-[11px] sm:text-xs font-medium px-4 shrink-0">
      <span className="flex items-center gap-1 text-amber-300 font-semibold">
        <MapPin className="w-3 h-3 text-amber-300" />
        <span>Branches:</span>
      </span>
      <a href="tel:+916363760275" className="flex items-center gap-1 hover:text-amber-300 transition-colors">
        <Phone className="w-3 h-3 text-amber-300" />
        <span>Jayanagar: +91-6363760275</span>
      </a>
      <span className="text-blue-300/40">|</span>
      <a href="tel:+919206798097" className="flex items-center gap-1 hover:text-amber-300 transition-colors">
        <Phone className="w-3 h-3 text-amber-300" />
        <span>RR Nagar: +91-9206798097</span>
      </a>
      <span className="text-blue-300/40">|</span>
      <a href="tel:+919591745792" className="flex items-center gap-1 hover:text-amber-300 transition-colors">
        <Phone className="w-3 h-3 text-amber-300" />
        <span>Vijaynagar: +91-9591745792</span>
      </a>
      <span className="text-blue-300/40">|</span>
      <a href="tel:+919591745792" className="flex items-center gap-1 hover:text-amber-300 transition-colors">
        <Phone className="w-3 h-3 text-amber-300" />
        <span>Davangere: +91-9591745792</span>
      </a>
      <span className="text-amber-300 font-bold ml-2">✦</span>
    </div>
  );

  return (
    <div className="relative bg-blue-800 text-white overflow-hidden py-1.5 sm:py-2 w-full max-w-full">
      {/* Background Marquee: Branches moving from Left to Right behind the content */}
      <div className="absolute inset-0 flex items-center z-0 pointer-events-auto">
        <div className="animate-marquee-ltr flex items-center opacity-85 hover:opacity-100 transition-opacity">
          {branchesItems}
          {branchesItems}
          {branchesItems}
          {branchesItems}
        </div>
      </div>

      {/* Foreground: Job Guarantee Message in the Middle */}
      <div className="relative z-10 mx-auto px-4 max-w-fit pointer-events-none">
        <div className="bg-blue-800/95 backdrop-blur-[2px] shadow-[0_0_24px_16px_rgba(30,64,175,0.95)] px-4 py-0.5 rounded-full border border-blue-400/30 pointer-events-auto">
          <div className="flex items-center justify-center gap-1 sm:gap-2 font-semibold text-center text-xs sm:text-sm whitespace-nowrap leading-tight">
            <span className="text-yellow-200 hidden sm:inline mr-0.5">✨</span>
            <span>We do offer 100% Job Guarantee Programs and Courses</span>
            <span className="sm:hidden text-yellow-200 text-[10px] ml-1">(Any degree/Gap/Non-IT)</span>
            <span className="hidden sm:inline text-yellow-200 ml-1">(Irrespective of any degree/Year Gap/Non-IT)</span>
            <span className="text-yellow-200 hidden sm:inline ml-0.5">✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Tutorials", path: "https://tutorials.techmiyaedtech.com/" },
    { name: "Reviews", path: "/reviews" },
    { name: "Placements", path: "/placements" },
    { name: "Psychometric Test", path: "https://pt.techmiyaedtech.com/" },
    { name: "Contact", path: "/contact" },
    { name: "Trainer", path: "https://trainers.techmiyaedtech.com" },
    { name: "Blog", path: "https://blogs.techmiyaedtech.com/" },
  ];

  const jobItems = [
    { name: "🏢 On Campus", path: "https://oncampusjobs.techmiyaedtech.com/" },
    { name: "🌐 Off Campus", path: "https://offcampusjobs.techmiyaedtech.com/" },
    { name: "👨‍💼 Admin", path: "https://app.lineupx.com/job-board/login" },
  ];

  const serviceItems = [
    { name: "🎓 Workshops", path: "/services/workshops" },
    { name: "🏢 Corporate Training", path: "/services/corporate-training" },
    { name: "🤝 CSR Programs", path: "/services/csr-programs" },
    { name: "🔗 Partnerships Building", path: "/services/partnerships" },
    { name: "🎓 Campus Drives", path: "/services/campus-drives" },
    { name: "💻 Hackathons", path: "/services/hackathons" },
    { name: "📚 FDP & SDP", path: "/services/fdp-sdp" },
    { name: "🚀 Internships & Live Projects", path: "/services/internships" },
    { name: "👨‍💼 Industry Mentorship", path: "/services/mentorship" },
    { name: "📜 MoU", path: "/services/mou" },
    { name: "💻 Compiler", path: "/compiler" },
  ];

  const tutorialItems = [
    { name: "Python", path: "https://tutorials.techmiyaedtech.com/python" },
    { name: "Java", path: "https://tutorials.techmiyaedtech.com/java" },
    { name: "JavaScript", path: "https://tutorials.techmiyaedtech.com/javascript" },
    { name: "C", path: "https://tutorials.techmiyaedtech.com/c" },
    { name: "C++", path: "https://tutorials.techmiyaedtech.com/cpp" },
    { name: "Golang", path: "https://tutorials.techmiyaedtech.com/golang" },
    { name: "SQL", path: "https://tutorials.techmiyaedtech.com/sql" },
    { name: "Linux", path: "https://tutorials.techmiyaedtech.com/linux" },
    { name: "HTML", path: "https://tutorials.techmiyaedtech.com/html" },
    { name: "CSS", path: "https://tutorials.techmiyaedtech.com/css" },
    { name: "React", path: "https://tutorials.techmiyaedtech.com/react" },
    { name: "FastAPI", path: "https://tutorials.techmiyaedtech.com/fastapi" },
    { name: "Django", path: "https://tutorials.techmiyaedtech.com/django" },
    { name: "Flask", path: "https://tutorials.techmiyaedtech.com/flask" },
    { name: "Machine Learning", path: "https://tutorials.techmiyaedtech.com/machine-learning" },
    { name: "Generative AI", path: "https://tutorials.techmiyaedtech.com/generative-ai" },
    { name: "MLOps", path: "https://tutorials.techmiyaedtech.com/mlops" },
    { name: "Cybersecurity", path: "https://tutorials.techmiyaedtech.com/cybersecurity" },
    { name: "Data Analytics", path: "https://tutorials.techmiyaedtech.com/data-analytics" },
    { name: "Power BI", path: "https://tutorials.techmiyaedtech.com/power-bi" },
    { name: "Excel", path: "https://tutorials.techmiyaedtech.com/excel" },
    { name: "DevOps", path: "https://tutorials.techmiyaedtech.com/devops" },
    { name: "AWS", path: "https://tutorials.techmiyaedtech.com/aws" },
    { name: "Docker", path: "https://tutorials.techmiyaedtech.com/docker" },
    { name: "Kubernetes", path: "https://tutorials.techmiyaedtech.com/kubernetes" },
    { name: "Jenkins", path: "https://tutorials.techmiyaedtech.com/jenkins" },
    { name: "Terraform", path: "https://tutorials.techmiyaedtech.com/terraform" },
    { name: "Ansible", path: "https://tutorials.techmiyaedtech.com/ansible" },
    { name: "GitHub", path: "https://tutorials.techmiyaedtech.com/github" },
    { name: "Jira", path: "https://tutorials.techmiyaedtech.com/jira" },
    { name: "Shell", path: "https://tutorials.techmiyaedtech.com/shell" },
    { name: "Monitoring", path: "https://tutorials.techmiyaedtech.com/monitoring" },
  ];

  const isActive = (path: string) => pathname === path;
  const isServiceActive = serviceItems.some(item => pathname === item.path);

  return (
    <div className="md:sticky md:top-0 z-50 w-full">
      <TopBar />
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs w-full">
        <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 xl:px-4 2xl:px-6">
          <div className="flex justify-between items-center h-16 xl:h-[70px] 2xl:h-[72px] gap-1 xl:gap-2">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1.5 xl:space-x-2 shrink-0 mr-1 xl:mr-2 group">
              <img
                src="/techmiyaedtech_new_logo.png"
                alt="Tech Miya Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 object-contain shrink-0 group-hover:scale-105 transition-transform duration-200 drop-shadow-xs"
              />
              <span className="text-sm sm:text-base xl:text-[17px] 2xl:text-xl font-extrabold text-amber-500 group-hover:text-amber-600 transition-colors whitespace-nowrap tracking-tight">
                Techmiya Ed-Tech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-0.5 2xl:space-x-1 items-center">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-1.5 xl:px-2 2xl:px-2.5 py-1 xl:py-1.5 rounded-lg text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold transition-all duration-200 whitespace-nowrap ${
                    isActive(item.path)
                      ? "text-amber-600 bg-amber-50 shadow-xs"
                      : "text-gray-700 hover:text-amber-600 hover:bg-amber-50/70"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`px-1.5 xl:px-2 2xl:px-2.5 py-1 xl:py-1.5 rounded-lg text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold transition-all duration-200 flex items-center gap-0.5 whitespace-nowrap ${
                    isServiceActive
                      ? "text-amber-600 bg-amber-50 shadow-xs"
                      : "text-gray-700 hover:text-amber-600 hover:bg-amber-50/70"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-amber-600" : ""}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-[100]">
                    {serviceItems.map((item) => (
                      item.path.startsWith("http") ? (
                        <a
                          key={item.name}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm font-medium transition-colors text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.path}
                          className={`block px-4 py-2 text-sm font-medium transition-colors ${isActive(item.path)
                            ? "text-amber-600 bg-amber-50"
                            : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                            }`}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>

              {navItems.slice(2).map((item) => (
                item.name === "Tutorials" ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsTutorialsOpen(true)}
                    onMouseLeave={() => setIsTutorialsOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setIsTutorialsOpen(!isTutorialsOpen)}
                      className={`px-1.5 xl:px-2 2xl:px-2.5 py-1 xl:py-1.5 rounded-lg text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold transition-all duration-200 flex items-center gap-0.5 whitespace-nowrap ${
                        pathname.startsWith("/tutorials")
                          ? "text-amber-600 bg-amber-50 shadow-xs"
                          : "text-gray-700 hover:text-amber-600 hover:bg-amber-50/70"
                      }`}
                    >
                      Tutorials
                      <span className="ml-1 px-1.5 py-0.2 text-[9px] bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-bold leading-none shadow-xs">NEW</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isTutorialsOpen ? "rotate-180 text-amber-600" : ""}`} />
                    </button>

                    {isTutorialsOpen && (
                      <div className="absolute top-full -left-12 xl:left-0 mt-1 w-[620px] bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-[100]">
                        <div className="grid grid-cols-4 gap-1">
                          {tutorialItems.map((tutorial) => (
                            <a
                              key={tutorial.name}
                              href={tutorial.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-2.5 py-1.5 text-xs xl:text-[13px] font-medium transition-colors text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md truncate"
                              onClick={() => setIsTutorialsOpen(false)}
                            >
                              {tutorial.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.path.startsWith("http") ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-1.5 xl:px-2 2xl:px-2.5 py-1 xl:py-1.5 rounded-lg text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold transition-all duration-200 text-gray-700 hover:text-amber-600 hover:bg-amber-50/70 whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`px-1.5 xl:px-2 2xl:px-2.5 py-1 xl:py-1.5 rounded-lg text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold transition-all duration-200 whitespace-nowrap ${
                      isActive(item.path)
                        ? "text-amber-600 bg-amber-50 shadow-xs"
                        : "text-gray-700 hover:text-amber-600 hover:bg-amber-50/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}

              {/* Jobs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsJobsOpen(true)}
                onMouseLeave={() => setIsJobsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsJobsOpen(!isJobsOpen)}
                  className="px-1.5 xl:px-2 2xl:px-2.5 py-1 xl:py-1.5 rounded-lg text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold transition-all duration-200 flex items-center gap-0.5 whitespace-nowrap text-gray-700 hover:text-amber-600 hover:bg-amber-50/70"
                >
                  Jobs
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isJobsOpen ? "rotate-180 text-amber-600" : ""}`} />
                </button>

                {isJobsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-[100]">
                    {jobItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm font-medium transition-colors text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden xl:flex items-center gap-1.5 2xl:gap-2.5 shrink-0 ml-1 pr-1">
              <a href="https://lms.techmiyaedtech.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs 2xl:text-sm px-2.5 xl:px-3 2xl:px-4 py-1.5 h-8.5 xl:h-9 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap">
                  Access LMS
                </Button>
              </a>
              <Link href="/enquiry">
                <Button className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-extrabold text-xs xl:text-[13px] 2xl:text-sm px-3.5 xl:px-4.5 2xl:px-5 py-1.5 h-8.5 xl:h-9 rounded-lg shadow-md hover:shadow-lg ring-1 ring-purple-400/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap">
                  Enquire Now
                </Button>
              </Link>
            </div>

            {/* Mobile / Tablet menu button */}
            <div className="flex xl:hidden items-center space-x-2">
              <Link href="/enquiry" className="hidden sm:inline-flex">
                <Button className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-extrabold text-xs px-3.5 py-1.5 h-8.5 rounded-lg shadow-md ring-1 ring-purple-400/40 whitespace-nowrap">
                  Enquire Now
                </Button>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="xl:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                {navItems.slice(0, 2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.path)
                      ? "text-amber-600 bg-amber-50"
                      : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Services Section */}
                <div className="px-3 py-2">
                  <p className="text-sm font-bold text-gray-900 mb-2">Our Services</p>
                  <div className="pl-2 space-y-1 border-l-2 border-amber-200">
                    {serviceItems.map((item) => (
                      item.path.startsWith("http") ? (
                        <a
                          key={item.name}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-2 py-1.5 rounded text-sm font-medium transition-colors text-gray-600 hover:text-amber-600"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-2 py-1.5 rounded text-sm font-medium transition-colors ${isActive(item.path)
                            ? "text-amber-600 bg-amber-50"
                            : "text-gray-600 hover:text-amber-600"
                            }`}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>

                {/* Mobile Tutorials Section */}
                <div className="px-3 py-2">
                  <p className="text-sm font-bold text-gray-900 mb-2 flex items-center justify-between">
                    <span>Tutorials</span>
                  </p>
                  <div className="pl-2 grid grid-cols-2 gap-1 border-l-2 border-amber-300 max-h-60 overflow-y-auto pr-1">
                    {tutorialItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-2 py-1.5 rounded text-xs font-medium transition-colors text-gray-700 hover:text-amber-600 hover:bg-amber-50 truncate"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {navItems.slice(2).filter((item) => item.name !== "Tutorials").map((item) => (
                  item.path.startsWith("http") ? (
                    <a
                      key={item.name}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.path)
                        ? "text-amber-600 bg-amber-50"
                        : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                        }`}
                    >
                      {item.name}
                    </Link>
                  )
                ))}

                {/* Mobile Jobs Section */}
                <div className="px-3 py-2">
                  <p className="text-sm font-bold text-gray-900 mb-2">Jobs</p>
                  <div className="pl-2 space-y-1 border-l-2 border-amber-200">
                    {jobItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-2 py-1.5 rounded text-sm font-medium transition-colors text-gray-600 hover:text-amber-600"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <a href="https://lms.techmiyaedtech.com/" target="_blank" rel="noopener noreferrer" className="block w-full mt-4">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                    Access LMS
                  </Button>
                </a>
                <Link
                  href="/enquiry"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full mt-2"
                >
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Enquire Now
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

