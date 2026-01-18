
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase } from "lucide-react";

const PsychometricManagement = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <Link to="/psychometric-test">
                    <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-amber-600">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                </Link>
                <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                    <div className="mx-auto w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                        <Briefcase className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Management Career Assessment</h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Designed for MBA/BBA aspirants. This test evaluates your leadership style, communication, and business aptitude to suggest specific roles in <strong>HR, Marketing, Finance, or Accounts</strong>.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" disabled>
                        Coming Soon
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PsychometricManagement;
