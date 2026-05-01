"use client";
import { LeadGenVoucher } from "@/components/LeadGenVoucher";
import { SEOHead } from "@/components/SEOHead";

const GetVoucher = () => {
    return (
        <div className="min-h-screen">
            <SEOHead
                title="Get Flat ₹1000 OFF Course Voucher"
                description="Claim your exclusive Flat ₹1000 OFF voucher on any Techmiya EdTech course. Fill in your details and get instant access to your personalized course voucher."
                keywords="Techmiya EdTech voucher, course discount, Rs 1000 off, IT training discount Bangalore"
                canonicalUrl="/get-voucher"
            />
            <LeadGenVoucher />
        </div>
    );
};

export default GetVoucher;
