import { Metadata } from "next";
import PlacementsClient from "./PlacementsClient";

export const metadata: Metadata = {
  title: "Student Placements & Success Gallery | Techmiya EdTech",
  description: "Explore our student placement success stories. Techmiya EdTech students placed in top Bangalore startups with packages ranging from 3 LPA to 8 LPA.",
  keywords: "Techmiya placements, EdTech placements Bangalore, software jobs Bangalore startups, placement success stories",
  alternates: {
    canonical: "https://www.techmiyaedtech.com/placements",
  },
  openGraph: {
    title: "Student Placements & Success Gallery | Techmiya EdTech",
    description: "Explore our student placement success stories. Techmiya EdTech students placed in top Bangalore startups with packages ranging from 3 LPA to 8 LPA.",
    url: "https://www.techmiyaedtech.com/placements",
    type: "website",
    images: [
      {
        url: "https://www.techmiyaedtech.com/techmiyaedtech_new_logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Placements & Success Gallery | Techmiya EdTech",
    description: "Explore our student placement success stories. Techmiya EdTech students placed in top Bangalore startups with packages ranging from 3 LPA to 8 LPA.",
    images: ["https://www.techmiyaedtech.com/techmiyaedtech_new_logo.png"],
  },
};

export default function PlacementsPage() {
  return <PlacementsClient />;
}
