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
      <article className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">

        {/* Cover Image */}
        <div className="relative h-[300px] shrink-0 overflow-hidden">
          <Image
            src={item.coverImage}
            alt={item.year}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Rotary Year */}
          <div className="absolute left-5 top-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-900 shadow-lg">
              <CalendarDays size={14} />
              {item.year}
            </span>
          </div>

          {/* Theme */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
              Rotary Year
            </p>

            <h3 className="text-3xl font-black leading-tight text-white">
              {item.theme}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">

          <p className="line-clamp-4 text-[15px] leading-7 text-slate-500 dark:text-slate-400">
            {item.message}
          </p>

          {/* CTA */}
          <div className="mt-auto pt-7">
            <div className="flex items-center justify-between gap-4">

              <span className="inline-flex items-center rounded-full border border-yellow-400 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.14em] text-slate-900 transition-colors duration-300 group-hover:bg-yellow-400 dark:text-white">
                View Legacy
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