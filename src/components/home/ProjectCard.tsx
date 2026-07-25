import Image from "next/image";
import Link from "next/link";

import { Project } from "@/content/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block h-full"
    >
      <article
        className="
          h-full
          overflow-hidden
          rounded-3xl
          border
          bg-white
          shadow-sm

          transition-all
          duration-300

          hover:-translate-y-2
          hover:shadow-xl

          dark:bg-slate-900
        "
      >
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="h-60 w-full object-cover"
        />

        <div className="flex h-[calc(100%-15rem)] flex-col p-6">

          <span className="w-fit rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase text-slate-900">
            {project.avenue}
          </span>

          <h3 className="mt-4 text-3xl font-bold">
            {project.title}
          </h3>

          <p className="mt-4 flex-1 text-slate-600 dark:text-slate-400">
            {project.shortDescription}
          </p>

          <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
            <span>{project.date}</span>
            <span>{project.beneficiaries}</span>
          </div>

        </div>
      </article>
    </Link>
  );
}