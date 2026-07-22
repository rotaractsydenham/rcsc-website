import { projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Our Projects"
          title="Creating Lasting Impact"
          description="Some of our flagship community service initiatives."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects
  .filter((project) => project.featured)
  .map((project) => (
    <ProjectCard
      key={project.id}
      project={project}
    />
))}
        </div>

      </div>
    </section>
  );
}