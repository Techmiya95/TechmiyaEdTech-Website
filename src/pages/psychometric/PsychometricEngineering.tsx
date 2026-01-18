
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Wrench } from "lucide-react";

const PsychometricEngineering = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <Link to="/psychometric-test">
                    <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-amber-600">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                </Link>
                <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                    <div className="mx-auto w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                        <Wrench className="w-10 h-10 text-blue-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Engineering Career Assessment</h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        This module will assess your technical problem-solving skills, spatial reasoning, and logic to recommend the best engineering stream (e.g., Computer Science, Mechanical, Civil, Electrical).
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" disabled>
                        Coming Soon
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PsychometricEngineering;
