import PageHero from "@/components/shared/PageHero";
import LegacyCard from "@/components/legacy/LegacyCard";
import { legacy } from "@/content/legacy";

export default function LegacyPage() {
  return (
    <>
      <PageHero
  eyebrow="LEGACY"
  title="Our Legacy"
  subtitle="Every year tells a story. Every board leaves a legacy."
  image="/images/banners/legacy.jpg"
/>

      <main className="pt-20 pb-40">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-20 max-w-3xl">

            <h2 className="text-5xl font-black">
              A Journey Through Time
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Explore the history of the Rotaract Club of Sydenham College
              through each Rotary year, celebrating the people, projects and
              milestones that shaped our club.
            </p>

          </div>

          <div className="grid gap-10 lg:grid-cols-2">

            {legacy.map((year) => (
              <LegacyCard
                key={year.id}
                legacy={year}
              />
            ))}

          </div>

        </div>

      </main>
    </>
  );
}