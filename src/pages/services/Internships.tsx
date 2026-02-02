import ServicePage from "@/components/ServicePage";

const Internships = () => {
    return (
        <ServicePage
            icon="🚀"
            title="Internships & Live Projects"
            subtitle="Hands-on industry exposure through real-world projects"
            description="Techmiya EdTech provides students with valuable internship opportunities and live project experience. Our internship programs offer hands-on exposure to real industry projects, working alongside experienced professionals. Interns gain practical skills in software development, AI/ML, data science, and other in-demand technologies while building a strong portfolio for their career."
            features={[
                "2-6 month internship programs with mentorship",
                "Real industry projects with actual business impact",
                "Exposure to Agile methodologies and industry practices",
                "Portfolio building with completed project showcases",
                "Internship completion certificate and recommendation",
                "Potential for full-time job conversion",
                "Stipend-based internships for deserving candidates"
            ]}
            benefits={[
                "Bridge the gap between academics and industry",
                "Build a strong project portfolio",
                "Gain confidence with real-world experience",
                "Network with industry professionals",
                "Higher chances of job placement"
            ]}
        />
    );
};

export default Internships;
