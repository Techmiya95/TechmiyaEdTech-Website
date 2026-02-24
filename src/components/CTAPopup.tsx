import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Phone, Mail, Gift, Send, Sparkles, Loader2 } from "lucide-react";

// 🔧 REPLACE THIS with your Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycby9W5Nc-yx6eJRHMjmtTPCsN3kYebShXR5_23u6vBgHJXPCG1LM-Z9ad3LIpyCuH_I/exec";

export const CTAPopup = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 15000); // 15 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !phone) {
            toast.error("Please fill in all fields");
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        setIsSubmitting(true);

        try {
            // Save lead data to Google Sheets
            await fetch(GOOGLE_SHEETS_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    phone,
                    timestamp: new Date().toISOString(),
                    source: "CTA Popup - Free GenAI & ML Notes",
                }),
            });

            toast.success("🎉 You're in! Redirecting...");

            setTimeout(() => {
                setIsOpen(false);
                navigate("/thankyou");
            }, 1000);
        } catch {
            // Even if the request fails, still navigate (lead capture is best-effort)
            toast.success("🎉 You're in! Redirecting...");
            setTimeout(() => {
                setIsOpen(false);
                navigate("/thankyou");
            }, 1000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="text-center">
                    <div className="flex justify-center mb-2">
                        <div className="relative">
                            <Gift className="h-10 w-10 text-purple-500 animate-bounce" />
                            <Sparkles className="h-5 w-5 text-yellow-400 absolute -top-1 -right-2 animate-pulse" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        🎁 Get Free GenAI & ML Notes!
                    </DialogTitle>
                    <DialogDescription className="text-base">
                        Access top notes on <strong>Generative AI</strong> and <strong>Machine Learning</strong> — absolutely free! Enter your details and we'll send them to your email.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                type="email"
                                placeholder="Your Email"
                                className="pl-9"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                type="tel"
                                placeholder="Phone Number"
                                className="pl-9"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold"
                    >
                        {isSubmitting ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                            <Send className="w-4 h-4 mr-2" />
                        )}
                        {isSubmitting ? "Submitting..." : "Get Free Notes"}
                    </Button>

                    <p className="text-xs text-center text-gray-400">
                        No spam, just free knowledge. 🚀
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
};
