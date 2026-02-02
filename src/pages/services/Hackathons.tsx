import ServicePage from "@/components/ServicePage";

const Hackathons = () => {
    return (
        <ServicePage
            icon="💻"
            title="Hackathons"
            subtitle="Innovation-driven coding and problem-solving events"
            description="Techmiya EdTech organizes and sponsors hackathons that challenge participants to solve real-world problems using cutting-edge technologies. Our hackathons bring together students, developers, and industry mentors for intensive coding sessions, fostering innovation and collaboration. Participants get hands-on experience with AI, ML, IoT, and other emerging technologies while competing for exciting prizes."
            features={[
                "Well-structured hackathon themes and problem statements",
                "Expert mentors from leading tech companies",
                "Access to APIs, cloud credits, and development tools",
                "Exciting prizes and recognition for winners",
                "Networking opportunities with industry professionals",
                "Live project building and demonstration sessions",
                "Post-hackathon incubation support for best ideas"
            ]}
            benefits={[
                "Discover and nurture tech talent",
                "Generate innovative solutions for business challenges",
                "Build employer brand among students and developers",
                "Foster a culture of innovation and collaboration",
                "Identify potential hires and interns"
            ]}
        />
    );
};

export default Hackathons;
