
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CallBackCTA } from "@/components/CallBackCTA";
import { CTAPopup } from "@/components/CTAPopup";

const Index = () => {
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
      avatar: "/adil.jpg"
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
      {/* Hero Section */}
      {/* Hero Section - Replaced with TAP ACADEMY version */}
      <section className="relative bg-background text-white overflow-hidden">
        <div className="absolute inset-0 bg-blue-800/100"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-20 lg:pb-32">
          {/* Top Tagline - Full Width */}
          <div className="flex justify-center mb-12 w-full">
            <div className="flex w-full items-center justify-center px-6 py-4 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all duration-300">
              <span className="mr-4 text-2xl animate-pulse"></span>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wide uppercase whitespace-nowrap drop-shadow-sm">
                "Learn What College Doesn't Teach You"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Rotating Tech Logos */}
            <div className="relative h-64 w-64 mx-auto lg:mx-0">
              {/* Circle Container */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-300/30 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-blue-200/20 animate-ping"></div>
              </div>

              {/* Rotating Logos */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-orbit origin-[50%_150px]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10" />
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-orbit origin-[-50px_50%] delay-1000">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-orbit origin-[50%_-50px] delay-2000">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-orbit origin-[150px_50%] delay-3000">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
              </div>

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-xl font-bold">TE</span>
                </div>
              </div>
            </div>

            {/* Right Side -  Content */}
            <div className="text-center lg:text-left">


              <Badge
                variant="secondary"
                className="mb-6 bg-yellow-400 text-blue-900 text-xl font-extrabold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
              >
                INDIA’S NO. 1 SOFTWARE, HARDWARE & AI TRAINING INSTITUTE
              </Badge>


              <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
                  TECHMIYA ED-TECH
                </span>
              </h1>

              <div className="space-y-5 mb-10">
                {/* <p className="text-2xl lg:text-3xl font-semibold flex items-center justify-center lg:justify-start text-white">
                  <span className="mr-3 text-3xl">🎯</span> Empowering the Next
                  Generation of Innovators
                </p> */}
                <p className="text-xl lg:text-2xl font-medium flex items-center justify-center lg:justify-start text-blue-100">
                  <span className="mr-3"></span> Bridging Technology and
                  Employment
                </p>

                <p className="text-4xl text-yellow-300 font-bold leading-relaxed">
                  Expertise in{" "}
                  <span className="text-white font-extrabold underline decoration-yellow-400 underline-offset-4 animate-pulse">
                    Machine Learning, AI, GenAI,{" "}
                    <span className="text-yellow-400 animate-glow">
                      Agentic AI
                    </span>
                    , and MCP
                  </span>
                </p>

                <p className="text-lg text-blue-100 leading-relaxed">
                  We also conduct{" "}
                  <strong className="text-yellow-300">
                    Corporate Trainings
                  </strong>{" "}
                  and{" "}
                  <strong className="text-yellow-300">
                    Engineering College Workshops
                  </strong>{" "}
                  led by expert IT trainers and IIT graduates.
                </p>
              </div>

              <p className="text-lg text-blue-100 mb-10 font-medium">
                Trusted by over{" "}
                <span className="font-bold text-yellow-300 text-2xl">
                  5,000+
                </span>{" "}
                students across India
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link to="/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-10 py-5 text-xl rounded-2xl shadow-md transition-transform hover:scale-105"
                  >
                    Attend Free Demo Class
                  </Button>
                </Link>

                {/* <Link to="/workshop-register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-10 py-5 text-xl rounded-2xl shadow-md transition-transform hover:scale-105"
                  >
                    Register For Webinar
                  </Button>
                </Link> */}

                <a href="https://lms.techmiyaedtech.com/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-10 py-5 text-xl rounded-2xl shadow-md transition-transform hover:scale-105"
                  >
                    Get Access to LMS
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Marquee */}
        <div className="relative bg-white/10 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-blue-200 text-sm font-semibold mb-4">OUR RECRUITMENT PARTNERS</h3>
            <div className="flex overflow-hidden space-x-12">
              <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center">
                <div className="flex items-center space-x-2">
                  <img src="https://www.vectorkhazana.com/assets/images/products/google_ico.jpg" alt="Google" className="h-8 mix-blend-multiply" />
                  <span className="text-sm text-blue-900 font-medium">Google</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://pngimg.com/d/amazon_PNG13.png" alt="Amazon" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Amazon</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://pngimg.com/uploads/microsoft/microsoft_PNG6.png" alt="Microsoft" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Microsoft</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://static.vecteezy.com/system/resources/previews/020/190/476/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg" alt="Infosys" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Infosys</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Orcc8T6aZ8yvyRGyAFe8PzVp0QjW38NeWg&s" alt="TCS" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">TCS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyU_onXKtumMXrTrnSlGZK-LIi1Y0DGOStJw&s" alt="Accenture" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Accenture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://images.livemint.com/rf/Image-330x220/LiveMint/Period2/2017/05/05/Photos/Processed/wiprologo-kXmF--621x414@LiveMint.jpg" alt="Wipro" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Wipro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://e7.pngegg.com/pngimages/504/57/png-clipart-capgemini-logo-capgemini-logo-business-insuretech-connect-cfo-rising-europe-summit-others-blue-text.png" alt="Capgemini" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Capgemini</span>
                </div>
              </div>
              <div className="flex space-x-12 animate-marquee2 whitespace-nowrap items-center">
                <div className="flex items-center space-x-2">
                  <img src="https://logo.clearbit.com/google.com" alt="Google" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Google</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://logo.clearbit.com/amazon.com" alt="Amazon" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Amazon</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Microsoft</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://logo.clearbit.com/infosys.com" alt="Infosys" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Infosys</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://logo.clearbit.com/tcs.com" alt="TCS" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">TCS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://logo.clearbit.com/accenture.com" alt="Accenture" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Accenture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://logo.clearbit.com/wipro.com" alt="Wipro" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Wipro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://logo.clearbit.com/capgemini.com" alt="Capgemini" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white">Capgemini</span>
                </div>
              </div>
            </div>
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

      {/* CTA Section */}
      {/* CTA Section */}
      <CallBackCTA />

      {/* Popout CTA */}
      <CTAPopup />
    </div>
  );
};

export default Index;
