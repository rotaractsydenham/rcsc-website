import { projects } from "@/content/projects";

import ProjectCard from "@/components/home/ProjectCard";
import PageHero from "@/components/shared/PageHero";

import HorizontalSnap from "@/components/ui/HorizontalSnap";
import SnapItem from "@/components/ui/SnapItem";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="PROJECTS"
        title="Our Initiatives"
        subtitle="Every project reflects our commitment to service, leadership and community impact."
        image="/images/banners/projects.jpg"
      />

      <main className="pt-20 pb-40">

        <div className="mx-auto max-w-7xl lg:px-6">

          <HorizontalSnap>

            {projects.map((project) => (

              <SnapItem key={project.id}>

                <ProjectCard
                  project={project}
                />

              </SnapItem>

            ))}

          </HorizontalSnap>

        </div>

      </main>
    </>
  );
}