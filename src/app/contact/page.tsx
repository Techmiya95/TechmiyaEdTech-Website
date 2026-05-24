import { Metadata } from "next";
import { ContactClient } from "./ContactClient";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Techmiya EdTech",
  "description": "Get in touch with Techmiya EdTech for IT training inquiries, course information, and career guidance.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Techmiya EdTech",
    "telephone": "+91-6363760275",
    "email": "hr@techmiyaedtech.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "28th Main Rd, Jayanagar 9th Block",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560069",
      "addressCountry": "IN"
    }
  }
};

export const metadata: Metadata = {
  title: "Contact IT Training Institute Bangalore | Techmiya EdTech",
  description: "Contact Techmiya EdTech in Jayanagar, Bangalore for IT course inquiries and placement assistance. Call +91-6363760275 today!",
  keywords: "contact Techmiya, IT training inquiry Bangalore, demo class booking, career counseling, placement assistance, Jayanagar IT institute contact",
  alternates: {
    canonical: "https://www.techmiyaedtech.com/contact",
  },
  openGraph: {
    title: "Contact IT Training Institute Bangalore | Techmiya EdTech",
    description: "Contact Techmiya EdTech in Jayanagar, Bangalore for IT course inquiries and placement assistance. Call +91-6363760275 today!",
    url: "https://www.techmiyaedtech.com/contact",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
};

export default ContactPage;
