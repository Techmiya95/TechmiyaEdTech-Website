import { jobs } from "@/data/jobs";

export function generateStaticParams() {
    return jobs.map((job) => ({
        jobId: job.id,
    }));
}

export default function JobLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
