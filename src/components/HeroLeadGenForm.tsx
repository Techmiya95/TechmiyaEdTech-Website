import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { User, Phone, Mail, BookOpen, Loader2, Gift, Ticket, Sparkles, Download, Copy, CheckCircle, Send } from "lucide-react";

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbykmeMEtrucKefEEQnnWx8YbD2_qaouyxfE8wkF_jFzrZWSAG-4EYlKHepaPqwsDuMQ/exec";

const generateVoucherCode = (): string => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "TECH1K-";
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
};

export const HeroLeadGenForm = () => {
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
            await fetch(GOOGLE_SHEETS_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sheet: "Sheet2",
                    name,
                    email,
                    phone,
                    course,
                    voucherCode: code,
                    timestamp: new Date().toISOString(),
                    source: "Hero - Flat Rs1000 OFF Course Voucher",
                }),
            });

            setVoucherCode(code);
            setShowVoucher(true);
            toast.success("🎉 Your Flat ₹1000 OFF voucher has been generated!");
        } catch {
            setVoucherCode(code);
            setShowVoucher(true);
            toast.success("🎉 Your Flat ₹1000 OFF voucher has been generated!");
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

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const width = 800;
        const height = 450;
        canvas.width = width;
        canvas.height = height;

        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, "#1e1b4b");
        gradient.addColorStop(0.5, "#581c87");
        gradient.addColorStop(1, "#1e3a8a");
        ctx.fillStyle = gradient;
        ctx.roundRect(0, 0, width, height, 24);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(50, 50, 80, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.15)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(750, 400, 100, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.15)";
        ctx.fill();

        ctx.strokeStyle = "rgba(168, 85, 247, 0.5)";
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 5]);
        ctx.roundRect(12, 12, width - 24, height - 24, 20);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "#c084fc";
        ctx.font = "bold 16px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("TECHMIYA EDTECH", width / 2, 50);

        ctx.fillStyle = "#f59e0b";
        ctx.font = "bold 28px 'Inter', sans-serif";
        ctx.fillText("✨ COURSE VOUCHER ✨", width / 2, 90);

        ctx.fillStyle = "#ffffff";
        ctx.font = "900 64px 'Inter', sans-serif";
        ctx.fillText("FLAT \u20B91000 OFF", width / 2, 190);

        ctx.fillStyle = "#e2e8f0";
        ctx.font = "18px 'Inter', sans-serif";
        ctx.fillText("on any Techmiya EdTech course enrollment", width / 2, 225);

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

        ctx.fillStyle = "#94a3b8";
        ctx.font = "14px 'Inter', sans-serif";
        ctx.fillText(`Issued to: ${name}  |  Course: ${course}`, width / 2, 345);

        const validDate = new Date();
        validDate.setDate(validDate.getDate() + 30);
        ctx.fillStyle = "#f97316";
        ctx.font = "bold 14px 'Inter', sans-serif";
        ctx.fillText(`Valid until: ${validDate.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`, width / 2, 375);

        ctx.fillStyle = "#64748b";
        ctx.font = "11px 'Inter', sans-serif";
        ctx.fillText("Terms & conditions apply  |  Non-transferable  |  One time use only", width / 2, 410);

        ctx.fillStyle = "#818cf8";
        ctx.font = "bold 12px 'Inter', sans-serif";
        ctx.fillText("www.techmiyaedtech.com  |  +91-6363760275", width / 2, 435);

        const link = document.createElement("a");
        link.download = `Techmiya_Flat1000OFF_Voucher_${voucherCode}.png`;
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

    if (showVoucher) {
        return (
            <div className="text-center space-y-5">
                {/* Success header */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                            <CheckCircle className="h-7 w-7 text-white" />
                        </div>
                        <Sparkles className="h-5 w-5 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white">🎉 Your Voucher is Ready!</h3>
                <p className="text-sm text-blue-200">
                    Congratulations <strong className="text-yellow-300">{name}</strong>!
                </p>

                {/* Mini Voucher Card */}
                <div ref={voucherRef} className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-2xl p-5 border-2 border-dashed border-purple-500/50 shadow-xl overflow-hidden">
                    <div className="relative z-10 space-y-2">
                        <p className="text-purple-300 font-semibold text-xs uppercase tracking-widest">Techmiya EdTech</p>
                        <p className="text-amber-400 font-bold text-sm">✨ COURSE VOUCHER ✨</p>
                        <div className="py-2">
                            <span className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">FLAT ₹1000 OFF</span>
                        </div>
                        <p className="text-gray-300 text-xs">on any course enrollment</p>

                        <div className="flex items-center justify-center gap-2 mt-2">
                            <div className="bg-white/10 border border-yellow-500/40 rounded-lg px-4 py-2 flex items-center gap-2">
                                <span className="text-yellow-400 font-mono font-bold text-base tracking-wider">{voucherCode}</span>
                                <button onClick={handleCopyCode} className="text-yellow-400 hover:text-yellow-300 transition-colors">
                                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <p className="text-gray-400 text-xs">
                            Issued to: <span className="text-gray-200">{name}</span> | Course: <span className="text-gray-200">{course}</span>
                        </p>
                        <p className="text-orange-400 font-semibold text-xs">
                            Valid until: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 justify-center">
                    <Button
                        onClick={handleDownloadVoucher}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-5 py-2 rounded-xl shadow-lg text-sm"
                    >
                        <Download className="w-4 h-4 mr-1" /> Download
                    </Button>
                    <Button
                        onClick={handleCopyCode}
                        variant="outline"
                        className="border border-purple-400 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200 font-bold px-5 py-2 rounded-xl text-sm"
                    >
                        {copied ? <CheckCircle className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                        {copied ? "Copied!" : "Copy Code"}
                    </Button>
                </div>

                <button onClick={handleReset} className="text-purple-300 hover:text-purple-200 underline text-xs transition-colors">
                    ← Generate another voucher
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-sm">
            {/* Form Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 text-center">
                    <div className="flex justify-center mb-2">
                        <div className="relative">
                            <Ticket className="h-8 w-8 text-yellow-300 animate-bounce" />
                            <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-2 animate-pulse" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                        Get Flat ₹1000 OFF Voucher
                    </h3>
                    <p className="text-blue-100 text-sm mt-1">
                        Fill in details to get your <strong>exclusive discount!</strong>
                    </p>
                </div>

                {/* Form Body */}
                <div className="px-6 py-5">
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                id="hero-lead-name"
                                placeholder="Your Full Name"
                                className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors h-10"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                id="hero-lead-email"
                                type="email"
                                placeholder="Your Email"
                                className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors h-10"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                id="hero-lead-phone"
                                type="tel"
                                placeholder="Phone Number"
                                className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors h-10"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="relative">
                            <BookOpen className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                            <Select value={course} onValueChange={setCourse}>
                                <SelectTrigger id="hero-lead-course" className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors h-10">
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

                        <Button
                            type="submit"
                            id="hero-lead-submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-5 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            ) : (
                                <Gift className="w-5 h-5 mr-2" />
                            )}
                            {isSubmitting ? "Generating Voucher..." : "Get Flat ₹1000 OFF Voucher 🎫"}
                        </Button>

                        <p className="text-xs text-center text-gray-500">
                            By submitting, you agree to receive course updates from Techmiya EdTech. 🚀
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
