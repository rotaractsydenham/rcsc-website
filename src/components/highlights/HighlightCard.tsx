import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

import type { HighlightEvent } from "@/content/highlights/events";

interface HighlightCardProps {
  event: HighlightEvent;
}

export default function HighlightCard({
  event,
}: HighlightCardProps) {
  return (
    <Link
      href={`/highlights/${event.slug}`}
      className="group block h-full"
    >
      <article
        className="
          flex h-full flex-col overflow-hidden
          rounded-[1.5rem]
          border border-slate-200
          bg-white
          shadow-sm
          transition-all duration-500
          hover:-translate-y-1
          hover:border-yellow-400
          hover:shadow-2xl
          dark:border-slate-800
          dark:bg-slate-900

          sm:min-h-[420px]
          sm:rounded-[1.75rem]
        "
      >
        {/* =====================================================
            IMAGE
        ===================================================== */}
        <div
          className="
            relative aspect-[16/10]
            shrink-0
            overflow-hidden

            sm:h-[220px]
            sm:aspect-auto
          "
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="
              (max-width: 640px) 84vw,
              (max-width: 1024px) 50vw,
              33vw
            "
            className="
              object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* Status */}
          <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
            <span
              className={`
                rounded-full
                px-3 py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                sm:px-3.5 sm:py-1.5 sm:text-[11px]

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

          {/* Type */}
          <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
            <span
              className="
                rounded-full
                border border-white/20
                bg-black/30
                px-3 py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
                backdrop-blur-md
              "
            >
              Event
            </span>
          </div>

          {/* Title */}
          <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-5 sm:right-5">
            <h3 className="text-2xl font-black leading-tight text-white sm:text-[1.7rem]">
              {event.title}
            </h3>
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div className="flex flex-1 flex-col p-5 sm:p-5">

          {/* Event Details */}
          <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400 sm:space-y-2.5">

            <div className="flex items-center gap-3">
              <CalendarDays
                size={16}
                className="shrink-0 text-yellow-500"
              />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock3
                size={16}
                className="shrink-0 text-yellow-500"
              />
              <span>{event.time}</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-yellow-500"
              />
              <span>{event.venue}</span>
            </div>

          </div>

          {/* Description */}
          <p
            className="
              mt-3
              line-clamp-2
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400

              sm:mt-3
              sm:line-clamp-2
              sm:text-sm
              sm:leading-6
            "
          >
            {event.description}
          </p>

          {/* CTA */}
          <div className="mt-auto pt-4">
            <div className="flex items-center justify-between gap-3">

              <span
                className="
                  inline-flex items-center
                  rounded-full
                  border border-yellow-400
                  px-4 py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-slate-900
                  transition-colors duration-300
                  group-hover:bg-yellow-400
                  dark:text-white

                  sm:px-4
                  sm:py-2
                  sm:text-xs
                "
              >
                Explore
              </span>

              <span
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-yellow-400
                  text-slate-900
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:bg-yellow-300
                "
              >
                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
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