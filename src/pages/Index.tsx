
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CallBackCTA } from "@/components/CallBackCTA";
import { CTAPopup } from "@/components/CTAPopup";
import { LeadGenVoucher } from "@/components/LeadGenVoucher";
import { SEOHead } from "@/components/SEOHead";
import CollegeVsIndustrySection from "@/components/CollegeVsIndustrySection";
import { HeroLeadGenForm } from "@/components/HeroLeadGenForm";
import YouTubeShortsSection from "@/components/YouTubeShortsSection";
import InstagramReelsSection from "@/components/InstagramReelsSection";

const Index = () => {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Techmiya EdTech - Best IT Training Institute in Jayanagar, Bangalore",
    "description": "Premier IT Training Institute offering Generative AI, Machine Learning, Data Science, Python, AWS, DevOps courses in Jayanagar, Bangalore.",
    "url": "https://techmiyaedtech.com/",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "Techmiya EdTech"
    }
  };

  const featuredCourses = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Master both frontend and backend development with modern technologies",
      duration: "6 months",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description: "Learn Python, machine learning, and data visualization",
      duration: "4 months",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    },
    {
      id: 3,
      title: "Java Programming",
      description: "Complete Java development from basics to enterprise applications",
      duration: "5 months",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
    },
  ];

  const testimonials = [
    {
      name: "Adil T A",
      role: "Software Developer at HCL",
      content: "Tech Miya transformed my career. The hands-on approach and real-world projects prepared me for my dream job.",
      rating: 5,
      avatar: "/adil.jpeg"
    },
    {
      name: "Parvez Aktar",
      role: "Software Engineer at Techmiya Solutions",
      content: "The instructors are industry experts who provide invaluable insights. Best investment I've made in my education.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
    {
      name: "Syed Kashif",
      role: "Digital Marketing Head",
      content: "From zero to hero in just 6 months. The curriculum is perfectly structured and the support is amazing.",
      rating: 5,
      avatar: "/kashif.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Best IT Training Institute in Jayanagar, Bangalore"
        description="Techmiya EdTech - Premier IT Training Institute offering Generative AI, Machine Learning, Data Science, Python, AWS, DevOps, Cloud Computing courses. Transform your career with industry-ready skills in Jayanagar, Bangalore."
        keywords="Best IT training institute Bangalore, Generative AI courses, Machine Learning training Jayanagar, Data Science Python AWS DevOps, Software training Bangalore, AI ML courses, Full Stack Development, coding bootcamp Bangalore"
        canonicalUrl="/"
        structuredData={homepageSchema}
      />
      {/* Hero Section */}
      <section className="relative bg-background text-white overflow-hidden">
        <div className="absolute inset-0 bg-blue-800/100"></div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-6 pb-24 lg:pt-10 lg:pb-32">
          {/* Top Tagline - Full Width */}
          <div className="flex justify-center mb-6 w-full">
            <div className="flex w-full items-center justify-center px-4 sm:px-6 py-4 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all duration-300">
              <span className="mr-4 text-2xl animate-pulse hidden sm:block"></span>
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wide uppercase text-center drop-shadow-sm leading-tight">
                "Learn What College Doesn't Teach You"
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-2 w-full max-w-full">
            {/* Left Column - Rotating Tech Logos */}
            <div className="relative h-48 w-48 lg:h-52 lg:w-52 xl:h-64 xl:w-64 flex-shrink-0 order-2 lg:order-1 hidden lg:block scale-75 lg:scale-80 xl:scale-100 origin-center lg:origin-left">
              {/* Circle Container */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-300/30 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-blue-200/20 animate-ping"></div>
              </div>

              {/* Rotating Logos Wrapper */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                {/* HTML5 - Top */}
                <div className="absolute top-0 left-1/2 -mt-8 -ml-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-[spin_20s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10" />
                </div>
                {/* CSS3 - Right */}
                <div className="absolute top-1/2 right-0 -mr-8 -mt-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-[spin_20s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10" />
                </div>
                {/* JS - Bottom */}
                <div className="absolute bottom-0 left-1/2 -mb-8 -ml-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-[spin_20s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" />
                </div>
                {/* React - Left */}
                <div className="absolute top-1/2 left-0 -ml-8 -mt-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-[spin_20s_linear_infinite_reverse]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
                </div>
              </div>

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                  <img src="/edtech-logo.png" alt="Techmiya EdTech Logo" className="w-16 h-16 object-contain" />
                </div>
              </div>
            </div>

            {/* Center Column - Text Content */}
            <div className="text-center order-1 lg:order-2 flex-grow max-w-2xl px-2 lg:px-4 w-full flex flex-col items-center mx-auto">
              <Badge
                variant="secondary"
                className="mb-4 bg-yellow-400 text-blue-900 text-xs sm:text-base font-extrabold px-3 sm:px-4 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 text-center whitespace-normal"
              >
                INDIA'S NO. 1 SOFTWARE, HARDWARE & AI TRAINING INSTITUTE
              </Badge>

              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-4 leading-tight w-full">
                <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
                  TECHMIYA ED-TECH
                </span>
              </h1>

              <p className="text-base lg:text-lg font-medium text-blue-100 mb-3">
                Bridging Technology and Employment
              </p>

              <p className="text-lg lg:text-xl xl:text-2xl text-yellow-300 font-bold leading-relaxed mb-3 px-2">
                Expertise in{" "}
                <span className="text-white font-extrabold underline decoration-yellow-400 underline-offset-4 animate-pulse">
                  Machine Learning, AI, GenAI,{" "}
                  <span className="text-yellow-400 animate-glow">
                    Agentic AI
                  </span>
                  , and MCP
                </span>
              </p>

              <p className="text-sm lg:text-base text-blue-100 mb-5 font-medium">
                Trusted by over{" "}
                <span className="font-bold text-yellow-300 text-lg lg:text-xl">
                  50,000+
                </span>{" "}
                students across India
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center w-full mt-2">
                <Link to="/register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-6 py-4 text-base lg:text-lg rounded-2xl shadow-md transition-transform hover:scale-105"
                  >
                    Attend Free Demo Class
                  </Button>
                </Link>

                <a href="https://lms.techmiyaedtech.com/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-6 py-4 text-base lg:text-lg rounded-2xl shadow-md transition-transform hover:scale-105"
                  >
                    Get Access to LMS
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Lead Gen Voucher Form */}
            <div className="flex justify-end flex-shrink-0 order-3 w-full sm:w-auto lg:w-[260px] xl:w-[300px] mt-6 lg:mt-0 z-10">
              <HeroLeadGenForm />
            </div>
          </div>
        </div>

        {/* Company Marquee */}
        <div className="relative bg-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-blue-200 text-sm font-semibold mb-6 uppercase tracking-wider">🤝 Our Recruitment Partners</h3>
            {(() => {
              const partners = [
                // Big Tech & IT
                { name: "Google", domain: "google.com", color: "#4285F4" },
                { name: "Amazon", domain: "amazon.com", color: "#FF9900" },
                { name: "Microsoft", domain: "microsoft.com", color: "#00A4EF" },
                { name: "IBM", domain: "ibm.com", color: "#1F70C1" },
                { name: "Infosys", domain: "infosys.com", color: "#007CC3" },
                { name: "TCS", domain: "tcs.com", color: "#E2001A" },
                { name: "Accenture", domain: "accenture.com", color: "#A100FF" },
                { name: "Wipro", domain: "wipro.com", color: "#0A1F6B" },
                { name: "HCL", domain: "hcltech.com", color: "#0064C1" },
                { name: "Cognizant", domain: "cognizant.com", color: "#1A5091" },
                { name: "Capgemini", domain: "capgemini.com", color: "#0070AD" },
                { name: "Freshworks", domain: "freshworks.com", color: "#25C16F" },
                // Startups
                { name: "Swiggy", domain: "swiggy.com", color: "#FC8019" },
                { name: "Razorpay", domain: "razorpay.com", color: "#3395FF" },
                { name: "Unacademy", domain: "unacademy.com", color: "#08BD80" },
                { name: "CRED", domain: "cred.club", color: "#1C1C1C" },
                { name: "Meesho", domain: "meesho.com", color: "#9F2089" },
                { name: "Groww", domain: "groww.in", color: "#5367FF" },
                { name: "BrowserStack", domain: "browserstack.com", color: "#FF6600" },
                { name: "Postman", domain: "postman.com", color: "#FF6C37" },
                { name: "Simplilearn", domain: "simplilearn.com", color: "#2DC5A2" },
                { name: "Darwinbox", domain: "darwinbox.com", color: "#FF5733" },
                { name: "Chargebee", domain: "chargebee.com", color: "#F97316" },
                { name: "IndiaMart", domain: "indiamart.com", color: "#E32020" },
                { name: "Ather Energy", domain: "atherenergy.com", color: "#2DCA8C" },
                { name: "Dunzo", domain: "dunzo.com", color: "#00CB68" },
                { name: "Quizizz", domain: "quizizz.com", color: "#8854D0" },
                { name: "Haptik", domain: "haptik.ai", color: "#4A90D9" },
                { name: "Vyapar", domain: "vyaparapp.in", color: "#1F8C3B" },
                { name: "Khatabook", domain: "khatabook.com", color: "#E73C3E" },
              ];

              const strip = (
                <div className="flex items-stretch gap-4 whitespace-nowrap py-2">
                  {partners.map((p) => (
                    <div
                      key={p.name}
                      className="flex-shrink-0 flex flex-col items-center justify-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-md min-w-[90px] hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=128`}
                        alt={p.name}
                        className="w-9 h-9 object-contain rounded"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.style.display = "none";
                          const badge = img.nextElementSibling as HTMLElement | null;
                          if (badge) badge.style.display = "flex";
                        }}
                      />
                      {/* Fallback initial badge */}
                      <span
                        style={{
                          display: "none",
                          width: 36, height: 36,
                          borderRadius: 8,
                          background: p.color,
                          color: "#fff",
                          fontWeight: 800,
                          fontSize: 14,
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {p.name.charAt(0)}
                      </span>
                      <span className="text-[10px] font-bold text-gray-600 tracking-wide text-center leading-tight max-w-[80px]">
                        {p.name}
                      </span>
                    </div>
                  ))}
                </div>
              );

              return (
                <div className="flex overflow-hidden">
                  <div className="flex animate-marquee">{strip}</div>
                  <div className="flex animate-marquee ml-4" aria-hidden="true">{strip}</div>
                </div>
              );
            })()}

          </div>
        </div>

      </section>

      {/* Training Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Offer <span className="text-amber-500">3 Types</span> of Training
            </h2>
            <p className="text-xl text-gray-600">
              Choose the learning mode that fits your schedule and preference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* On Premise Classroom Training */}
            <Card className="bg-gradient-to-br from-amber-500 to-orange-600 border-0 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">🏫</span>
                </div>
                <CardTitle className="text-2xl font-bold text-white text-center">
                  On Premise Classroom Training
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90 mb-4">
                  Traditional face-to-face learning experience in our state-of-the-art classrooms with expert instructors.
                </p>
                <ul className="text-left text-white/80 space-y-2 text-sm">
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Direct interaction with trainers</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Hands-on lab sessions</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Peer learning & networking</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Real-time doubt resolution</li>
                </ul>
              </CardContent>
            </Card>

            {/* Instructor Led Live Online Class */}
            <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 border-0 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">💻</span>
                </div>
                <CardTitle className="text-2xl font-bold text-white text-center">
                  Instructor Led Live Online Class on LMS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90 mb-4">
                  Live interactive sessions with our expert trainers through our advanced Learning Management System.
                </p>
                <ul className="text-left text-white/80 space-y-2 text-sm">
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Live interactive sessions</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Access recorded sessions</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Learn from anywhere</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Real-time Q&A support</li>
                </ul>
              </CardContent>
            </Card>

            {/* Self Paced Training */}
            <Card className="bg-gradient-to-br from-purple-500 to-pink-600 border-0 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">🎯</span>
                </div>
                <CardTitle className="text-2xl font-bold text-white text-center">
                  Self Paced Training
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90 mb-4">
                  Learn at your own pace with our comprehensive pre-recorded courses and rich learning resources.
                </p>
                <ul className="text-left text-white/80 space-y-2 text-sm">
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Learn anytime, anywhere</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Lifetime access to content</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Progress at your own speed</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Practice exercises included</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            To bridge the gap between traditional education and industry requirements by providing
            practical, hands-on training that prepares students for successful tech careers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry-Focused</h3>
              <p className="text-gray-600">
                Curriculum designed with input from leading tech companies
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Support</h3>
              <p className="text-gray-600">
                Dedicated placement assistance and career guidance
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-gray-600">
                Real projects and practical experience from day one
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Techmiya Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Techmiya EdTech for IT Training in Bangalore?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Techmiya EdTech is the leading IT training institute in Jayanagar, Bangalore, offering comprehensive courses in Python, Java, JavaScript, Data Science, Machine Learning, and Artificial Intelligence. Our industry-expert trainers and hands-on curriculum ensure you gain the practical skills employers demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Placement Assistance</h3>
              <p className="text-gray-700 mb-4">
                We provide dedicated placement support to help you land your dream job in top IT companies. Our placement cell works closely with leading recruiters from Google, Amazon, Microsoft, TCS, Infosys, Wipro, and more. We offer resume building, mock interviews, and direct job referrals to ensure your success.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Resume optimization and LinkedIn profile building</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Mock interviews with industry professionals</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Direct referrals to partner companies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upskilling for Working Professionals</h3>
              <p className="text-gray-700 mb-4">
                Whether you are a fresher looking to start your IT career or an experienced professional wanting to upskill, our flexible batch timings and weekend classes accommodate your schedule. Learn Python programming, R for data analysis, advanced JavaScript frameworks, and cloud technologies to stay ahead in your career.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Weekend and evening batches available</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Self-paced learning with LMS access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Industry-recognized certifications</li>
              </ul>
            </div>
          </div>

          <CollegeVsIndustrySection />

          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white p-8 sm:p-16 rounded-3xl shadow-2xl relative overflow-hidden my-20">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400">
              Our Course Offerings
            </h3>
            <p className="text-blue-100 text-center mb-12 max-w-3xl mx-auto text-lg">
              We offer comprehensive training in the most in-demand technologies for software development and data careers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative z-10">
              {[
                { title: "Python", subtitle: "Programming", slug: "data-science-analytics", icon: "🐍" },
                { title: "Java", subtitle: "Development", slug: "java-programming", icon: "☕" },
                { title: "JavaScript", subtitle: "Full Stack", slug: "full-stack-development", icon: "⚡" },
                { title: "GenAI & LLM", subtitle: "AI/ML", slug: "generative-ai", icon: "🤖" },
                { title: "Agentic AI", subtitle: "Autonomous", slug: "generative-ai", icon: "🧠" },
                { title: "MCP", subtitle: "AI Protocol", slug: "generative-ai", icon: "🔗" },
                { title: "Data Science", subtitle: "ML & AI", slug: "data-science-analytics", icon: "📊" },
                { title: "AWS DevOps", subtitle: "Cloud", slug: "cloud-computing", icon: "☁️" },
                { title: "Embedded IoT", subtitle: "Hardware", slug: "embedded-iot", icon: "📡" },
                { title: "Android", subtitle: "Mobile Dev", slug: "android-development", icon: "📱" }
              ].map((item, index) => (
                <div key={index} className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white/15 flex flex-col justify-between h-full">
                  <Link to={`/courses/${item.slug}`} className="block">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div className="font-bold text-xl mb-1 text-white group-hover:text-amber-300 transition-colors">{item.title}</div>
                    <div className="text-sm text-blue-200 font-medium tracking-wider uppercase mb-4">{item.subtitle}</div>
                  </Link>

                  <div className="mt-auto pt-4 border-t border-white/10 space-y-3">
                    <Link to={`/courses/${item.slug}`}>
                      <Button variant="secondary" className="w-full bg-white/10 hover:bg-white/20 text-white border-none text-xs h-8">
                        View Syllabus
                      </Button>
                    </Link>
                    <a href="https://lms.techmiyaedtech.com/" target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs h-9 shadow-lg">
                        View Course
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600">
              Start your tech journey with our most popular programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Duration</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <Link to="/courses">
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="px-8">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from our successful graduates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reviews">
              <Button size="lg" variant="outline" className="px-8">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <YouTubeShortsSection />

      <InstagramReelsSection />

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for students, professionals, and organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services/corporate-training" className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Corporate Training</h3>
              <p className="text-gray-600 text-sm">Industry-focused upskilling programs for professionals.</p>
            </Link>
            <Link to="/services/csr-programs" className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CSR Programs</h3>
              <p className="text-gray-600 text-sm">Skill development initiatives aligned with CSR goals.</p>
            </Link>
            <Link to="/services/partnerships" className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Partnerships Building</h3>
              <p className="text-gray-600 text-sm">Strategic collaborations with academia & industry.</p>
            </Link>
            <Link to="/services/campus-drives" className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Campus Drives</h3>
              <p className="text-gray-600 text-sm">Placement drives & recruitment readiness programs.</p>
            </Link>
            <Link to="/services/hackathons" className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hackathons</h3>
              <p className="text-gray-600 text-sm">Innovation-driven coding & problem-solving events.</p>
            </Link>
            <Link to="/services/fdp-sdp" className="bg-gradient-to-br from-cyan-50 to-sky-50 p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FDP & SDP</h3>
              <p className="text-gray-600 text-sm">Faculty & Skill Development Programs.</p>
            </Link>
            <Link to="/services/internships" className="bg-gradient-to-br from-yellow-50 to-lime-50 p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Internships & Live Projects</h3>
              <p className="text-gray-600 text-sm">Hands-on industry exposure through real-world projects.</p>
            </Link>
            <Link to="/services/mentorship" className="bg-gradient-to-br from-indigo-50 to-violet-50 p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Mentorship</h3>
              <p className="text-gray-600 text-sm">One-on-one mentorship from experienced industry experts.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our IT training programs in Jayanagar, Bangalore
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Who can enroll in Techmiya EdTech programs?</h3>
              <p className="text-gray-600">Our programs are designed for students, fresh graduates, working professionals, and career switchers who want to build or upgrade skills in GenAI, ML, DL, Robotics, and related technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do I need prior technical experience?</h3>
              <p className="text-gray-600">No prior experience is required for beginner-level courses. We offer structured learning paths from basic to advanced levels to suit all learners.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you provide certificates and career support?</h3>
              <p className="text-gray-600">Yes, we provide course completion certificates along with career guidance, resume support, and interview preparation to help learners succeed professionally.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What training modes do you offer?</h3>
              <p className="text-gray-600">We offer online, offline, and hybrid training modes to provide flexible learning options for students and working professionals.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Are the courses project-based?</h3>
              <p className="text-gray-600">Yes, all our programs include hands-on projects, case studies, and practical assignments to ensure real-world learning experience.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you provide placement or career assistance?</h3>
              <p className="text-gray-600">We provide career guidance, resume building, and interview preparation support to help learners prepare for job opportunities at top IT companies.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the duration of the courses?</h3>
              <p className="text-gray-600">Course duration varies depending on the program, typically ranging from a few weeks to several months based on the skill level and complexity.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Will I receive a course completion certificate?</h3>
              <p className="text-gray-600">Yes, learners receive an industry-recognized course completion certificate after successfully completing the program.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How can I enroll or get more information?</h3>
              <p className="text-gray-600">You can enroll through our website or contact our support team at +91-6363760275 for counseling and detailed course information.</p>
            </div>
          </div>
        </div>
      </section >

      {/* Lead Generation - 20% Course Voucher */}
      <LeadGenVoucher />

      {/* CTA Section */}
      <CallBackCTA />

      {/* Popout CTA */}
      <CTAPopup />
    </div >
  );
};

export default Index;
