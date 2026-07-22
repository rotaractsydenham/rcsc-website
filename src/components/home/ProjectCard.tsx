import Image from "next/image";
import { Project } from "@/content/projects";
import Link from "next/link";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
  <Link href={`/projects/${project.slug}`}>
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900">

      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">

        <p className="text-sm font-semibold text-yellow-500">
          {project.avenue}
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
          <span>{project.date}</span>
          <span>{project.beneficiaries}</span>
        </div>

      </div>

    </div>
  </Link>
);
}