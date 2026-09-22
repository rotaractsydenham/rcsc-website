import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

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
    <Link href={`/events/${event.slug}`} className="group block h-full">
      <article className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">

        {/* Image */}
        <div className="relative h-[300px] shrink-0 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* Status */}
          <div className="absolute left-5 top-5">
            <span
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] ${
                event.status === "Upcoming"
                  ? "bg-yellow-400 text-slate-900"
                  : "bg-black/50 text-white backdrop-blur-md"
              }`}
            >
              {event.status}
            </span>
          </div>

          {/* Title */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-3xl font-black leading-tight text-white">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">

          {/* Event Details */}
          <div className="space-y-3 text-sm text-slate-500 dark:text-slate-400">

            <div className="flex items-center gap-3">
              <CalendarDays
                size={17}
                className="shrink-0 text-yellow-500"
              />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock3
                size={17}
                className="shrink-0 text-yellow-500"
              />
              <span>{event.time}</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-yellow-500"
              />
              <span>{event.venue}</span>
            </div>

          </div>

          {/* Description */}
          <p className="mt-5 line-clamp-3 text-[15px] leading-7 text-slate-500 dark:text-slate-400">
            {event.description}
          </p>

          {/* CTA */}
          <div className="mt-auto pt-6">
            <div className="flex items-center justify-between gap-4">

              <span className="inline-flex items-center rounded-full border border-yellow-400 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.14em] text-slate-900 transition-colors duration-300 group-hover:bg-yellow-400 dark:text-white">
                Learn More
              </span>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-slate-900 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-yellow-300">
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>

            </div>
          </div>

        </div>
      </article>
    </Link>
  );
}