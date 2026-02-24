import { Link } from "react-router-dom";
import { CheckCircle, Mail, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center space-y-8">
                {/* Success Icon */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 animate-in zoom-in duration-500">
                            <CheckCircle className="h-12 w-12 text-white" />
                        </div>
                        <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                        <Sparkles className="h-4 w-4 text-purple-400 absolute -bottom-1 -left-2 animate-pulse delay-300" />
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Thank You! 🎉
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Your free <strong>Generative AI</strong> and <strong>Machine Learning</strong> notes will be sent to your email shortly.
                    </p>
                </div>

                {/* Email Notice Card */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-2xl p-6 border border-purple-200 dark:border-purple-800/50">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Mail className="h-6 w-6 text-purple-600" />
                        <span className="font-semibold text-purple-700 dark:text-purple-300 text-lg">Check Your Inbox</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        We're preparing your notes and will send them to the email you provided. If you don't see it within a few minutes, please check your spam folder.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                    <Link to="/">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Homepage
                        </Button>
                    </Link>
                </div>

                {/* Footer text */}
                <p className="text-xs text-gray-400">
                    Happy learning! 🚀 — Team Techmiya
                </p>
            </div>
        </div>
    );
};

export default ThankYou;
