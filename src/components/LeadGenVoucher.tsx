import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { User, Phone, Mail, BookOpen, Send, Loader2, Download, Sparkles, Gift, Ticket, Copy, CheckCircle } from "lucide-react";

// Same Google Apps Script URL — we'll send to Sheet2
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbykmeMEtrucKefEEQnnWx8YbD2_qaouyxfE8wkF_jFzrZWSAG-4EYlKHepaPqwsDuMQ/exec";

// Generate a unique voucher code
const generateVoucherCode = (): string => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "TECH20-";
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
};

export const LeadGenVoucher = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [voucherCode, setVoucherCode] = useState("");
    const [showVoucher, setShowVoucher] = useState(false);
    const [copied, setCopied] = useState(false);
    const voucherRef = useRef<HTMLDivElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !phone || !course) {
            toast.error("Please fill in all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        if (phone.length < 10) {
            toast.error("Please enter a valid phone number");
            return;
        }

        setIsSubmitting(true);
        const code = generateVoucherCode();

        try {
            // Send lead data to Google Sheets Sheet2
            await fetch(GOOGLE_SHEETS_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sheet: "Sheet2", // Target Sheet2
                    name,
                    email,
                    phone,
                    course,
                    voucherCode: code,
                    timestamp: new Date().toISOString(),
                    source: "Lead Gen - 20% Course Voucher",
                }),
            });

            setVoucherCode(code);
            setShowVoucher(true);
            toast.success("🎉 Your 20% OFF voucher has been generated!");
        } catch {
            // Best-effort — still show voucher even if sheets fails
            setVoucherCode(code);
            setShowVoucher(true);
            toast.success("🎉 Your 20% OFF voucher has been generated!");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(voucherCode);
        setCopied(true);
        toast.success("Voucher code copied!");
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownloadVoucher = () => {
        if (!voucherRef.current) return;

        // Create a canvas from the voucher
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const width = 800;
        const height = 450;
        canvas.width = width;
        canvas.height = height;

        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, "#1e1b4b");
        gradient.addColorStop(0.5, "#581c87");
        gradient.addColorStop(1, "#1e3a8a");
        ctx.fillStyle = gradient;
        ctx.roundRect(0, 0, width, height, 24);
        ctx.fill();

        // Decorative circles
        ctx.beginPath();
        ctx.arc(50, 50, 80, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.15)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(750, 400, 100, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.15)";
        ctx.fill();

        // Border
        ctx.strokeStyle = "rgba(168, 85, 247, 0.5)";
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 5]);
        ctx.roundRect(12, 12, width - 24, height - 24, 20);
        ctx.stroke();
        ctx.setLineDash([]);

        // "TECHMIYA EDTECH" brand
        ctx.fillStyle = "#c084fc";
        ctx.font = "bold 16px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("TECHMIYA EDTECH", width / 2, 50);

        // "COURSE VOUCHER" title
        ctx.fillStyle = "#f59e0b";
        ctx.font = "bold 28px 'Inter', sans-serif";
        ctx.fillText("✨ COURSE VOUCHER ✨", width / 2, 90);

        // Big "20% OFF" text
        ctx.fillStyle = "#ffffff";
        ctx.font = "900 80px 'Inter', sans-serif";
        ctx.fillText("20% OFF", width / 2, 190);

        // Subtitle
        ctx.fillStyle = "#e2e8f0";
        ctx.font = "18px 'Inter', sans-serif";
        ctx.fillText("on any Techmiya EdTech course enrollment", width / 2, 225);

        // Voucher code box
        const boxWidth = 340;
        const boxHeight = 50;
        const boxX = (width - boxWidth) / 2;
        const boxY = 260;
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 12);
        ctx.fill();
        ctx.strokeStyle = "rgba(250, 204, 21, 0.6)";
        ctx.lineWidth = 2;
        ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 12);
        ctx.stroke();

        ctx.fillStyle = "#facc15";
        ctx.font = "bold 26px 'Courier New', monospace";
        ctx.fillText(voucherCode, width / 2, boxY + 35);

        // Student details
        ctx.fillStyle = "#94a3b8";
        ctx.font = "14px 'Inter', sans-serif";
        ctx.fillText(`Issued to: ${name}  |  Course: ${course}`, width / 2, 345);

        // Validity
        const validDate = new Date();
        validDate.setDate(validDate.getDate() + 30);
        ctx.fillStyle = "#f97316";
        ctx.font = "bold 14px 'Inter', sans-serif";
        ctx.fillText(`Valid until: ${validDate.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`, width / 2, 375);

        // Terms
        ctx.fillStyle = "#64748b";
        ctx.font = "11px 'Inter', sans-serif";
        ctx.fillText("Terms & conditions apply  |  Non-transferable  |  One time use only", width / 2, 410);

        // Website
        ctx.fillStyle = "#818cf8";
        ctx.font = "bold 12px 'Inter', sans-serif";
        ctx.fillText("www.techmiyaedtech.com  |  +91-6363760275", width / 2, 435);

        // Download
        const link = document.createElement("a");
        link.download = `Techmiya_20OFF_Voucher_${voucherCode}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();

        toast.success("Voucher downloaded successfully!");
    };

    const handleReset = () => {
        setShowVoucher(false);
        setVoucherCode("");
        setName("");
        setEmail("");
        setPhone("");
        setCourse("");
        setCopied(false);
    };

    return (
        <section id="lead-gen-voucher" className="py-20 bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-500/5 to-transparent rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {!showVoucher ? (
                    /* ========= FORM VIEW ========= */
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Content */}
                        <div className="lg:w-1/2 text-white space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 backdrop-blur-sm">
                                <Gift className="w-5 h-5 text-yellow-400" />
                                <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">Limited Time Offer</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                                Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 animate-pulse">20% OFF</span> on Any Course!
                            </h2>
                            <p className="text-xl text-blue-100/90 leading-relaxed max-w-lg">
                                Download your exclusive course brochure & get a <strong className="text-yellow-300">20% discount voucher</strong> instantly. Start your tech career with Techmiya EdTech at unbeatable prices!
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl backdrop-blur-sm border border-white/10">
                                    <span className="text-yellow-400 text-xl">🎓</span>
                                    <span className="font-medium text-sm">14+ Courses</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl backdrop-blur-sm border border-white/10">
                                    <span className="text-yellow-400 text-xl">💼</span>
                                    <span className="font-medium text-sm">100% Placement</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl backdrop-blur-sm border border-white/10">
                                    <span className="text-yellow-400 text-xl">👨‍🏫</span>
                                    <span className="font-medium text-sm">Expert Trainers</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl backdrop-blur-sm border border-white/10">
                                    <span className="text-yellow-400 text-xl">🏢</span>
                                    <span className="font-medium text-sm">Industry Projects</span>
                                </div>
                            </div>
                        </div>

                        {/* Right — Form Card */}
                        <div className="lg:w-1/2 w-full max-w-md">
                            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                                <CardHeader className="space-y-1 text-center pb-2">
                                    <div className="flex justify-center mb-2">
                                        <div className="relative">
                                            <Ticket className="h-10 w-10 text-purple-500 animate-bounce" />
                                            <Sparkles className="h-5 w-5 text-yellow-400 absolute -top-1 -right-2 animate-pulse" />
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                        Get Your 20% OFF Voucher
                                    </CardTitle>
                                    <CardDescription>
                                        Fill in your details to receive your <strong>exclusive discount</strong> and course brochure!
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                <Input
                                                    id="lead-gen-name"
                                                    placeholder="Your Full Name"
                                                    className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                <Input
                                                    id="lead-gen-email"
                                                    type="email"
                                                    placeholder="Your Email"
                                                    className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                <Input
                                                    id="lead-gen-phone"
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="relative">
                                                <BookOpen className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                                                <Select value={course} onValueChange={setCourse}>
                                                    <SelectTrigger id="lead-gen-course" className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors">
                                                        <SelectValue placeholder="Select Course of Interest" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Generative AI">Generative AI</SelectItem>
                                                        <SelectItem value="Data Science & Analytics">Data Science & Analytics</SelectItem>
                                                        <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
                                                        <SelectItem value="Java Programming">Java Programming</SelectItem>
                                                        <SelectItem value="DevOps">DevOps</SelectItem>
                                                        <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
                                                        <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                                                        <SelectItem value="Android Development">Android Development</SelectItem>
                                                        <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                                                        <SelectItem value="MLOps">MLOps</SelectItem>
                                                        <SelectItem value="Embedded & IoT">Embedded & IoT</SelectItem>
                                                        <SelectItem value="Digital Marketing">Digital Marketing with AI</SelectItem>
                                                        <SelectItem value="Automation Testing">Automation Testing</SelectItem>
                                                        <SelectItem value="Aptitude Training">Aptitude Training</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            id="lead-gen-submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            ) : (
                                                <Gift className="w-5 h-5 mr-2" />
                                            )}
                                            {isSubmitting ? "Generating Voucher..." : "Get 20% OFF Voucher 🎫"}
                                        </Button>

                                        <p className="text-xs text-center text-gray-500 mt-2">
                                            By submitting, you agree to receive course updates from Techmiya EdTech. 🚀
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ) : (
                    /* ========= VOUCHER VIEW ========= */
                    <div className="max-w-2xl mx-auto text-center space-y-8">
                        {/* Success animation */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 animate-in zoom-in duration-500">
                                    <CheckCircle className="h-10 w-10 text-white" />
                                </div>
                                <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            🎉 Your Voucher is Ready!
                        </h2>
                        <p className="text-lg text-blue-200">
                            Congratulations <strong className="text-yellow-300">{name}</strong>! Here's your exclusive 20% OFF voucher.
                        </p>

                        {/* Voucher Card */}
                        <div ref={voucherRef} className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-3xl p-8 border-2 border-dashed border-purple-500/50 shadow-2xl overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute top-4 left-4 w-16 h-16 bg-purple-500/10 rounded-full"></div>
                            <div className="absolute bottom-4 right-4 w-20 h-20 bg-blue-500/10 rounded-full"></div>

                            <div className="relative z-10 space-y-4">
                                <p className="text-purple-300 font-semibold text-sm uppercase tracking-widest">Techmiya EdTech</p>
                                <p className="text-amber-400 font-bold text-xl">✨ COURSE VOUCHER ✨</p>

                                <div className="py-4">
                                    <span className="text-7xl md:text-8xl font-black text-white drop-shadow-lg">20% OFF</span>
                                </div>

                                <p className="text-gray-300 text-base">on any Techmiya EdTech course enrollment</p>

                                {/* Voucher Code */}
                                <div className="flex items-center justify-center gap-3 mt-4">
                                    <div className="bg-white/10 border-2 border-yellow-500/40 rounded-xl px-6 py-3 flex items-center gap-3">
                                        <span className="text-yellow-400 font-mono font-bold text-xl md:text-2xl tracking-wider">{voucherCode}</span>
                                        <button
                                            onClick={handleCopyCode}
                                            className="text-yellow-400 hover:text-yellow-300 transition-colors p-1"
                                            title="Copy code"
                                        >
                                            {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Student & Course Info */}
                                <div className="text-gray-400 text-sm pt-2">
                                    <p>Issued to: <span className="text-gray-200">{name}</span> | Course: <span className="text-gray-200">{course}</span></p>
                                </div>

                                {/* Validity */}
                                <div className="text-orange-400 font-semibold text-sm">
                                    Valid until: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                                </div>

                                {/* Terms */}
                                <p className="text-gray-500 text-xs">
                                    Terms & conditions apply | Non-transferable | One time use only
                                </p>
                                <p className="text-indigo-400 text-xs font-semibold">
                                    www.techmiyaedtech.com | +91-6363760275
                                </p>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button
                                id="download-voucher-btn"
                                onClick={handleDownloadVoucher}
                                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download Voucher
                            </Button>
                            <Button
                                id="copy-voucher-btn"
                                onClick={handleCopyCode}
                                variant="outline"
                                className="border-2 border-purple-400 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200 font-bold px-8 py-3 rounded-xl text-lg"
                            >
                                {copied ? <CheckCircle className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                                {copied ? "Copied!" : "Copy Code"}
                            </Button>
                        </div>

                        {/* Redemption instructions */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-left max-w-lg mx-auto">
                            <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                <Send className="w-5 h-5 text-yellow-400" />
                                How to Redeem
                            </h3>
                            <ol className="text-blue-200 text-sm space-y-2 list-decimal list-inside">
                                <li>Copy or download your voucher code above</li>
                                <li>Contact us at <strong className="text-yellow-300">+91-6363760275</strong> or visit our center</li>
                                <li>Share your voucher code during enrollment</li>
                                <li>Enjoy <strong className="text-yellow-300">20% OFF</strong> on your course fee! 🎉</li>
                            </ol>
                        </div>

                        {/* Get another voucher */}
                        <button
                            onClick={handleReset}
                            className="text-purple-300 hover:text-purple-200 underline text-sm transition-colors"
                        >
                            ← Generate another voucher
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
