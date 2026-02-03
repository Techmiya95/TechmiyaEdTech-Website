
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/logo.jpeg";

const TopBar = () => {
  return (
    <>
      {/* First Row - Job Guarantee Message */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2.5 text-base">
            <div className="flex items-center gap-2 font-semibold animate-pulse">
              <span className="text-yellow-200">✨</span>
              <span>We do offer 100% Job Guarantee Programs and Courses</span>
              <span className="hidden sm:inline text-yellow-200">(Irrespective of any degree/Year Gap/Non-IT)</span>
              <span className="sm:hidden text-yellow-200">(Any degree/Gap/Non-IT)</span>
              <span className="text-yellow-200">✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Branch Contact Details */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2 text-sm overflow-x-auto">
            <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap">
              <span className="flex items-center gap-1 text-amber-400">
                <MapPin className="w-3 h-3" />
                <span className="font-semibold">Branches:</span>
              </span>
              <a href="tel:+916363760275" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>Jayanagar: +91-6363760275</span>
              </a>
              <a href="tel:+919206798097" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>RR Nagar: +91-9206798097</span>
              </a>
              <a href="tel:+919591745792" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>Vijaynagar: +91-9591745792</span>
              </a>
              <a href="tel:+919591745792" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>Davengere: +91-9591745792</span>
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
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Reviews", path: "/reviews" },
    { name: "Psychometric Test", path: "https://pt.techmiyaedtech.com/" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "https://blogs.techmiyaedtech.com/" },
    { name: "Jobs", path: "https://jobs.techmiyaedtech.com/" }
  ];

  const serviceItems = [
    { name: "🏢 Corporate Training", path: "/services/corporate-training" },
    { name: "🤝 CSR Programs", path: "/services/csr-programs" },
    { name: "🔗 Partnerships Building", path: "/services/partnerships" },
    { name: "🎓 Campus Drives", path: "/services/campus-drives" },
    { name: "💻 Hackathons", path: "/services/hackathons" },
    { name: "📚 FDP & SDP", path: "/services/fdp-sdp" },
    { name: "🚀 Internships & Live Projects", path: "/services/internships" },
    { name: "👨‍💼 Industry Mentorship", path: "/services/mentorship" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = serviceItems.some(item => location.pathname === item.path);

  return (
    <div className="sticky top-0 z-50">
      <TopBar />
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src="techmiyaedtech_new_logo.png" alt="Tech Miya Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-amber-500">Techmiya Ed-Tech </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 items-center">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${isActive(item.path)
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
                  className={`px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 flex items-center gap-1 ${isServiceActive
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
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 text-sm font-medium transition-colors ${isActive(item.path)
                          ? "text-amber-600 bg-amber-50"
                          : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                          }`}
                      >
                        {item.name}
                      </Link>
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
                    className="px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${isActive(item.path)
                      ? "text-amber-600 bg-amber-50"
                      : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex gap-4">
              <a href="https://lms.techmiyaedtech.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  Access LMS
                </Button>
              </a>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Enquire Now
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                {navItems.slice(0, 2).map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
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
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-2 py-1.5 rounded text-sm font-medium transition-colors ${isActive(item.path)
                          ? "text-amber-600 bg-amber-50"
                          : "text-gray-600 hover:text-amber-600"
                          }`}
                      >
                        {item.name}
                      </Link>
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
                      to={item.path}
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
                <a href="https://lms.techmiyaedtech.com/" target="_blank" rel="noopener noreferrer" className="block w-full mt-4">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                    Access LMS
                  </Button>
                </a>
                <Link
                  to="/register"
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

