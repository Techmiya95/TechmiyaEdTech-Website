import { Metadata } from "next";
import { RegisterClient } from "./RegisterClient";

export const metadata: Metadata = {
  title: "Enquire for Free IT Course Demo Class | Techmiya EdTech",
  description: "Enquire for a free IT demo class in Jayanagar, Bangalore at Techmiya EdTech. Choose from AI, Python, Full Stack, Java, DevOps and more.",
  keywords: "IT training enquiry, demo class Bangalore, enquire Techmiya, software course enquiry",
  alternates: {
    canonical: "https://www.techmiyaedtech.com/enquiry",
  },
  openGraph: {
    title: "Enquire for Free IT Course Demo Class | Techmiya EdTech",
    description: "Enquire for a free IT demo class in Jayanagar, Bangalore at Techmiya EdTech. Choose from AI, Python, Full Stack, Java, DevOps and more.",
    url: "https://www.techmiyaedtech.com/enquiry",
    type: "website",
  },
};


const RegisterPage = () => {
  return <RegisterClient />;
};

export default RegisterPage;
