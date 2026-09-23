"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Crown,
  UserRound,
} from "lucide-react";

import { LegacyYear } from "@/content/legacy";

interface Props {
  year: LegacyYear;
}

export default function HomeLegacyCard({ year }: Props) {
  return (
    <article className="group relative h-[680px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950 sm:h-[720px] lg:h-[520px] sm:rounded-[2rem]">
      <div className="grid h-full lg:grid-cols-[0.95fr_1.05fr]">

        {/* Image */}
        <div className="relative h-[230px] overflow-hidden sm:h-[300px] lg:h-full">
          <Image
            src={year.coverImage}
            alt={year.year}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-yellow-400 sm:text-xs sm:tracking-[0.35em]">
              Rotary Year
            </p>

            <h3 className="mt-2 text-4xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
              {year.year}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="flex min-h-0 flex-col p-5 sm:p-8 lg:justify-center lg:p-12">

          {/* Theme */}
          <div className="flex shrink-0 items-start gap-3 sm:gap-4">
            <span className="mt-1 h-10 w-1 shrink-0 rounded-full bg-yellow-400 sm:h-12" />

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-yellow-500 sm:text-xs sm:tracking-[0.35em]">
                The Theme
              </p>

              <h3 className="mt-2 line-clamp-2 text-2xl font-black leading-tight sm:mt-3 sm:text-4xl">
                {year.theme}
              </h3>
            </div>
          </div>

          {/* Description — fixed height */}
          <div className="mt-5 h-[96px] overflow-hidden sm:mt-7 sm:h-[112px]">
            <p className="line-clamp-4 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
              {year.description}
            </p>
          </div>

         {/* Leadership */}
<div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4">

  {/* President */}
  <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:rounded-2xl sm:p-5">
    <div className="flex items-start gap-2.5 sm:gap-3">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-500 sm:h-10 sm:w-10">
        <Crown size={16} />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[11px] sm:tracking-[0.18em]">
          President
        </p>

        <p className="mt-1 line-clamp-2 text-xs font-semibold leading-5 sm:text-sm sm:leading-6">
          {year.president}
        </p>
      </div>

    </div>
  </div>

  {/* Secretary */}
  <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:rounded-2xl sm:p-5">
    <div className="flex items-start gap-2.5 sm:gap-3">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-500 sm:h-10 sm:w-10">
        <UserRound size={16} />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[11px] sm:tracking-[0.18em]">
          Secretary
        </p>

        <p className="mt-1 line-clamp-2 text-xs font-semibold leading-5 sm:text-sm sm:leading-6">
          {year.secretary}
        </p>
      </div>

    </div>
  </div>

</div>

          {/* CTA */}
          <div className="mt-7 shrink-0 sm:mt-9">
            <Link
              href={`/legacy/${year.slug}`}
              className="group/cta inline-flex items-center gap-3"
            >
              <span className="inline-flex items-center rounded-full border border-yellow-400 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-900 transition-all duration-300 group-hover/cta:bg-yellow-400 sm:px-6 sm:py-3 sm:text-sm dark:text-white">
                Explore Legacy
              </span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-slate-900 transition-transform duration-300 group-hover/cta:translate-x-1 sm:h-11 sm:w-11">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>

        </div>
      </div>
    </article>
  );
}