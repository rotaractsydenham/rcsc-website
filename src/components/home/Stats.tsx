"use client";

import { statistics } from "@/content/statistics";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, HeartHandshake, Calendar, FolderKanban } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 48,
    suffix: "+",
    label: "Members",
  },
  {
    icon: FolderKanban,
    number: 100,
    suffix: "+",
    label: "Projects",
  },
  {
    icon: HeartHandshake,
    number: 1000,
    suffix: "+",
    label: "Lives Impacted",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section ref={ref} className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-yellow-500">
            Our Impact
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Making a Difference Since 2020
          </h2>

        </div>

        <div className="mx-auto grid max-w-5xl gap-20 md:grid-cols-3">

          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-3xl border bg-white p-10 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-950"
              >
                <Icon
                  size={42}
                  className="mx-auto mb-6 text-yellow-500"
                />

                <h3 className="text-5xl font-bold">

                  {inView ? (
                    <CountUp
                      end={stat.number}
                      duration={2}
                    />
                  ) : (
                    0
                  )}

                  {stat.suffix}

                </h3>

                <p className="mt-4 text-slate-500">
                  {stat.label}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}