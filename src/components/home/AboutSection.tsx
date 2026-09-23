import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Globe,
  HeartHandshake,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Leadership",
    description: "Develop confident leaders through hands-on experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Service",
    description: "Create meaningful impact in the community.",
  },
  {
    icon: Briefcase,
    title: "Professional Growth",
    description: "Build skills for careers and entrepreneurship.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with Rotaractors around the world.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Main About */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* Image */}
          <div className="relative order-2 lg:order-1">

            {/* Decorative frame */}
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] border-2 border-yellow-400/30" />

            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
              <Image
                src="/images/about/about.jpg"
                alt="Rotaract Club of Sydenham College"
                width={900}
                height={650}
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Floating year */}
              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-black/40 px-5 py-4 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                  Chartered
                </p>

                <p className="mt-1 text-2xl font-black text-white">
                  2020
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-12 rounded-full bg-yellow-400" />

              <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Young Leaders.
              <br />
              <span className="text-yellow-500">
                Lasting Impact.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Chartered in 2020 under Rotary International District 3141,
              the Rotaract Club of Sydenham College empowers young people
              through leadership, community service, professional development,
              and fellowship.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-400">
              Our members believe in creating meaningful change while
              developing lifelong friendships and leadership skills.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-yellow-400 px-6 py-3.5 font-semibold text-slate-900 transition-all duration-300 hover:bg-yellow-400 dark:text-white"
              >
                Discover RCSC

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-slate-900 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>

          </div>
        </div>

        {/* Feature Heading */}
        <div className="mt-28 mb-10 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.4em] text-yellow-500">
            What We Stand For
          </p>

          <h3 className="mt-4 text-3xl font-black sm:text-4xl">
            More Than a Club
          </h3>

        </div>

        {/* Feature Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >

                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-slate-200/70 dark:text-slate-800">
                  0{features.indexOf(feature) + 1}
                </span>

                {/* Icon */}
                <div className="relative mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-500 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-slate-900">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 h-[2px] w-8 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-16" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}