import Image from "next/image";
import Link from "next/link";
import { GraduationCap, ExternalLink } from "lucide-react";

export default function AboutCollege() {
  return (
    <section className="py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Image */}

        <div className="relative">

          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-3xl bg-yellow-400/20 blur-2xl" />

          <Image
            src="/images/about/sydenham-college.jpg"
            alt="Sydenham College"
            width={900}
            height={700}
            className="rounded-[2rem] object-cover shadow-2xl"
          />

        </div>

        {/* Content */}

        <div>

          {/* Eyebrow */}

          <div className="mb-5 flex items-center gap-4">

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
              SYDENHAM COLLEGE
            </span>

          </div>

          {/* Heading */}

          <h2 className="text-5xl font-black leading-tight">

            A Legacy of Excellence Since 1913

          </h2>

          {/* Paragraph */}

          <p className="mt-8 text-lg leading-9 text-slate-600 dark:text-slate-300">

            Established in <strong>1913</strong>, Sydenham College of Commerce
            and Economics is one of India's oldest and most prestigious commerce
            institutions. For over a century, it has nurtured generations of
            entrepreneurs, professionals, public servants and business leaders,
            creating a tradition of academic excellence and leadership.

          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">

            Situated in the heart of Mumbai, the college offers an environment
            where innovation, culture and service thrive together. The Rotaract
            Club proudly continues this legacy by empowering students to lead
            meaningful projects and create lasting social impact.

          </p>

          {/* Highlights */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <GraduationCap
                className="mb-3 text-yellow-500"
                size={28}
              />

              <h3 className="font-bold">

                Established

              </h3>

              <p className="mt-2 text-slate-500 dark:text-slate-400">

                1913

              </p>

            </div>

            <div className="rounded-2xl border p-5">

              <GraduationCap
                className="mb-3 text-yellow-500"
                size={28}
              />

              <h3 className="font-bold">

                Legacy

              </h3>

              <p className="mt-2 text-slate-500 dark:text-slate-400">

                One of India's oldest commerce colleges.

              </p>

            </div>

          </div>

          {/* Button */}

          <Link
            href="https://sydenham.ac.in"
            target="_blank"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
          >
            Visit College Website

            <ExternalLink size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}