import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Users, IndianRupee, Download, Monitor, Wifi, Laptop, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Workshops = () => {
    const tiers = [
        {
            tier: "Tier 1",
            name: "Intensive Skills Workshop",
            duration: "3 Days (Intensive)",
            investment: "₹3,000",
            minBatch: "60 Students",
            description: "Ideal for a quick dive into specific emerging technologies.",
            deliverables: [
                "Industry-recognized Certification",
                "1 Year of online access to workshop materials and resources"
            ],
            color: "from-blue-500 to-cyan-500",
            icon: "🚀"
        },
        {
            tier: "Tier 2",
            name: "Intermediate Training Program",
            duration: "32+ Hours of guided training",
            investment: "₹5,000",
            minBatch: "60 Students",
            description: "Designed for deeper conceptual understanding and practical application.",
            deliverables: [
                "Professional Certification",
                "1 Year of LMS access for self-paced review"
            ],
            color: "from-indigo-600 to-purple-600",
            icon: "🎯",
            popular: true
        },
        {
            tier: "Tier 3",
            name: "Professional Career Track",
            duration: "90+ Hours of comprehensive training",
            investment: "₹10,000",
            minBatch: "60 Students",
            description: "Our most comprehensive program focused on total mastery and employability.",
            deliverables: [
                "Multiple specialized Certifications",
                "2 Years of LMS access featuring updated industry content",
                "Direct Placement Support: Guaranteed opportunities for job interviews"
            ],
            color: "from-purple-700 to-pink-600",
            icon: "🏆"
        }
    ];

    const requirements = [
        {
            icon: <Monitor className="w-8 h-8 text-blue-500" />,
            title: "Lab Setup",
            desc: "Dedicated computer lab with 60+ functional workstations."
        },
        {
            icon: <Wifi className="w-8 h-8 text-cyan-500" />,
            title: "Connectivity",
            desc: "High-speed, stable internet availability for all systems."
        },
        {
            icon: <Laptop className="w-8 h-8 text-indigo-500" />,
            title: "Alternative",
            desc: "Students can use personal laptops with pre-installed software (guidance provided)."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <SEOHead
                title="Technical Workshops - Techmiya EdTech | Bridge Academic-Industry Gap"
                description="Elevate your skills with Techmiya's tiered training modules. From intensive 3-day workshops to comprehensive 90+ hour career tracks in AI, Web Dev, and Data Science."
                keywords="Techmiya workshops, technical training, industry skills, AI workshop, web development training, data science workshop Bangalore"
                canonicalUrl="/services/workshops"
            />

            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden bg-[#0f172a]">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse"></div>
                    <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse"></div>
                </div>

                <div className="container relative z-10 px-4 mx-auto text-center">
                    <Badge className="px-4 py-1 mb-6 text-sm font-semibold text-white uppercase bg-blue-600 rounded-full">
                        Expert-Led Training
                    </Badge>
                    <h1 className="mb-6 text-4xl font-extrabold text-white md:text-6xl lg:text-7xl">
                        Bridge the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Skill Gap</span>
                    </h1>
                    <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-slate-300 md:text-xl">
                        We propose a series of tiered training modules designed to bridge the gap between academic theory and industry practice. Our programs focus on high-demand technical skills, providing hands-on experience and industry-recognized certifications.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/workshop-register">
                            <Button size="lg" className="px-8 font-bold bg-blue-600 hover:bg-blue-700">
                                Enroll Now <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                        <a href="/infographic.png" download="Techmiya_Workshop_Infographic.png">
                            <Button size="lg" variant="outline" className="px-8 font-bold border-white/20 text-blue-400 hover:bg-white/10">
                                <Download className="mr-2 h-5 w-5" /> Download Infographic
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Tiers Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Training Modules</h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="max-w-2xl mx-auto text-slate-600">
                            Choose the level of depth that suits your curriculum needs. Each tier is meticulously crafted for maximum impact.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {tiers.map((tier, idx) => (
                            <Card key={idx} className={`relative flex flex-col h-full border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${tier.popular ? 'ring-2 ring-blue-500 shadow-xl' : 'shadow-md'}`}>
                                {tier.popular && (
                                    <div className="absolute top-0 right-0">
                                        <div className="bg-blue-600 text-white text-[10px] uppercase font-bold py-1 px-8 rotate-45 translate-x-6 translate-y-3">
                                            Most Popular
                                        </div>
                                    </div>
                                )}
                                <CardHeader className={`p-8 bg-gradient-to-br ${tier.color} text-white`}>
                                    <div className="mb-4 text-4xl">{tier.icon}</div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm font-bold uppercase tracking-wider opacity-80">{tier.tier}</span>
                                        <CardTitle className="text-2xl font-bold leading-tight">{tier.name}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-1 p-8">
                                    <div className="mb-6 space-y-4">
                                        <p className="font-medium text-slate-600">{tier.description}</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-700">
                                                <Clock className="w-4 h-4 text-blue-500" />
                                                <span className="text-sm font-semibold">Duration: {tier.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-700">
                                                <IndianRupee className="w-4 h-4 text-blue-500" />
                                                <span className="text-sm font-semibold">Investment: {tier.investment} / student</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-700">
                                                <Users className="w-4 h-4 text-blue-500" />
                                                <span className="text-sm font-semibold">Min Batch: {tier.minBatch}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="pt-6 mt-auto border-t border-slate-100">
                                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-900">Deliverables:</h4>
                                        <ul className="space-y-3">
                                            {tier.deliverables.map((item, id) => (
                                                <li key={id} className="flex items-start gap-3 text-sm text-slate-600">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col items-center gap-12 lg:flex-row">
                        <div className="lg:w-1/2">
                            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Infrastructure Requirements</h2>
                            <p className="mb-8 text-slate-400">To ensure the successful delivery of these sessions, the following facilities are required from the host institution:</p>
                            <div className="space-y-8">
                                {requirements.map((req, idx) => (
                                    <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="bg-slate-800 p-4 rounded-xl shrink-0">
                                            {req.icon}
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-xl font-bold">{req.title}</h3>
                                            <p className="text-slate-400">{req.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center lg:w-1/2">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative overflow-hidden rounded-lg bg-slate-800">
                                    <img 
                                        src="/infographic.png" 
                                        alt="Workshop Infographic Preview" 
                                        className="w-full max-w-sm rounded-lg shadow-2xl opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                        <a href="/infographic.png" download="Techmiya_Workshop_Infographic.png">
                                            <Button className="bg-blue-600">Download Full Infographic</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps Section */}
            <section className="py-24 bg-blue-600 text-white text-center">
                <div className="container px-4 mx-auto">
                    <h2 className="mb-6 text-3xl font-bold md:text-5xl">Next Steps</h2>
                    <p className="max-w-3xl mx-auto mb-10 text-lg md:text-xl opacity-90 leading-relaxed">
                        We are happy to customize the curriculum topics (e.g., AI, Web Development, or Data Science) based on the specific needs of your department. We look forward to empowering your students with the tools for tomorrow.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/contact">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-10 text-lg font-bold">
                                Contact Us Today
                            </Button>
                        </Link>
                        <Link to="/workshop-register">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 text-lg font-bold">
                                Inquire for Batch
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Workshops;
