import { projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import HorizontalSnap from "@/components/ui/HorizontalSnap";
import SnapItem from "@/components/ui/SnapItem";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  if (!featuredProjects.length) return null;

  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-slate-950 sm:py-24 lg:py-28">

      {/* Top transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent dark:from-slate-950" />

      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute right-[-120px] top-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="px-5 sm:px-6">
          <SectionHeading
            eyebrow="Our Projects"
            title="Creating Lasting Impact"
            description="Some of our flagship community service initiatives."
          />
        </div>

        {/* Projects */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          <HorizontalSnap>
            {featuredProjects.map((project) => (
              <SnapItem key={project.id}>
                <ProjectCard project={project} />
              </SnapItem>
            ))}
          </HorizontalSnap>
        </div>

      </div>

      {/* Bottom transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />
    </section>
  );
}