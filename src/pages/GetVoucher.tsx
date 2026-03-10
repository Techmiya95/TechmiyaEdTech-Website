import { LeadGenVoucher } from "@/components/LeadGenVoucher";
import { SEOHead } from "@/components/SEOHead";

const GetVoucher = () => {
    return (
        <div className="min-h-screen">
            <SEOHead
                title="Get 20% OFF Course Voucher | Techmiya EdTech"
                description="Claim your exclusive 20% discount voucher on any Techmiya EdTech course. Fill in your details and get instant access to your personalized course voucher."
                keywords="Techmiya EdTech voucher, course discount, 20% off, IT training discount Bangalore"
                canonicalUrl="/get-voucher"
            />
            <LeadGenVoucher />
        </div>
    );
};

export default GetVoucher;
