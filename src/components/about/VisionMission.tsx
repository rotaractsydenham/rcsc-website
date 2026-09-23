import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 flex items-center justify-center gap-4"><span className="h-[2px] w-12 rounded-full bg-yellow-400" /><span className="text-xs font-extrabold uppercase tracking-[0.4em] text-yellow-500 sm:text-sm">Our Purpose</span><span className="h-[2px] w-12 rounded-full bg-yellow-400" /></div>
          <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl">Vision & Mission</h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">Guided by service, driven by leadership and united by fellowship.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900"><Eye size={30} /></div><p className="text-xs font-extrabold uppercase tracking-[0.3em] text-yellow-500">Our Vision</p><h3 className="mt-2 text-3xl font-black sm:text-4xl">Vision</h3><p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">To empower young leaders to create meaningful and sustainable change by fostering service, integrity, innovation and lifelong fellowship within the community.</p></div>
          <div className="group rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl sm:p-10"><div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900"><Target size={30} /></div><p className="text-xs font-extrabold uppercase tracking-[0.3em] text-yellow-400">Our Mission</p><h3 className="mt-2 text-3xl font-black sm:text-4xl">Mission</h3><p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">To inspire students through impactful projects, professional development, leadership opportunities and collaborative service, enabling them to become responsible citizens and compassionate leaders.</p></div>
        </div>
      </div>
    </section>
  );
}
