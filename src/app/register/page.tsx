import { Metadata } from "next";
import { RegisterClient } from "@/app/enquiry/RegisterClient";

export const metadata: Metadata = {
  title: "Register for IT Training | Techmiya EdTech",
  description: "Register for IT training courses and free demo classes at Techmiya EdTech Bangalore.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function RegisterPage() {
  return <RegisterClient />;
}

