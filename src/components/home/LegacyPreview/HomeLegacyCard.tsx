"use client";

import Link from "next/link";
import { LegacyYear } from "@/content/legacy";

interface Props {
  year: LegacyYear;
}

export default function HomeLegacyCard({
  year,
}: Props) {

  return (

    <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white/80 p-10 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">

      <p className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
        ROTARY YEAR
      </p>

      <h2 className="mt-4 text-5xl font-black">
        {year.year}
      </h2>

      <p className="mt-3 text-2xl font-semibold text-yellow-500">
        {year.theme}
      </p>

      <p className="mt-8 leading-8 text-slate-600 dark:text-slate-300">
        {year.description}
      </p>

      <div className="mt-10 grid grid-cols-2 gap-8">

        <div>

          <p className="text-xs uppercase tracking-wider text-slate-400">
            President
          </p>

          <p className="mt-2 font-semibold">
            {year.president}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wider text-slate-400">
            Secretary
          </p>

          <p className="mt-2 font-semibold">
            {year.secretary}
          </p>

        </div>

      </div>

      <Link
        href={`/legacy/${year.slug}`}
        className="mt-10 inline-flex rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
      >
        View Legacy →
      </Link>

    </div>

  );

}