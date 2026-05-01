"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/logo.jpeg";

const TopBar = () => {
  return (
    <>
      {/* First Row - Job Guarantee Message */}
      {/* First Row - Job Guarantee Message */}
      <div className="bg-blue-800 text-white">
        <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2 text-xs sm:text-base">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 font-semibold text-center leading-tight">
              <span className="text-yellow-200 hidden sm:inline">✨</span>
              <span>We do offer 100% Job Guarantee Programs and Courses</span>
              <span className="sm:hidden text-yellow-200 text-[10px]">(Any degree/Gap/Non-IT)</span>
              <span className="hidden sm:inline text-yellow-200">(Irrespective of any degree/Year Gap/Non-IT)</span>
              <span className="text-yellow-200 hidden sm:inline">✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Branch Contact Details */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2 text-[11px] sm:text-sm">
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-center">
              <span className="flex items-center gap-1 text-amber-400 w-full sm:w-auto justify-center mb-1 sm:mb-0">
                <MapPin className="w-3 h-3" />
                <span className="font-semibold">Branches:</span>
              </span>
              <a href="tel:+916363760275" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>Jayanagar: +91-6363760275</span>
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a href="tel:+919206798097" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>RR Nagar: +91-9206798097</span>
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a href="tel:+919591745792" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>Vijaynagar: +91-9591745792</span>
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a href="tel:+919591745792" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>Davangere: +91-9591745792</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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

  const isActive = (path: string) => pathname === path;
  const isServiceActive = serviceItems.some(item => pathname === item.path);

  return (
    <div className="md:sticky md:top-0 z-50">
      <TopBar />
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/techmiyaedtech_new_logo.png" alt="Tech Miya Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-amber-500">Techmiya Ed-Tech </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-3 items-center">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base font-semibold transition-all duration-200 ${isActive(item.path)
                    ? "text-amber-600 bg-amber-50"
                    : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
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
                  className={`px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base font-semibold transition-all duration-200 flex items-center gap-1 ${isServiceActive
                    ? "text-amber-600 bg-amber-50"
                    : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                    }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
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
                item.path.startsWith("http") ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base font-semibold transition-all duration-200 text-gray-700 hover:text-amber-600 hover:bg-gray-50 whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base font-semibold transition-all duration-200 whitespace-nowrap ${isActive(item.path)
                      ? "text-amber-600 bg-amber-50"
                      : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
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
                  className={`px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base font-semibold transition-all duration-200 flex items-center gap-1 text-gray-700 hover:text-amber-600 hover:bg-gray-50`}
                >
                  Jobs
                  <ChevronDown className={`w-4 h-4 transition-transform ${isJobsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isJobsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
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
            <div className="hidden lg:flex gap-2 xl:gap-4">
              <a href="https://lms.techmiyaedtech.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm xl:text-base px-3 xl:px-4">
                  Access LMS
                </Button>
              </a>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm xl:text-base px-3 xl:px-4">
                  Enquire Now
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden">
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

                {navItems.slice(2).map((item) => (
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
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full mt-2"
                >
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Register Now
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

