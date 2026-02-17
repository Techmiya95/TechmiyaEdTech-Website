import { useEffect } from "react";

const InstagramReelsSection = () => {
    const reelUrls = [
        "https://www.instagram.com/reel/DMe27LZJkb0/",
        "https://www.instagram.com/reel/DQWIy7Qif7D/",
        "https://www.instagram.com/reel/DQZB8T7iQ_r/",
        "https://www.instagram.com/reel/DRE9ecojaXJ/",
    ];

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process();
            }
        };

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process();
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [reelUrls]);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Follow Us on Instagram
                    </h2>
                    <p className="text-xl text-gray-600">
                        Stay connected with our latest updates and behind-the-scenes content
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {reelUrls.map((url, index) => (
                        <div
                            key={index}
                            className="w-[300px] h-[580px] overflow-hidden rounded-2xl shadow-lg border border-gray-200"
                        >
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                                data-instgrm-version="14"
                                style={{
                                    background: "#FFF",
                                    border: 0,
                                    borderRadius: 0,
                                    boxShadow: "none",
                                    margin: 0,
                                    maxWidth: "300px",
                                    minWidth: "300px",
                                    padding: 0,
                                    width: "300px",
                                }}
                            >
                            </blockquote>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://www.instagram.com/techmiya_solutions.official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Follow @techmiya_solutions.official
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramReelsSection;

