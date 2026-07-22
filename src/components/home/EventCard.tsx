import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  title: string;
  slug: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  description: string;
  featured: boolean;
  registrationLink?: string;
  status: "Upcoming" | "Completed";
}

export default function EventCard(event: EventCardProps) {
  return (
    <Link href={`/events/${event.slug}`}>
      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900">

        <Image
          src={event.image}
          alt={event.title}
          width={600}
          height={400}
          className="h-60 w-full object-cover"
        />

        <div className="p-6">

          <p className="text-sm font-semibold text-yellow-500">
            {event.date}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {event.title}
          </h3>

          <p className="mt-2 text-slate-500">
            📍 {event.venue}
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {event.description}
          </p>

          <button className="mt-6 rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-yellow-400">
            Learn More
          </button>

        </div>
      </div>
    </Link>
  );
}