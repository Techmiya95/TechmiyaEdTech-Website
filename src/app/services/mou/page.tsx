import { Metadata } from "next";
import { MoUClient } from "./MoUClient";

export const metadata: Metadata = {
  title: "MoU & College Partnerships Bangalore | Techmiya EdTech",
  description: "Techmiya EdTech has successfully partnered with many colleges and institutions across India under MoU agreements to bridge the gap between academia and industry.",
  keywords: "Techmiya MoU, college partnerships, institution collaborations, EdTech MoU Bangalore, academic partnerships",
  alternates: {
    canonical: "https://www.techmiyaedtech.com/services/mou",
  },
  openGraph: {
    title: "MoU & College Partnerships Bangalore | Techmiya EdTech",
    description: "Techmiya EdTech has successfully partnered with many colleges and institutions across India under MoU agreements to bridge the gap between academia and industry.",
    url: "https://www.techmiyaedtech.com/services/mou",
    type: "website",
  },
};

const MoUPage = () => {
  return <MoUClient />;
};

export default MoUPage;
