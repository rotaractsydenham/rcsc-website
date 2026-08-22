import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Trophy, PartyPopper } from "lucide-react";
import { legacy } from "@/content/legacy";
import PageHero from "@/components/shared/PageHero";

export function generateStaticParams() {
  return legacy.map((item) => ({
    slug: item.slug,
  }));
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LegacyYearPage({ params }: Props) {
  const { slug } = await params;

  const year = legacy.find((item) => item.slug === slug);

  if (!year) notFound();

  const index = legacy.findIndex((item) => item.slug === slug);

  const previous = index > 0 ? legacy[index - 1] : null;
  const next = index < legacy.length - 1 ? legacy[index + 1] : null;

  return (
    <>
      <PageHero
        eyebrow="LEGACY"
        title={year.year}
        subtitle={year.theme}
        image={year.coverImage}
      />

      <main className="pt-20 pb-40">

        <div className="mx-auto max-w-7xl px-6">

          {/* Introduction */}

          <section className="mb-20">

            <h2 className="text-4xl font-black">
              {year.theme}
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {year.description}
            </p>

          </section>

          {/* President & Secretary */}

          <section className="mb-20 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border p-8">

              <h3 className="mb-4 text-2xl font-bold">
                President
              </h3>

              <p className="text-lg">
                {year.president}
              </p>

            </div>

            <div className="rounded-3xl border p-8">

              <h3 className="mb-4 text-2xl font-bold">
                Secretary
              </h3>

              <p className="text-lg">
                {year.secretary}
              </p>

            </div>

          </section>

          {/* Message */}

          <section className="mb-20 rounded-3xl bg-yellow-50 p-10 dark:bg-yellow-500/10">

            <h2 className="mb-6 text-3xl font-bold">
              Legacy Message
            </h2>

            <p className="text-lg leading-8 italic">
              "{year.message}"
            </p>

          </section>

          {/* Projects */}

          <section className="mb-20">

            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
              <Calendar className="text-yellow-500" />
              Major Projects
            </h2>

            <div className="grid gap-5 md:grid-cols-3">

              {year.projects.map((project) => (
                <div
                  key={project}
                  className="rounded-2xl border p-6"
                >
                  {project}
                </div>
              ))}

            </div>

          </section>

          {/* Events */}

          <section className="mb-20">

            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
               <PartyPopper className="text-yellow-500" />
              Major Events
            </h2>

            <div className="grid gap-5 md:grid-cols-3">

              {year.events.map((event) => (
                <div
                  key={event}
                  className="rounded-2xl border p-6"
                >
                  {event}
                </div>
              ))}

            </div>

          </section>

          {/* Achievements */}

          <section className="mb-20">

            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
              <Trophy className="text-yellow-500" />
              Achievements
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              {year.achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="rounded-2xl border p-6"
                >
                  {achievement}
                </div>
              ))}

            </div>

          </section>

          {/* Navigation */}

          <div className="flex justify-between">

            {previous ? (
              <Link
                href={`/legacy/${previous.slug}`}
                className="flex items-center gap-3 rounded-xl border px-6 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <ArrowLeft size={18} />
                {previous.year}
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/legacy/${next.slug}`}
                className="flex items-center gap-3 rounded-xl border px-6 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {next.year}
                <ArrowRight size={18} />
              </Link>
            ) : (
              <div />
            )}

          </div>

        </div>

      </main>
    </>
  );
}