import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export default function AboutClub() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[130px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12">
        <div>
          <div className="mb-5 flex items-center gap-4"><span className="h-[2px] w-12 rounded-full bg-yellow-400" /><span className="text-xs font-extrabold uppercase tracking-[0.4em] text-yellow-400 sm:text-sm">About RCSC</span></div>
          <h2 className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">Young Leaders.<br /><span className="text-yellow-400">Lasting Impact.</span></h2>
          <p className="mt-7 text-base leading-8 text-slate-300 sm:text-lg">Chartered in <strong>2020</strong>, the Rotaract Club of Sydenham College is a student-led organisation sponsored by the <strong>Rotary Club of Bombay</strong> and operating under <strong>Rotary International District 3141</strong>.</p>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">We believe that leadership is built through service. Every project, event and initiative is an opportunity for students to grow, collaborate and create meaningful change within the college and the wider community.</p>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">From environmental initiatives and community service projects to professional development programmes and international collaborations, our members strive to leave a positive impact wherever they serve.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/projects" className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-6 py-3.5 font-bold text-slate-900 transition hover:bg-yellow-300">Explore Projects <ArrowRight size={17} /></Link>
            <Link href="/leadership" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 font-bold transition hover:bg-white/10">Meet the Leadership <ArrowRight size={17} /></Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-yellow-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">
          <Image src="/images/about/rcsc.jpg" alt="Rotaract Club of Sydenham College" width={900} height={700} className="aspect-[4/3] w-full rounded-[1.6rem] object-cover" /></div>
          <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur-md"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-slate-900"><Users size={20} /></div><div><p className="text-xs uppercase tracking-[0.15em] text-slate-400">Since</p><p className="font-black">2020</p></div></div>
        </div>
      </div>
    </section>
  );
}
