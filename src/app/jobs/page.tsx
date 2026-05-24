import { Metadata } from "next";
import { JobsClient } from "./JobsClient";

export const metadata: Metadata = {
  title: "IT Jobs & Career Opportunities in Bangalore | Techmiya EdTech",
  description: "Find IT jobs and career opportunities at Techmiya EdTech. Software developer, data scientist, ML engineer, and more positions available in Bangalore.",
  keywords: "IT jobs Bangalore, software developer jobs, tech careers, data scientist positions, ML engineer jobs, fresher IT jobs, tech job openings Jayanagar",
  alternates: {
    canonical: "https://www.techmiyaedtech.com/jobs",
  },
  openGraph: {
    title: "IT Jobs & Career Opportunities in Bangalore | Techmiya EdTech",
    description: "Find IT jobs and career opportunities at Techmiya EdTech. Software developer, data scientist, ML engineer, and more positions available in Bangalore.",
    url: "https://www.techmiyaedtech.com/jobs",
    type: "website",
  },
};

const JobsPage = () => {
  return <JobsClient />;
};

export default JobsPage;
