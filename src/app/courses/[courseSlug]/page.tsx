import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/data/courseSyllabi";
import { CourseDetailClient } from "./CourseDetailClient";

interface Props {
  params: Promise<{ courseSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  const title = `${course.title} Course Bangalore | Techmiya EdTech`;
  const description = `${course.description} Learn ${course.title} in ${course.duration} at Techmiya EdTech, Jayanagar Bangalore. Placement support & industry certification.`;

  return {
    title,
    description,
    keywords: `${course.title} course Bangalore, ${course.title} training Jayanagar, ${course.title} syllabus, ${course.title} certification, best ${course.title} IT training institute Bangalore`,
    alternates: {
      canonical: `https://www.techmiyaedtech.com/courses/${course.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.techmiyaedtech.com/courses/${course.slug}`,
      type: "website",
      images: [
        {
          url: course.image,
          alt: `${course.title} Course`,
        },
      ],
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    notFound();
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${course.title} Training in Bangalore`,
    "description": `${course.description} Learn ${course.title} in ${course.duration} with industry-oriented syllabus, placement support & certification at Techmiya EdTech, Jayanagar.`,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Techmiya EdTech",
      "url": "https://www.techmiyaedtech.com",
      "logo": "https://www.techmiyaedtech.com/techmiyaedtech_new_logo.png",
      "sameAs": "https://www.techmiyaedtech.com"
    },
    "courseMode": "Blended",
    "educationalLevel": course.level,
    "inLanguage": "en",
    "timeRequired": course.duration,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    },
    "offers": {
      "@type": "Offer",
      "category": "Paid",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "EducationalOrganization",
        "name": "Techmiya EdTech"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <CourseDetailClient course={course} />
    </>
  );
}
