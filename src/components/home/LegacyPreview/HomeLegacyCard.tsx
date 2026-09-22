"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Crown,
  UserRound,
} from "lucide-react";

import { LegacyYear } from "@/content/legacy";

interface Props {
  year: LegacyYear;
}

export default function HomeLegacyCard({ year }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">

      <div className="grid lg:grid-cols-[1fr_1fr]">

        {/* Image */}
        <div className="relative min-h-[400px] overflow-hidden lg:min-h-[560px]">

          <Image
            src={year.coverImage}
            alt={year.year}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
              Rotary Year
            </p>

            <h3 className="mt-2 text-6xl font-black leading-none text-white sm:text-7xl">
              {year.year}
            </h3>

          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">

          {/* Theme */}
          <div className="flex items-start gap-4">

            <span className="mt-1 h-12 w-1 shrink-0 rounded-full bg-yellow-400" />

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">
                The Theme
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                {year.theme}
              </h3>
            </div>

          </div>

          {/* Description */}
          <p className="mt-8 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {year.description}
          </p>

          {/* Leadership */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-500">
                  <Crown size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    President
                  </p>

                  <p className="mt-1 truncate font-semibold">
                    {year.president}
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-500">
                  <UserRound size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Secretary
                  </p>

                  <p className="mt-1 truncate font-semibold">
                    {year.secretary}
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href={`/legacy/${year.slug}`}
              className="group/cta inline-flex items-center gap-4"
            >
              <span className="inline-flex items-center rounded-full border border-yellow-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-900 transition-all duration-300 group-hover/cta:bg-yellow-400 dark:text-white">
                Explore Legacy
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-slate-900 transition-transform duration-300 group-hover/cta:translate-x-1">
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>

        </div>
      </div>

    </article>
  );
}