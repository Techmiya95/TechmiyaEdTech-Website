import ServicePage from "@/components/ServicePage";

const FDPSDP = () => {
    return (
        <ServicePage
            icon="📚"
            title="FDP & SDP"
            subtitle="Faculty Development Programs and Skill Development Programs"
            description="Techmiya EdTech offers specialized Faculty Development Programs (FDP) to help educators stay updated with the latest technologies and teaching methodologies. Our Skill Development Programs (SDP) are designed to bridge the gap between academic curriculum and industry requirements. These programs empower educators to deliver industry-relevant content and prepare students for successful careers."
            features={[
                "Comprehensive FDP on AI, ML, Data Science, and Cloud technologies",
                "Hands-on workshops with real-world projects",
                "Pedagogy training for effective tech education",
                "Industry expert sessions and guest lectures",
                "Curriculum development assistance",
                "Research guidance and publication support",
                "Certification upon successful completion"
            ]}
            benefits={[
                "Enhanced teaching capabilities with latest tech knowledge",
                "Improved student outcomes and placement rates",
                "Stronger industry-academia connections",
                "Research and publication opportunities",
                "Professional development and career growth"
            ]}
        />
    );
};

export default FDPSDP;
