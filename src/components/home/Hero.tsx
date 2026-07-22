import { club } from "@/content/club";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
    
    <Image
  src="/images/hero/hero.jpg"
  alt="Rotaract Club of Sydenham College"
  fill
  priority
  className="object-cover"
/>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/10" />

      {/* Decorative Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
          {club.district}
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
          {club.name}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
          {club.tagline}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300">
            Join Us
          </button>

          <button className="rounded-xl border border-white px-8 py-4 transition hover:bg-white hover:text-slate-900">
            Explore Projects
          </button>

        </div>

      </div>

    </section>
  )
}