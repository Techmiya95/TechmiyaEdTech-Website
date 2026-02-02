import ServicePage from "@/components/ServicePage";

const Partnerships = () => {
    return (
        <ServicePage
            icon="🔗"
            title="Partnerships Building"
            subtitle="Strategic collaborations with academia and industry for mutual growth"
            description="Techmiya EdTech actively seeks strategic partnerships with engineering colleges, universities, and industry organizations. We collaborate to bridge the gap between academic learning and industry requirements. Our partnership programs include curriculum development, faculty training, joint certification programs, and research collaborations that benefit students and organizations alike."
            features={[
                "Academic partnerships with engineering colleges and universities",
                "Industry tie-ups for placement and internship programs",
                "Joint certification and training program development",
                "Curriculum consulting aligned with industry needs",
                "Faculty Development Programs (FDP) for educators",
                "Research collaboration on emerging technologies",
                "Co-branded training programs and workshops"
            ]}
            benefits={[
                "Access to industry-ready talent pool",
                "Enhanced curriculum with practical relevance",
                "Shared resources and infrastructure",
                "Increased visibility and brand presence",
                "Collaborative innovation opportunities"
            ]}
        />
    );
};

export default Partnerships;
