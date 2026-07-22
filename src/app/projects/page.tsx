import { projects } from "@/content/projects";
import ProjectCard from "@/components/home/ProjectCard";
import PageHero from "@/components/shared/PageHero";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="PROJECTS"
        title="Our Flagship Initiatives"
        subtitle="Every project reflects our commitment to service, leadership and community impact."
        image="/images/banners/projects.jpg"
      />

      <main className="pt-20 pb-40">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

        </div>
      </main>
    </>
  );
}