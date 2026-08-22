import { notFound } from "next/navigation";
import Image from "next/image";
import { events } from "@/content/events";

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <Image
        src={event.image}
        alt={event.title}
        width={1200}
        height={700}
        className="rounded-3xl"
      />

      <h1 className="mt-8 text-5xl font-bold">
        {event.title}
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">Date</h3>
          <p>{event.date}</p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">Time</h3>
          <p>{event.time}</p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">Venue</h3>
          <p>{event.venue}</p>
        </div>
      </div>

      <p className="mt-10 text-lg leading-8">
        {event.description}
      </p>
    </main>
  );
}