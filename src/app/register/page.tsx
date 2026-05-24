import { Metadata } from "next";
import { RegisterClient } from "./RegisterClient";

export const metadata: Metadata = {
  title: "Register for Free IT Course Demo Class | Techmiya EdTech",
  description: "Register for a free IT demo class in Jayanagar, Bangalore at Techmiya EdTech. Choose from AI, Python, Full Stack, Java, DevOps and more.",
  keywords: "IT training registration, demo class Bangalore, register Techmiya, software course registration",
  alternates: {
    canonical: "https://www.techmiyaedtech.com/register",
  },
  openGraph: {
    title: "Register for Free IT Course Demo Class | Techmiya EdTech",
    description: "Register for a free IT demo class in Jayanagar, Bangalore at Techmiya EdTech. Choose from AI, Python, Full Stack, Java, DevOps and more.",
    url: "https://www.techmiyaedtech.com/register",
    type: "website",
  },
};

const RegisterPage = () => {
  return <RegisterClient />;
};

export default RegisterPage;
