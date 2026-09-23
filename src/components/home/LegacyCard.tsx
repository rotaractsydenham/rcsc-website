import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

import { LegacyYear } from "@/content/legacy";

interface Props {
  item: LegacyYear;
}

export default function LegacyCard({ item }: Props) {
  return (
    <Link href={`/legacy/${item.slug}`} className="group block h-full">
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
          dark:bg-slate-950

          sm:min-h-[420px]
          sm:rounded-[2rem]
        "
      >
        {/* =================================================
            COVER IMAGE
        ================================================== */}

        <div
          className="
            relative h-[210px]
            shrink-0 overflow-hidden

            sm:h-[230px]
          "
        >
          <Image
            src={item.coverImage}
            alt={item.year}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1280px) 50vw, 33vw"
            className="
              object-cover
              transition duration-700 ease-out
              group-hover:scale-105
            "
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* =================================================
              YEAR
          ================================================== */}

          <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
            <span
              className="
                inline-flex items-center gap-1.5
                rounded-full
                bg-yellow-400
                px-3 py-1.5
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-slate-900
                shadow-lg

                sm:gap-2
                sm:px-3.5
                sm:py-2
                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              <CalendarDays
                size={12}
                className="sm:h-[14px] sm:w-[14px]"
              />

              {item.year}
            </span>
          </div>

          {/* =================================================
              THEME
          ================================================== */}

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-400 sm:mb-2 sm:text-xs sm:tracking-[0.25em]">
              Rotary Year
            </p>

            <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">
              {item.theme}
            </h3>
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <p
            className="
              line-clamp-3
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400

              sm:line-clamp-4
              sm:text-[15px]
              sm:leading-7
            "
          >
            {item.message}
          </p>

          {/* CTA */}

          <div className="mt-auto pt-5 sm:pt-7">
            <div className="flex items-center justify-between gap-3">
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  border border-yellow-400
                  px-4 py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-slate-900
                  transition-colors duration-300
                  group-hover:bg-yellow-400

                  sm:px-5
                  sm:py-2.5
                  sm:text-sm
                  sm:tracking-[0.14em]

                  dark:text-white
                "
              >
                View Legacy
              </span>

              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-yellow-400
                  text-slate-900
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:bg-yellow-300

                  sm:h-11
                  sm:w-11
                "
              >
                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5

                    sm:h-[19px]
                    sm:w-[19px]
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