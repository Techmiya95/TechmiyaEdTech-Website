import ServicePage from "@/components/ServicePage";

const CSRPrograms = () => {
    return (
        <ServicePage
            icon="🤝"
            title="CSR Programs"
            subtitle="Skill development initiatives aligned with Corporate Social Responsibility goals"
            description="Partner with Techmiya EdTech to fulfill your CSR objectives through impactful skill development programs. We design and execute technology training initiatives that empower underprivileged youth, students from rural areas, and marginalized communities with job-ready IT skills. Our CSR programs create measurable social impact while aligning with your organization's sustainability goals."
            features={[
                "Customized CSR program design aligned with your company values",
                "Training for underprivileged youth and rural students",
                "Comprehensive curriculum covering coding, AI/ML, and digital skills",
                "Job placement assistance for program graduates",
                "Detailed impact reports and success metrics",
                "Certificate distribution ceremonies and recognition events",
                "Long-term mentorship and career guidance support"
            ]}
            benefits={[
                "Fulfill CSR mandates with meaningful skill development",
                "Create measurable social impact in communities",
                "Build positive brand reputation and goodwill",
                "Contribute to India's digital skill development mission",
                "Potential talent pipeline from trained candidates"
            ]}
            images={[
                "/csr1.jpeg",
                "/csr2.jpeg",
                "/csr3.jpeg",
                "/csr4.jpeg"
            ]}
        />
    );
};

export default CSRPrograms;
