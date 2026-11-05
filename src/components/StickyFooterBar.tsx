"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Phone, User, BookOpen, Send, Sparkles, Loader2 } from "lucide-react";

// Google Sheets Web App Endpoint
const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbwYzMb2-dAv_9VOG2ABKti_dgWaIkH3nA5CGkWCCEw_o90VTF0CQ_DEubv86JgPoe6y-w/exec";

export const StickyFooterBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !phone.trim() || !course) {
            toast.error("Please fill in all fields");
            return;
        }

        if (phone.trim().length < 10) {
            toast.error("Please enter a valid 10-digit phone number");
            return;
        }

        setIsSubmitting(true);

        const submissionData = {
            name: name.trim(),
            phone: phone.trim(),
            course,
            source: "Sticky Footer - Enroll Now",
            time: new Date().toLocaleString(),
        };

        try {
            await fetch(GOOGLE_SHEET_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(submissionData),
            });
        } catch (error) {
            console.warn("Backend submission error:", error);
        } finally {
            setIsSubmitting(false);
            toast.success("Enquiry received! Redirecting to enrollment portal...");
            setTimeout(() => {
                window.open("https://enrollment.techmiyaedtech.com/", "_blank");
                setIsOpen(false);
                setName("");
                setPhone("");
                setCourse("");
            }, 600);
        }
    };

    return (
        <>
            {/* Fixed Bottom Bar - Transparent, Responsive across all devices */}
            <div className="fixed bottom-3 sm:bottom-4 left-0 right-0 px-3 sm:px-6 z-50 flex items-center justify-between pointer-events-none">
                {/* Left Side: Tagline */}
                <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 shrink-0 select-none">
                    <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-400 shrink-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
                    <span className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                        Code with <span className="text-amber-400">Confidence</span>
                    </span>
                    <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-400 shrink-0 hidden sm:inline drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
                </div>

                {/* Right Side: Enroll Now Button */}
                <div className="pointer-events-auto flex items-center shrink-0">
                    <Button
                        onClick={() => setIsOpen(true)}
                        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-3.5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                        🚀 Enroll Now
                    </Button>
                </div>
            </div>

            {/* Enrollment Form Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="w-[92vw] max-w-md p-5 sm:p-6 rounded-2xl">
                    <DialogHeader className="text-center">
                        <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Start Your Learning Journey!
                        </DialogTitle>
                        <DialogDescription className="text-xs sm:text-sm">
                            Fill in your details and our experts will guide you to the right course.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                    placeholder="Your Name"
                                    className="pl-9"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                    type="tel"
                                    placeholder="Phone Number (10 digits)"
                                    className="pl-9"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="relative">
                                <BookOpen className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                                <Select value={course} onValueChange={setCourse} disabled={isSubmitting}>
                                    <SelectTrigger className="pl-9">
                                        <SelectValue placeholder="Select Course" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Generative AI">Generative AI</SelectItem>
                                        <SelectItem value="DevOps and Cloud">DevOps and Cloud</SelectItem>
                                        <SelectItem value="Android Development">Android Development</SelectItem>
                                        <SelectItem value="Cyber Security">Cyber Security</SelectItem>
                                        <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
                                        <SelectItem value="Data Science & AI">Data Science & AI</SelectItem>
                                        <SelectItem value="Java Programming">Java Programming</SelectItem>
                                        <SelectItem value="Digital Marketing">Digital Marketing with AI</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4 mr-2" />
                                    Enroll Now
                                </>
                            )}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};
