import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-4">

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
              OUR PURPOSE
            </span>

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

          </div>

          <h2 className="text-5xl font-black">

            Vision & Mission

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">

            Guided by service, driven by leadership and united by fellowship.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Vision */}

          <div
            className="
              group
              rounded-[2rem]
              border
              bg-white
              p-10
              shadow-sm
              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-yellow-400
              hover:shadow-xl

              dark:bg-slate-900
            "
          >

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900">

              <Eye size={30} />

            </div>

            <h3 className="text-3xl font-black">

              Vision

            </h3>

            <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">

              To empower young leaders to create meaningful and sustainable
              change by fostering service, integrity, innovation and lifelong
              fellowship within the community.

            </p>

          </div>

          {/* Mission */}

          <div
            className="
              group
              rounded-[2rem]
              border
              bg-white
              p-10
              shadow-sm
              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-yellow-400
              hover:shadow-xl

              dark:bg-slate-900
            "
          >

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900">

              <Target size={30} />

            </div>

            <h3 className="text-3xl font-black">

              Mission

            </h3>

            <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">

              To inspire students through impactful projects, professional
              development, leadership opportunities and collaborative service,
              enabling them to become responsible citizens and compassionate
              leaders.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}