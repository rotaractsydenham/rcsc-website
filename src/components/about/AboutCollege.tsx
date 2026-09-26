import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GraduationCap } from "lucide-react";

export default function AboutCollege() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl bg-yellow-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <Image src="/images/about/sydenham-college.jpg" alt="Sydenham College" width={900} height={700} className="aspect-[4/3] w-full rounded-[1.6rem] object-cover" />
          </div>
          <div className="absolute -bottom-5 right-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-500">Established</p>
            <p className="mt-1 text-2xl font-black">1913</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="mb-5 flex items-center gap-4"><span className="h-[2px] w-12 rounded-full bg-yellow-400" /><span className="text-xs font-extrabold uppercase tracking-[0.4em] text-yellow-500 sm:text-sm">Sydenham College</span></div>
          <h2 className="max-w-2xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">A Legacy of Excellence</h2>
          <p className="mt-7 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">Established in <strong>1913</strong>, Sydenham College of Commerce and Economics is one of India's oldest and most prestigious commerce institutions. For over a century, it has nurtured generations of entrepreneurs, professionals, public servants and business leaders, creating a tradition of academic excellence and leadership.</p>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">Situated in the heart of Mumbai, the college offers an environment where innovation, culture and service thrive together. The Rotaract Club proudly continues this legacy by empowering students to lead meaningful projects and create lasting social impact.</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900"><GraduationCap className="mb-3 text-yellow-500" size={25} /><p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Legacy</p><p className="mt-1 font-bold">One of India's oldest commerce colleges.</p></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900"><GraduationCap className="mb-3 text-yellow-500" size={25} /><p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Community</p><p className="mt-1 font-bold">A space where leadership and service grow together.</p></div>
          </div>
          <Link href="https://sydenham.ac.in" target="_blank" className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-6 py-3.5 font-bold text-slate-900 transition hover:bg-yellow-300">Visit College Website <ExternalLink size={17} /></Link>
        </div>
      </div>
    </section>
  );
}
