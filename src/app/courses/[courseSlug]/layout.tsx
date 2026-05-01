import { courseSyllabi } from "@/data/courseSyllabi";

export function generateStaticParams() {
    return courseSyllabi.map((course) => ({
        courseSlug: course.slug,
    }));
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
