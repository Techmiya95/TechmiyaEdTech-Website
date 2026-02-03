import { Instagram, Facebook, Youtube, Linkedin, MessageCircle, Phone } from "lucide-react";

const SocialSidebar = () => {
    const socials = [
        { icon: Instagram, href: "https://www.instagram.com/techmiyaedtech", label: "Instagram", bgColor: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500" },
        { icon: Facebook, href: "https://www.facebook.com/techmiyaedtech", label: "Facebook", bgColor: "bg-blue-600" },
        { icon: Youtube, href: "https://www.youtube.com/@techmiyaedtech", label: "YouTube", bgColor: "bg-red-600" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/techmiyaedtech", label: "LinkedIn", bgColor: "bg-blue-700" },
    ];

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
            {socials.map((social) => (
                <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 ${social.bgColor} text-white flex items-center justify-center rounded-l-lg transition-all duration-300 hover:w-12 hover:shadow-lg`}
                >
                    <social.icon className="w-5 h-5" />
                </a>
            ))}

            {/* Gap */}
            <div className="h-6"></div>

            {/* Contact Buttons */}
            <a
                href="https://wa.me/916363760275"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 flex items-center justify-center rounded-l-full transition-all duration-300 hover:w-14 hover:shadow-lg"
            >
                <img src="/Logo-WhatsApp.png" alt="WhatsApp" className="w-12 h-12 object-contain" />
            </a>
            <a
                href="tel:+916363760275"
                aria-label="Call Us"
                className="w-12 h-12 bg-yellow-500 text-black flex items-center justify-center rounded-l-full transition-all duration-300 hover:w-14 hover:shadow-lg shadow-md"
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
    );
};

export default SocialSidebar;
