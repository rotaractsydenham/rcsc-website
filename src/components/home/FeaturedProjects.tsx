import { projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import HorizontalSnap from "@/components/ui/HorizontalSnap";
import SnapItem from "@/components/ui/SnapItem";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        <div className="px-6">
          <SectionHeading
            eyebrow="Our Projects"
            title="Creating Lasting Impact"
            description="Some of our flagship community service initiatives."
          />
        </div>

        <HorizontalSnap>
          {featuredProjects.map((project) => (
            <SnapItem key={project.id}>
              <ProjectCard project={project} />
            </SnapItem>
          ))}
        </HorizontalSnap>

      </div>
    </section>
  );
}