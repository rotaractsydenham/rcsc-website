"use client";

import { useEffect, useState } from "react";

import { legacy } from "@/content/legacy";

import HomeLegacyCard from "./HomeLegacyCard";

export default function LegacyShowcase() {

  const [active, setActive] = useState(0);
  const [direction, setDirection] =
    useState<1 | -1>(1);

  useEffect(() => {

    const timer = setInterval(() => {

      setActive((current) => {

        if (current === legacy.length - 1) {
          setDirection(-1);
          return current - 1;
        }

        if (current === 0) {
          setDirection(1);
          return 1;
        }

        return current + direction;

      });

    }, 5000);

    return () => clearInterval(timer);

  }, [direction]);

  return (

    <section className="pt-20 pb-0">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-bold uppercase tracking-[0.6em] text-yellow-500">
            OUR LEGACY
          </p>

          <h2 className="mt-6 text-6xl font-black">
            Journey Through The Years
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-500 dark:text-slate-400">
            Every Rotary year has shaped the Rotaract Club of Sydenham College into what it is today.
          </p>

        </div>

        <HomeLegacyCard
          year={legacy[active]}
        />
             </div>

    </section>

  );

}