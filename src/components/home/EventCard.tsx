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
    <Link href={`/highlights/${event.slug}`} className="group block h-full">
      <article
        className="
          flex h-full flex-col overflow-hidden
          rounded-[1.5rem] border border-slate-200
          bg-white shadow-sm
          transition-all duration-500
          hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl
          dark:border-slate-800 dark:bg-slate-900

          sm:min-h-[500px]
          sm:rounded-[2rem]
        "
      >
        {/* Image */}
        <div
          className="
            relative aspect-[16/10] shrink-0 overflow-hidden
            sm:h-[300px] sm:aspect-auto
          "
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 84vw, (max-width: 768px) 50vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* Status */}
          <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
            <span
              className={`
                rounded-full px-3 py-1.5
                text-[10px] font-bold uppercase tracking-[0.16em]
                sm:px-4 sm:py-2 sm:text-xs
                ${
                  event.status === "Upcoming"
                    ? "bg-yellow-400 text-slate-900"
                    : "bg-black/50 text-white backdrop-blur-md"
                }
              `}
            >
              {event.status}
            </span>
          </div>

          {/* Title */}
          <div className="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
            <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div
          className="
            flex flex-1 flex-col
            p-5
            sm:p-6
          "
        >
          {/* Event Details */}
          <div className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400 sm:space-y-3">
            <div className="flex items-center gap-3">
              <CalendarDays
                size={16}
                className="shrink-0 text-yellow-500 sm:h-[17px] sm:w-[17px]"
              />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock3
                size={16}
                className="shrink-0 text-yellow-500 sm:h-[17px] sm:w-[17px]"
              />
              <span>{event.time}</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-yellow-500 sm:h-[17px] sm:w-[17px]"
              />
              <span>{event.venue}</span>
            </div>
          </div>

          {/* Description */}
          <p
            className="
              mt-4 line-clamp-2
              text-sm leading-6
              text-slate-500
              dark:text-slate-400
              sm:mt-5 sm:line-clamp-3 sm:text-[15px] sm:leading-7
            "
          >
            {event.description}
          </p>

          {/* CTA */}
          <div className="mt-5 pt-1 sm:mt-auto sm:pt-6">
            <div className="flex items-center justify-between gap-3">
              <span
                className="
                  inline-flex items-center
                  rounded-full border border-yellow-400
                  px-4 py-2
                  text-xs font-bold uppercase tracking-[0.12em]
                  text-slate-900
                  transition-colors duration-300
                  group-hover:bg-yellow-400
                  dark:text-white
                  sm:px-5 sm:py-2.5 sm:text-sm
                  sm:tracking-[0.14em]
                "
              >
                Learn More
              </span>

              <span
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-full bg-yellow-400
                  text-slate-900
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:bg-yellow-300
                  sm:h-11 sm:w-11
                "
              >
                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    sm:h-[19px] sm:w-[19px]
                  "
                />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}