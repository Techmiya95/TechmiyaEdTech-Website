import { Metadata } from "next";
import { WorkshopRegisterClient } from "./WorkshopRegisterClient";

export const metadata: Metadata = {
  title: "Register for GenAI Ignition Technical Workshop | Techmiya EdTech",
  description: "Register for Techmiya EdTech's free 3-hour GenAI technical workshop. Learn Agentic AI, build a mini-agent project, and get certified.",
  keywords: "GenAI workshop registration, AI training Bangalore, Agentic AI, free technical workshop",
  alternates: {
    canonical: "https://www.techmiyaedtech.com/workshop-register",
  },
  openGraph: {
    title: "Register for GenAI Ignition Technical Workshop | Techmiya EdTech",
    description: "Register for Techmiya EdTech's free 3-hour GenAI technical workshop. Learn Agentic AI, build a mini-agent project, and get certified.",
    url: "https://www.techmiyaedtech.com/workshop-register",
    type: "website",
  },
};

const WorkshopRegisterPage = () => {
  return <WorkshopRegisterClient />;
};

export default WorkshopRegisterPage;
