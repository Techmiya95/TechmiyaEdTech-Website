import { Metadata } from "next";
import { LeadGenVoucher } from "@/components/LeadGenVoucher";

export const metadata: Metadata = {
  title: "Get Flat ₹1000 OFF Course Voucher | Techmiya EdTech",
  description: "Claim your exclusive Flat ₹1000 OFF voucher on any Techmiya EdTech course. Fill in your details and get instant access to your personalized course voucher.",
  keywords: "Techmiya EdTech voucher, course discount, Rs 1000 off, IT training discount Bangalore",
  alternates: {
    canonical: "https://www.techmiyaedtech.com/get-voucher",
  },
  openGraph: {
    title: "Get Flat ₹1000 OFF Course Voucher | Techmiya EdTech",
    description: "Claim your exclusive Flat ₹1000 OFF voucher on any Techmiya EdTech course. Fill in your details and get instant access to your personalized course voucher.",
    url: "https://www.techmiyaedtech.com/get-voucher",
    type: "website",
  },
};

const GetVoucher = () => {
    return (
        <div className="min-h-screen">
            <LeadGenVoucher />
        </div>
    );
};

export default GetVoucher;
