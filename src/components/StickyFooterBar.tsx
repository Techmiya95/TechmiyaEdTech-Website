"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Phone, User, BookOpen, Send, Sparkles } from "lucide-react";

export const StickyFooterBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        window.open("https://enrollment.techmiyaedtech.com/", "_blank");
        setIsOpen(false);
    };

    return (
        <>
            {/* Sticky Footer Bar - Transparent & Responsive */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_25px_rgba(0,0,0,0.2)]">
                <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between items-center py-2 sm:py-3 gap-2">
                        {/* Tagline - Left Side */}
                        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                            <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight whitespace-nowrap">
                                Code with <span className="text-amber-400">Confidence</span>
                            </span>
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 hidden sm:inline" />
                        </div>

                        {/* Action Buttons - Right Side */}
                        <div className="flex items-center shrink-0">
                            <Button
                                onClick={() => setIsOpen(true)}
                                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-3.5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                            >
                                🚀 Enroll Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enrollment Form Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader className="text-center">
                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Start Your Learning Journey!
                        </DialogTitle>
                        <DialogDescription>
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

                        <div className="space-y-2">
                            <div className="relative">
                                <BookOpen className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                                <Select value={course} onValueChange={setCourse}>
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
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold"
                        >
                            <Send className="w-4 h-4 mr-2" />
                            Enroll Now
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};
