"use client";

import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

const YouTubeShortsSection = () => {
    const videoIds = [
        "RSMuY1HTfLk",
        "IfIij0h-6-c",
        "smeXvOaFTg0",
        "yXRpKg8yJgM",
        "_9PVN0noZ-k"
    ];

    const [playingId, setPlayingId] = useState<string | null>(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Experience Our Training
                    </h2>
                    <p className="text-xl text-gray-600">
                        See what happens inside our classrooms
                    </p>
                </div>

                <div className="flex justify-center">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-[1200px]"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {videoIds.map((id) => (
                                <CarouselItem key={id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-[6px] border-gray-900 bg-black hover:scale-105 transition-transform duration-300 group">
                                        {playingId === id ? (
                                            <iframe
                                                className="w-full h-full"
                                                src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                                                title={`Techmiya Training Reel ${id}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                loading="lazy"
                                            ></iframe>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => setPlayingId(id)}
                                                className="relative w-full h-full block text-left focus:outline-none cursor-pointer"
                                                aria-label={`Play Techmiya Training Reel ${id}`}
                                            >
                                                <img
                                                    src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                                                    alt={`Techmiya Training Reel ${id}`}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex flex-col items-center justify-center">
                                                    <div className="w-14 h-14 bg-red-600/90 group-hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110">
                                                        <Play className="w-6 h-6 fill-white ml-0.5" />
                                                    </div>
                                                    <span className="mt-3 text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                                                        Watch Short
                                                    </span>
                                                </div>
                                            </button>
                                        )}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12" />
                        <CarouselNext className="hidden md:flex -right-12" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default YouTubeShortsSection;
