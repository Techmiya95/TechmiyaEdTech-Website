import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

interface ServicePageProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    benefits: string[];
    icon: string;
    images?: string[];
    youtubeVideoId?: string;
}

export const ServicePage = ({ title, subtitle, description, features, benefits, icon, images, youtubeVideoId }: ServicePageProps) => {
    return (
        <div className="min-h-screen">
            <SEOHead
                title={`${title} - Techmiya EdTech Services`}
                description={`${description.substring(0, 150)}...`}
                keywords={`${title}, Techmiya EdTech, IT training services Bangalore, corporate training, skill development`}
                canonicalUrl={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-6xl mb-6 block">{icon}</span>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">{subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{description}</p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-1">✓</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits & CTA */}
                        <div>
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h3>
                                <ul className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-purple-500 mr-3 mt-1">★</span>
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact CTA */}
                            <div className="bg-gray-900 text-white p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-4">Interested in {title}?</h3>
                                <p className="text-gray-300 mb-6">
                                    Contact us today to discuss how we can help your organization with our {title.toLowerCase()} services.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/contact">
                                        <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                                            Contact Us
                                        </Button>
                                    </Link>
                                    <a href="tel:+916363760275">
                                        <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900">
                                            Call: +91-6363760275
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            {images && images.length > 0 && (
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gallery</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {images.map((image, index) => (
                                <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-video">
                                    <img
                                        src={image}
                                        alt={`${title} image ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Featured Video */}
            {youtubeVideoId && (
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Video</h2>
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-[6px] border-gray-900 bg-black hover:scale-105 transition-transform duration-300">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                                    title="Featured Service Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Back to Home */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
                        ← Back to Home
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
