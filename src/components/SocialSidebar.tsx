import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

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
        </div>
    );
};

export default SocialSidebar;
