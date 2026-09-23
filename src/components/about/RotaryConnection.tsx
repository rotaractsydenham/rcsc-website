import { ArrowDown, Building2, Globe, GraduationCap, Landmark } from "lucide-react";

const hierarchy = [
  { title: "Rotary International", subtitle: "Global Network", icon: Globe, description: "A worldwide service organisation connecting over 1.2 million members dedicated to creating lasting change." },
  { title: "Rotary International District 3141", subtitle: "District", icon: Landmark, description: "Supporting Rotary and Rotaract clubs across Mumbai and neighbouring regions through leadership and collaboration." },
  { title: "Rotary Club of Bombay", subtitle: "Sponsor Club", icon: Building2, description: "The sponsoring Rotary club that mentors and supports the Rotaract Club of Sydenham College." },
  { title: "Rotaract Club of Sydenham College", subtitle: "Student Club", icon: GraduationCap, description: "Developing young leaders through fellowship, professional growth and impactful service projects." },
];

export default function RotaryConnection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"><div className="mb-5 flex items-center justify-center gap-4"><span className="h-[2px] w-12 rounded-full bg-yellow-400" /><span className="text-xs font-extrabold uppercase tracking-[0.4em] text-yellow-500 sm:text-sm">Rotary Family</span><span className="h-[2px] w-12 rounded-full bg-yellow-400" /></div><h2 className="text-4xl font-black sm:text-5xl lg:text-6xl">Connected Through Service</h2><p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">The Rotaract Club of Sydenham College is part of a global network of leaders dedicated to creating positive and lasting change.</p></div>
        <div className="space-y-3 sm:space-y-4">
          {hierarchy.map((item, index) => { const Icon = item.icon; return <div key={item.title}><article className={`rounded-[1.75rem] border p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-lg sm:p-6 ${index === hierarchy.length - 1 ? "border-yellow-400 bg-slate-950 text-white" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`}><div className="flex items-center gap-4 sm:gap-6"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 sm:h-16 sm:w-16"><Icon size={27} /></div><div className="min-w-0"><p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-yellow-500 sm:text-xs">{item.subtitle}</p><h3 className="mt-1 text-lg font-black sm:text-2xl">{item.title}</h3><p className={`mt-2 text-sm leading-6 sm:text-base ${index === hierarchy.length - 1 ? "text-slate-300" : "text-slate-600 dark:text-slate-300"}`}>{item.description}</p></div></div></article>{index !== hierarchy.length - 1 && <div className="flex justify-center py-1"><ArrowDown size={20} className="text-yellow-500" /></div>}</div>; })}
        </div>
      </div>
    </section>
  );
}
