import ServicePage from "@/components/ServicePage";

const Mentorship = () => {
    return (
        <ServicePage
            icon="👨‍💼"
            title="Industry Mentorship"
            subtitle="One-on-one guidance from experienced industry experts"
            description="Techmiya EdTech connects learners with experienced industry mentors who provide personalized guidance for career growth. Our mentorship program pairs you with professionals from top tech companies who share insights, provide feedback, and help you navigate your career path. Whether you're a fresher or experienced professional, our mentors help you achieve your career goals."
            features={[
                "One-on-one mentorship from industry experts",
                "Personalized career roadmap and guidance",
                "Regular check-ins and progress tracking",
                "Resume review and interview preparation",
                "Industry insights and networking opportunities",
                "Project feedback and code reviews",
                "Career transition support and advice"
            ]}
            benefits={[
                "Learn from real industry experience",
                "Accelerate your career growth",
                "Expand your professional network",
                "Gain insider knowledge about tech industry",
                "Build confidence with expert guidance"
            ]}
        />
    );
};

export default Mentorship;
