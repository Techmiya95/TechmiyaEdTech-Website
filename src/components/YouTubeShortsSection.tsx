import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const YouTubeShortsSection = () => {
    const videoIds = [
        "Ae9nZngtk-g", // Original
        "RSMuY1HTfLk",
        "IfIij0h-6-c",
        "smeXvOaFTg0",
        "yXRpKg8yJgM",
        "_9PVN0noZ-k"
    ];

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
                                    <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-[6px] border-gray-900 bg-black hover:scale-105 transition-transform duration-300">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${id}`}
                                            title={`Techmiya Training Reel ${id}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
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
