import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutClub() {
  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-950">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Content */}

        <div>

          <div className="mb-5 flex items-center gap-4">

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
              ABOUT RCSC
            </span>

          </div>

          <h2 className="text-5xl font-black leading-tight">

            Young Leaders.
            <br />
            Lasting Impact.

          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600 dark:text-slate-300">

            Chartered in <strong>2020</strong>, the Rotaract Club of Sydenham
            College is a student-led organisation sponsored by the
            <strong> Rotary Club of Bombay</strong> and operating under
            <strong> Rotary International District 3141</strong>.

          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">

            We believe that leadership is built through service. Every project,
            event and initiative is an opportunity for students to grow,
            collaborate and create meaningful change within the college and the
            wider community.

          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">

            From environmental initiatives and community service projects to
            professional development programmes and international collaborations,
            our members strive to leave a positive impact wherever they serve.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
            >
              Explore Projects

              <ArrowRight size={18} />

            </Link>

            <Link
              href="/leadership"
              className="inline-flex items-center gap-3 rounded-xl border px-8 py-4 font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Meet the Leadership

            </Link>

          </div>

        </div>

        {/* Image */}

        <div className="relative">

          <div className="absolute -right-5 -bottom-5 h-32 w-32 rounded-full bg-yellow-400/20 blur-3xl" />

          <Image
            src="/images/about/rcsc.jpg"
            alt="Rotaract Club of Sydenham College"
            width={900}
            height={700}
            className="rounded-[2rem] object-cover shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}