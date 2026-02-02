import ServicePage from "@/components/ServicePage";

const CorporateTraining = () => {
    return (
        <ServicePage
            icon="🏢"
            title="Corporate Training"
            subtitle="Industry-focused upskilling programs for professionals and organizations"
            description="Techmiya EdTech offers comprehensive corporate training programs designed to upskill your workforce with the latest technologies. Our expert-led training modules are customized to meet your organization's specific needs, ensuring your team stays ahead in the rapidly evolving tech landscape. We cover everything from Generative AI and Machine Learning to Cloud Computing, DevOps, and Full Stack Development."
            features={[
                "Customized training programs tailored to your organization's needs",
                "Expert trainers with real-world industry experience",
                "Hands-on projects and practical assignments",
                "Flexible scheduling - weekday, weekend, or intensive bootcamp formats",
                "On-site or virtual training options available",
                "Progress tracking and detailed performance reports",
                "Post-training support and doubt clearing sessions"
            ]}
            benefits={[
                "Improved employee productivity and efficiency",
                "Stay competitive with latest technology skills",
                "Reduced employee turnover with career development opportunities",
                "Standardized skill levels across teams",
                "Industry-recognized certifications for participants"
            ]}
        />
    );
};

export default CorporateTraining;
