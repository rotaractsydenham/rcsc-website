"use client";

import { useEffect, useRef, useState } from "react";

import { legacy } from "@/content/legacy";
import HomeLegacyCard from "./HomeLegacyCard";

export default function LegacyShowcase() {
  const [active, setActive] = useState(0);
  const yearScrollRef = useRef<HTMLDivElement>(null);

  /*
   * Keep the active year centered on mobile.
   * This scrolls ONLY the horizontal year selector,
   * not the entire webpage.
   */
  useEffect(() => {
    const container = yearScrollRef.current;
    const activeItem = container?.children[active] as
      | HTMLElement
      | undefined;

    if (!container || !activeItem) return;

    const containerCenter = container.clientWidth / 2;

    const itemCenter =
      activeItem.offsetLeft + activeItem.offsetWidth / 2;

    const targetScrollLeft = itemCenter - containerCenter;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  }, [active]);

  /*
   * Automatically move through the years.
   */
  useEffect(() => {
    if (legacy.length <= 1) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % legacy.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  if (!legacy.length) return null;

  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-16 dark:bg-slate-950 sm:pb-32 sm:pt-20">

      {/* ========================================
          TOP SECTION TRANSITION
          ======================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-slate-50 via-slate-50/70 to-transparent dark:from-slate-900 dark:via-slate-900/70" />

      {/* Subtle yellow ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      {/* ========================================
          MAIN CONTENT
          ======================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

        {/* ========================================
            SECTION HEADING
            ======================================== */}

        <div className="mb-10 text-center sm:mb-14">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-yellow-400 sm:w-14" />

            <p className="text-xs font-bold uppercase tracking-[0.4em] text-yellow-500 sm:text-sm sm:tracking-[0.55em]">
              Our Legacy
            </p>

            <span className="h-[2px] w-10 rounded-full bg-yellow-400 sm:w-14" />
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Journey Through
            <span className="block text-yellow-500">
              The Years
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:mt-7 sm:text-base sm:leading-8 dark:text-slate-400">
            Every Rotary year has shaped the Rotaract Club of
            Sydenham College into what it is today.
          </p>
        </div>

        {/* ========================================
            ACTIVE LEGACY CARD
            ======================================== */}

        <div className="mx-auto max-w-6xl">
          <HomeLegacyCard year={legacy[active]} />
        </div>

        {/* ========================================
            YEAR SELECTOR
            ======================================== */}

        <div className="relative mx-auto mt-8 max-w-4xl sm:mt-10">

          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80" />

          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80" />

          <div
            ref={yearScrollRef}
            className="scrollbar-hide flex snap-x snap-mandatory items-center gap-2 overflow-x-auto px-[calc(50%-58px)] py-3 sm:justify-center sm:gap-3 sm:px-6"
          >
            {legacy.map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`
                    shrink-0 snap-center rounded-full
                    px-5 py-2.5 text-xs font-bold
                    transition-all duration-300
                    sm:px-6 sm:py-3 sm:text-sm
                    ${
                      isActive
                        ? "bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/20"
                        : "text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-500 dark:hover:bg-slate-900 dark:hover:text-white"
                    }
                  `}
                >
                  {item.year}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================
          BOTTOM SECTION TRANSITION
          ======================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-slate-50 via-slate-50/70 to-transparent dark:from-slate-950 dark:via-slate-950/70" />
    </section>
  );
}