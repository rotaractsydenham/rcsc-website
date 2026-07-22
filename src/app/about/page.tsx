import PageHero from "@/components/shared/PageHero";
import { club } from "@/content/club";
import VisionMission from "@/components/about/VisionMission";

export default function AboutPage() {
  return (
    <>
      <PageHero
  eyebrow="ABOUT"
  title="Who We Are"
  subtitle="Developing leaders through service and fellowship."
  image="/images/banners/about.jpg"
/>

      <main className="pt-20 pb-40">

        <div className="mx-auto max-w-7xl px-6">

          {/* WHO WE ARE */}

          <section className="mb-24">

            <h2 className="text-4xl font-bold">
              Who We Are
            </h2>
            <VisionMission />

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {club.description}
            </p>

          </section>

        </div>

      </main>
    </>
  );
}