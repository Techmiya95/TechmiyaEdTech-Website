import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/SEOHead";
import { getCourseBySlug, courseSyllabi } from "@/data/courseSyllabi";
import { toast } from "sonner";
import {
    Phone,
    User,
    Clock,
    BookOpen,
    Trophy,
    Briefcase,
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    GraduationCap,
    IndianRupee,
    Wrench,
    ArrowLeft,
    MessageCircle,
    Send
} from "lucide-react";

const CourseDetail = () => {
    const { courseSlug } = useParams<{ courseSlug: string }>();
    const course = getCourseBySlug(courseSlug || "");
    const [expandedModule, setExpandedModule] = useState<number | null>(0);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedCourse, setSelectedCourse] = useState(course?.title || "");

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
                    <Link to="/courses">
                        <Button>View All Courses</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const handleEnrollSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone) {
            toast.error("Please fill in all fields");
            return;
        }

        const message = `Hi, I am ${name}. My number is ${phone}. I am interested in ${selectedCourse || course.title}. Please call me back with course details and fee structure.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/916363760275?text=${encodedMessage}`;

        toast.success("Redirecting to WhatsApp...");
        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
        }, 1500);
    };

    const toggleModule = (index: number) => {
        setExpandedModule(expandedModule === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SEOHead
                title={`${course.title} Course - Syllabus, Fee & Duration | Techmiya EdTech`}
                description={`${course.description} Learn ${course.title} in ${course.duration} with industry-oriented syllabus, placement support & certification.`}
                keywords={`${course.title} course, ${course.title} training Bangalore, ${course.title} syllabus, ${course.title} certification`}
                canonicalUrl={`/courses/${course.slug}`}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white py-16 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/courses" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to All Courses
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-amber-500 text-white mb-4 text-sm">{course.level}</Badge>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
                            <p className="text-xl text-blue-100 mb-6">{course.tagline}</p>
                            <p className="text-lg text-blue-200 mb-8">{course.description}</p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                    <Clock className="w-5 h-5 text-amber-400" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                    <BookOpen className="w-5 h-5 text-amber-400" />
                                    <span>{course.modules.length} Modules</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                    <Trophy className="w-5 h-5 text-amber-400" />
                                    <span>Certificate</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href="#enroll-form">
                                    <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8">
                                        Enroll Now
                                    </Button>
                                </a>
                                <a href="tel:+916363760275">
                                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-none">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Call: +91-6363760275
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Quick Enroll Form */}
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20" id="enroll-form">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white text-center">
                                    🚀 Get Course Details & Fee Structure
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <Input
                                            placeholder="Your Name"
                                            className="pl-10 bg-white text-gray-900"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <Input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="pl-10 bg-white text-gray-900"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                                        <SelectTrigger className="bg-white text-gray-900">
                                            <SelectValue placeholder="Select Course" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {courseSyllabi.map((c) => (
                                                <SelectItem key={c.id} value={c.title}>{c.title}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 text-lg">
                                        <Send className="w-5 h-5 mr-2" />
                                        Get Free Counselling
                                    </Button>
                                </form>
                                <p className="text-center text-blue-200 text-sm mt-4">
                                    ✅ 100% Free | No Spam | Instant Response
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Course Highlights */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {course.highlights.map((highlight, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl text-center">
                                <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                <p className="font-semibold text-gray-800 text-sm">{highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Syllabus */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Syllabus Accordion */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                📚 Detailed Course Syllabus
                            </h2>
                            <div className="space-y-4">
                                {course.modules.map((module, index) => (
                                    <Card
                                        key={index}
                                        className={`cursor-pointer transition-all duration-300 ${expandedModule === index ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'}`}
                                        onClick={() => toggleModule(index)}
                                    >
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                                        {index + 1}
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-lg">{module.title}</CardTitle>
                                                        <p className="text-sm text-gray-500">{module.duration}</p>
                                                    </div>
                                                </div>
                                                {expandedModule === index ? (
                                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                                )}
                                            </div>
                                        </CardHeader>
                                        {expandedModule === index && (
                                            <CardContent className="border-t pt-4">
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {module.topics.map((topic, topicIndex) => (
                                                        <li key={topicIndex} className="flex items-center gap-2 text-gray-700">
                                                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Sticky Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-6">
                                {/* Career Paths */}
                                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-green-800">
                                            <Briefcase className="w-5 h-5" />
                                            Career Opportunities
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {course.careerPaths.map((career, index) => (
                                                <li key={index} className="flex items-center gap-2 text-green-700">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    {career}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-4 pt-4 border-t border-green-200">
                                            <div className="flex items-center gap-2 text-green-800 font-bold">
                                                <IndianRupee className="w-5 h-5" />
                                                Salary: {course.salaryRange}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Tools You'll Learn */}
                                <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-blue-800">
                                            <Wrench className="w-5 h-5" />
                                            Tools & Technologies
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {course.tools.map((tool, index) => (
                                                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                                                    {tool}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Certification */}
                                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-amber-800">
                                            <GraduationCap className="w-5 h-5" />
                                            Certification
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-amber-700">{course.certification}</p>
                                    </CardContent>
                                </Card>

                                {/* Contact CTA */}
                                <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                                    <CardContent className="pt-6">
                                        <h3 className="text-xl font-bold mb-4 text-center">📞 Talk to Our Experts</h3>
                                        <div className="space-y-3">
                                            <a href="tel:+916363760275" className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg transition-colors">
                                                <Phone className="w-5 h-5" />
                                                <span className="font-semibold">Jayanagar: +91-6363760275</span>
                                            </a>
                                            <a href="tel:+919206798097" className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg transition-colors">
                                                <Phone className="w-5 h-5" />
                                                <span className="font-semibold">RR Nagar: +91-9206798097</span>
                                            </a>
                                            <a href="tel:+919591745792" className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg transition-colors">
                                                <Phone className="w-5 h-5" />
                                                <span className="font-semibold">Vijaynagar: +91-9591745792</span>
                                            </a>
                                            <a
                                                href={`https://wa.me/916363760275?text=Hi, I am interested in ${course.title} course. Please share course details.`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg transition-colors"
                                            >
                                                <MessageCircle className="w-5 h-5" />
                                                <span className="font-semibold">WhatsApp Us</span>
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prerequisites */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Prerequisites</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {course.prerequisites.map((prereq, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                <span className="text-gray-700">{prereq}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Ready to Start Your {course.title} Journey?
                    </h2>
                    <p className="text-xl text-blue-200 mb-8">
                        Join 5000+ successful students. Get 100% placement assistance and industry-recognized certification.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#enroll-form">
                            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-10 py-6 text-lg">
                                🚀 Enroll Now - Get Free Demo
                            </Button>
                        </a>
                        <a href="tel:+916363760275">
                            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-none">
                                <Phone className="w-4 h-4 mr-2" />
                                Call: +91-6363760275
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Related Courses */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">📚 Related Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {courseSyllabi
                            .filter(c => c.id !== course.id)
                            .slice(0, 3)
                            .map((relatedCourse) => (
                                <Link key={relatedCourse.id} to={`/courses/${relatedCourse.slug}`}>
                                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        <div className="aspect-video overflow-hidden">
                                            <img
                                                src={relatedCourse.image}
                                                alt={relatedCourse.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-lg">{relatedCourse.title}</CardTitle>
                                            <p className="text-sm text-gray-500">{relatedCourse.duration}</p>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetail;
