"use client";

import { useEffect, useState } from "react";
import { legacy } from "@/content/legacy";
import HomeLegacyCard from "./HomeLegacyCard";

export default function LegacyShowcase() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => {
        if (current === legacy.length - 1) {
          setDirection(-1);
          return current - 1;
        }

        if (current === 0) {
          setDirection(1);
          return current + 1;
        }

        return current + direction;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [direction]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[150px]" />

        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 flex flex-col items-center text-center">

          <div className="mb-5 flex items-center gap-4">
            <span className="h-[2px] w-12 rounded-full bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
              OUR LEGACY
            </span>

            <span className="h-[2px] w-12 rounded-full bg-yellow-400" />
          </div>

          <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Journey Through
            <span className="text-yellow-500"> The Years</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-400 sm:text-lg">
            Every Rotary year has shaped the Rotaract Club of Sydenham College
            into what it is today.
          </p>
        </div>

        {/* Showcase */}
        <HomeLegacyCard
          year={legacy[active]}
        />

        {/* Year Navigation */}
        <div className="mt-10 flex items-center justify-center gap-3 overflow-x-auto pb-2">
          {legacy.map((item, index) => (
            <button
              key={item.slug}
              onClick={() => setActive(index)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                active === index
                  ? "bg-yellow-400 text-slate-900"
                  : "border border-slate-300 text-slate-500 hover:border-yellow-400 hover:text-yellow-500 dark:border-slate-700 dark:text-slate-400"
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}