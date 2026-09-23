import { notFound } from "next/navigation";
import Image from "next/image";

import { highlightEvents } from "@/content/highlights/events";
import { achievements } from "@/content/highlights/achievements";
import { announcements } from "@/content/highlights/announcements";
import { membersOfTheMonth } from "@/content/highlights/members";

export function generateStaticParams() {
  return [
    ...highlightEvents.map((item) => ({
      slug: item.slug,
    })),

    ...achievements.map((item) => ({
      slug: item.slug,
    })),

    ...announcements.map((item) => ({
      slug: item.slug,
    })),

    ...membersOfTheMonth.map((item) => ({
      slug: item.slug,
    })),
  ];
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HighlightPage({ params }: Props) {
  const { slug } = await params;

  const event = highlightEvents.find((item) => item.slug === slug);

  if (event) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-12">
        <HighlightHero
          type="Event"
          title={event.title}
          description={event.description}
          image={event.image}
          status={event.status}
          date={event.date}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <InfoCard label="Date" value={event.date} />
          <InfoCard label="Time" value={event.time} />
          <InfoCard label="Venue" value={event.venue} />
        </div>

        <Description text={event.description} />

        {event.registrationLink && event.status === "Upcoming" && (
          <RegisterButton href={event.registrationLink} />
        )}
      </main>
    );
  }

  const achievement = achievements.find((item) => item.slug === slug);

  if (achievement) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-12">
        <HighlightHero
          type="Achievement"
          title={achievement.title}
          description={achievement.description}
          image={achievement.image}
          date={achievement.date}
        />

        <Description text={achievement.description} />
      </main>
    );
  }

  const announcement = announcements.find((item) => item.slug === slug);

  if (announcement) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-12">
        <HighlightHero
          type="Announcement"
          title={announcement.title}
          description={announcement.description}
          image={announcement.image}
          date={announcement.date}
        />

        <Description text={announcement.description} />
      </main>
    );
  }

  const member = membersOfTheMonth.find((item) => item.slug === slug);

  if (member) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-12">
        <HighlightHero
          type="Member of the Month"
          title={member.name}
          description={member.description}
          image={member.image}
          date={member.month}
        />

        <Description text={member.description} />
      </main>
    );
  }

  notFound();
}

interface HighlightHeroProps {
  type: string;
  title: string;
  description: string;
  image?: string;
  status?: string;
  date: string;
}

function HighlightHero({
  type,
  title,
  image,
  status,
  date,
}: HighlightHeroProps) {
  return (
    <>
      <div className="relative overflow-hidden rounded-[2rem]">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={1200}
            height={700}
            priority
            className="h-auto w-full object-cover"
          />
        ) : (
          <div className="flex aspect-[16/8] w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              RCSC Highlights
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

        <div className="absolute bottom-0 left-0 p-5 sm:p-10">
          <span className="inline-flex rounded-full bg-yellow-400 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-950">
            {status ?? type}
          </span>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-500">
          {type}
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          {title}
        </h1>

        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          {date}
        </p>
      </div>
    </>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-500">
        {label}
      </p>

      <p className="mt-2 font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}

function Description({ text }: { text: string }) {
  return (
    <div className="mt-10 max-w-4xl">
      <h2 className="text-2xl font-black text-slate-950 dark:text-white">
        About this highlight
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
        {text}
      </p>
    </div>
  );
}

function RegisterButton({ href }: { href: string }) {
  return (
    <div className="mt-10">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-yellow-300"
      >
        Register Now
      </a>
    </div>
  );
}