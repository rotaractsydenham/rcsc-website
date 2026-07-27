import {
  Globe,
  Building2,
  Landmark,
  GraduationCap,
  ArrowDown,
} from "lucide-react";

const hierarchy = [
  {
    title: "Rotary International",
    subtitle: "Global Network",
    icon: Globe,
    description:
      "A worldwide service organisation connecting over 1.2 million members dedicated to creating lasting change.",
  },
  {
    title: "Rotary International District 3141",
    subtitle: "District",
    icon: Landmark,
    description:
      "Supporting Rotary and Rotaract clubs across Mumbai and neighbouring regions through leadership and collaboration.",
  },
  {
    title: "Rotary Club of Bombay",
    subtitle: "Sponsor Club",
    icon: Building2,
    description:
      "The sponsoring Rotary club that mentors and supports the Rotaract Club of Sydenham College.",
  },
  {
    title: "Rotaract Club of Sydenham College",
    subtitle: "Student Club",
    icon: GraduationCap,
    description:
      "Developing young leaders through fellowship, professional growth and impactful service projects.",
  },
];

export default function RotaryConnection() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-4">

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
              ROTARY FAMILY
            </span>

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

          </div>

          <h2 className="text-5xl font-black">

            Connected Through Service

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">

            The Rotaract Club of Sydenham College is part of a global network
            of leaders dedicated to creating positive and lasting change.

          </p>

        </div>

        {/* Hierarchy */}

        <div className="space-y-8">

          {hierarchy.map((item, index) => {

            const Icon = item.icon;

            return (

              <div key={item.title}>

                <div
                  className="
                    rounded-[2rem]
                    border
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-yellow-400
                    hover:shadow-xl

                    dark:bg-slate-900
                  "
                >

                  <div className="flex flex-col items-center text-center">

                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400 text-slate-900">

                      <Icon size={38} />

                    </div>

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">

                      {item.subtitle}

                    </p>

                    <h3 className="mt-3 text-3xl font-black">

                      {item.title}

                    </h3>

                    <p className="mt-5 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">

                      {item.description}

                    </p>

                  </div>

                </div>

                {index !== hierarchy.length - 1 && (

                  <div className="my-6 flex justify-center">

                    <ArrowDown
                      size={32}
                      className="text-yellow-500"
                    />

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}