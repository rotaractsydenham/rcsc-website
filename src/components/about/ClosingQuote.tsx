import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export default function ClosingQuote() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

        {/* Eyebrow */}

        <div className="mb-6 flex items-center gap-4">

          <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

          <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-400">
            JOIN THE JOURNEY
          </span>

          <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

        </div>

        {/* Heading */}

        <h2 className="text-5xl font-black leading-tight md:text-6xl">

          Together, We Lead.
          <br />
          Together, We Serve.

        </h2>

        {/* Quote */}

        <p className="mt-10 max-w-3xl text-xl leading-10 text-slate-300">

          "Every great journey begins with a single step. At the Rotaract Club
          of Sydenham College, that step becomes a lifetime of leadership,
          friendship and meaningful service."

        </p>

        {/* Griffin */}

        <div className="my-14">

          <Image
            src="/logo/logo-dark.png"
            alt="RCSC Logo"
            width={112}
            height={112}
            className="mx-auto opacity-90"
            />

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-5">

          <Link
            href="/join"
            className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
          >
            Become a Member

            <ArrowRight size={18} />

          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Contact Us

            <Mail size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}