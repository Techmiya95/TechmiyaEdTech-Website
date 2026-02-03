
const CollegeVsIndustrySection = () => {
    return (
        <section className="py-20 bg-gray-50 text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Gap Analysis: College vs Industry
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Why traditional education isn't enough for today's tech jobs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* College Approach */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-red-100 relative overflow-hidden group hover:border-red-300 transition-all duration-300">
                        <div className="absolute top-0 right-0 bg-red-100 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                                🎓
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Colleges Teach</h3>
                            <ul className="space-y-4">
                                {[
                                    "Outdated Curriculum from 5+ years ago",
                                    "Heavy focus on theory & memorization",
                                    "No real-world project experience",
                                    "Generic coding (C/C++) without frameworks",
                                    "Lack of industry mentorship"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <span className="mt-1 min-w-[20px] h-5 flex items-center justify-center bg-red-100 text-red-500 rounded-full text-xs">✕</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Techmiya Approach */}
                    <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group transform md:-translate-y-4 border-2 border-blue-400/30">
                        <div className="absolute top-0 right-0 bg-white/10 w-32 h-32 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 text-3xl backdrop-blur-sm">
                                🚀
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">What Industry Needs (We Teach)</h3>
                            <ul className="space-y-4">
                                {[
                                    "Latest Tech Stack (GenAI, React, Cloud)",
                                    "100% Practical & Hands-on Coding",
                                    "Live Projects with Production Deployment",
                                    "Modern Frameworks & Tools (Git, Docker)",
                                    "Mentorship from Working Professionals"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-blue-100">
                                        <span className="mt-1 min-w-[20px] h-5 flex items-center justify-center bg-green-500 text-white rounded-full text-xs font-bold">✓</span>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollegeVsIndustrySection;
