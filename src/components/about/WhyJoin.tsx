import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Develop leadership and communication skills.",
  "Work on impactful community service projects.",
  "Build lifelong friendships and professional networks.",
  "Represent the club at district and international events.",
  "Gain hands-on experience in planning and managing events.",
  "Become part of the global Rotary family.",
];

export default function WhyJoin() {
  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="mb-5 flex items-center justify-center gap-4">

          <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

          <span className="text-center text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
            WHY JOIN RCSC
          </span>

          <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

        </div>

        <h2 className="mx-auto max-w-2xl text-center text-4xl font-black leading-tight md:text-6xl">
          Your Journey Starts Here
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-slate-600 dark:text-slate-300">
          Joining the Rotaract Club of Sydenham College is more than becoming a
          member of a student organisation. It is an opportunity to lead,
          serve, grow and create memories that last a lifetime.
        </p>

        {/* Benefits */}

        <div className="mx-auto mt-14 max-w-2xl space-y-5">

          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-4 rounded-2xl border bg-white p-5 dark:bg-slate-900"
            >
              <CheckCircle2
                size={22}
                className="mt-1 shrink-0 text-yellow-500"
              />

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                {benefit}
              </p>

            </div>
          ))}

        </div>

        {/* Button */}

        <div className="mt-14 flex justify-center">

          <Link
            href="/join"
            className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
          >
            Become a Member

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>
    </section>
  );
}