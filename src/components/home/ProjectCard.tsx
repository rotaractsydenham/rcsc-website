import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/content/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full"
    >
      <article
        className="
          flex h-[500px] flex-col
          overflow-hidden
          rounded-[1.75rem]
          border border-slate-200
          bg-white
          shadow-sm

          transition-all
          duration-500

          hover:-translate-y-2
          hover:border-yellow-400
          hover:shadow-2xl

          dark:border-slate-800
          dark:bg-slate-950

          sm:h-[520px]
          sm:rounded-[2rem]
        "
      >

        {/* Image */}
        <div className="relative h-[220px] shrink-0 overflow-hidden sm:h-[235px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 84vw, (max-width: 1280px) 33vw, 400px"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Avenue */}
          <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
            <span className="inline-flex rounded-full bg-yellow-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-900 shadow-lg sm:px-4 sm:py-2 sm:text-xs">
              {project.avenue}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">

          {/* Title */}
          <h3 className="line-clamp-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl dark:text-white">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500 sm:mt-4 sm:text-[15px] sm:leading-7 dark:text-slate-400">
            {project.shortDescription}
          </p>

          {/* Meta */}
          <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs font-medium text-slate-400 sm:pt-6 sm:text-sm">

            <span className="truncate">
              {project.date}
            </span>

            <span className="shrink-0">
              {project.beneficiaries}
            </span>

          </div>

          {/* CTA */}
          <div className="mt-5 flex items-center justify-between sm:mt-6">

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-yellow-400
                px-4
                py-2.5
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-slate-900

                transition-colors
                duration-300

                group-hover:bg-yellow-400

                dark:text-white

                sm:px-5
                sm:py-3
                sm:text-sm
              "
            >
              Explore Project
            </span>

            <span
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-yellow-400
                text-slate-900

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:bg-yellow-300

                sm:h-11
                sm:w-11
              "
            >
              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </span>

          </div>

        </div>
      </article>
    </Link>
  );
}