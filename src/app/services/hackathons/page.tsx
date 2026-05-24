import { Metadata } from "next";
import { HackathonsClient } from "./HackathonsClient";

export const metadata: Metadata = {
  title: "Hackathons & Coding Events Bangalore | Techmiya EdTech",
  description: "Techmiya EdTech organizes and sponsors hackathons that challenge students to solve real-world problems using AI, ML, IoT and more. View our hackathon gallery.",
  keywords: "Techmiya hackathons, coding events Bangalore, innovation hackathon, AI ML hackathon, student hackathon",
  alternates: {
    canonical: "https://www.techmiyaedtech.com/services/hackathons",
  },
  openGraph: {
    title: "Hackathons & Coding Events Bangalore | Techmiya EdTech",
    description: "Techmiya EdTech organizes and sponsors hackathons that challenge students to solve real-world problems using AI, ML, IoT and more. View our hackathon gallery.",
    url: "https://www.techmiyaedtech.com/services/hackathons",
    type: "website",
  },
};

const HackathonsPage = () => {
  return <HackathonsClient />;
};

export default HackathonsPage;
