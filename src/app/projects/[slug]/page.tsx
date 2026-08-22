import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={700}
        className="rounded-3xl object-cover"
      />

      <h1 className="mt-10 text-5xl font-bold">
        {project.title}
      </h1>

      <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
        {project.fullDescription}
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h3 className="font-bold">Category</h3>
          <p>{project.avenue}</p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="font-bold">Year</h3>
          <p>{project.date}</p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="font-bold">Beneficiaries</h3>
          <p>{project.beneficiaries}</p>
        </div>
      </div>
      <main className="pt-10 pb-10"></main>
    </main>
  );
}