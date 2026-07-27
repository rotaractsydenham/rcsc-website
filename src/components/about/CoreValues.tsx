import {
  Handshake,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Leadership",
    description:
      "We empower students to lead with confidence, responsibility and purpose.",
  },
  {
    icon: Heart,
    title: "Service",
    description:
      "Service is at the heart of everything we do, creating meaningful impact in our communities.",
  },
  {
    icon: Handshake,
    title: "Fellowship",
    description:
      "Friendships built through Rotaract become lifelong connections beyond college.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold honesty, accountability and respect in every action we take.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We embrace creativity and fresh ideas to solve challenges and inspire change.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-4">

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
              OUR VALUES
            </span>

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

          </div>

          <h2 className="text-5xl font-black">

            Principles That Guide Us

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">

            Every project, initiative and decision is rooted in these values.

          </p>

        </div>

        {/* Mobile */}

        <div
          className="
            no-scrollbar
            flex
            gap-2
            overflow-x-auto
            snap-x
            snap-mandatory
            px-6
            pb-8

            lg:hidden
          "
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="w-full shrink-0 snap-start"
              >
                <div className="rounded-[2rem] border bg-white p-8 shadow-sm dark:bg-slate-900">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900">

                    <Icon size={30} />

                  </div>

                  <h3 className="text-3xl font-black">

                    {value.title}

                  </h3>

                  <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">

                    {value.description}

                  </p>

                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop */}

        <div className="hidden gap-8 lg:grid lg:grid-cols-3">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="
                  rounded-[2rem]
                  border
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-yellow-400
                  hover:shadow-xl

                  dark:bg-slate-900
                "
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900">

                  <Icon size={30} />

                </div>

                <h3 className="text-3xl font-black">

                  {value.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">

                  {value.description}

                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}