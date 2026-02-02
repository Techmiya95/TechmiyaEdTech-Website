
import { BlogCard } from "@/components/BlogCard";
import { SEOHead } from "@/components/SEOHead";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const Blog = () => {
    // Mock data as requested: 1 real, 9 placeholders
    const blogs = [
        {
            id: 1,
            title: "Introduction to Machine Learning",
            description: "Discover the fundamentals of Machine Learning, its types (Supervised, Unsupervised, Reinforcement), and key algorithms that power today's AI.",
            date: "October 15, 2023",
            slug: "/blog/machine-learning-introduction",
            isPlaceholder: false,
        },
        // Generate 9 placeholders
        ...Array.from({ length: 9 }).map((_, i) => ({
            id: i + 2,
            title: `Upcoming Blog Post ${i + 1}`,
            description: "Stay tuned for more exciting content on technology, coding, and career development.",
            date: "Coming Soon",
            slug: "#",
            isPlaceholder: true,
        })),
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <SEOHead
                title="Tech Blog - AI, Machine Learning & Software Development Insights"
                description="Read expert articles on Generative AI, Machine Learning, Data Science, Python programming, career advice, and software development tutorials from Techmiya EdTech."
                keywords="tech blog, Machine Learning tutorials, AI articles, programming tips, career development, software engineering blog, Python tutorials, Data Science insights, IT industry news"
                canonicalUrl="/blog"
            />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Techmiya <span className="text-amber-600">Insights</span>
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Expert articles, tutorials, and career advice for the modern developer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            slug={blog.slug}
                            isPlaceholder={blog.isPlaceholder}
                        />
                    ))}
                </div>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" className="pointer-events-none opacity-50" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default Blog;
