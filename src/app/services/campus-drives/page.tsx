import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Campus Drives - Techmiya EdTech",
  description: "Placement drives and recruitment readiness programs for colleges. Learn about Techmiya EdTech campus drives.",
  alternates: {
    canonical: "https://www.techmiyaedtech.com/services/campus-drives",
  },
  openGraph: {
    title: "Campus Drives - Techmiya EdTech",
    description: "Placement drives and recruitment readiness programs for colleges. Learn about Techmiya EdTech campus drives.",
    url: "https://www.techmiyaedtech.com/services/campus-drives",
    type: "website",
  },
};

const CampusDrives = () => {
    return (
        <ServicePage
            icon="🎓"
            title="Campus Drives"
            subtitle="Placement drives and recruitment readiness programs for colleges"
            description="Techmiya EdTech organizes and facilitates campus placement drives connecting talented students with leading IT companies. We prepare students with comprehensive pre-placement training, mock interviews, aptitude preparation, and resume building workshops. Our campus drive programs have successfully placed thousands of students in top tech companies across India."
            features={[
                "End-to-end campus placement drive management",
                "Pre-placement training and aptitude preparation",
                "Mock interview sessions with industry professionals",
                "Resume building and LinkedIn profile optimization",
                "Soft skills and communication training",
                "Technical assessment and screening support",
                "Direct connections with hiring companies"
            ]}
            benefits={[
                "Higher placement rates for your institution",
                "Industry-ready graduates with practical skills",
                "Strong alumni network and success stories",
                "Enhanced reputation for career outcomes",
                "Ongoing placement support and tracking"
            ]}
        />
    );
};

export default CampusDrives;
