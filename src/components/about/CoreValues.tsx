import { Handshake, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";

const values = [
  { icon: Users, title: "Leadership", description: "We empower students to lead with confidence, responsibility and purpose." },
  { icon: Heart, title: "Service", description: "Service is at the heart of everything we do, creating meaningful impact in our communities." },
  { icon: Handshake, title: "Fellowship", description: "Friendships built through Rotaract become lifelong connections beyond college." },
  { icon: ShieldCheck, title: "Integrity", description: "We uphold honesty, accountability and respect in every action we take." },
  { icon: Sparkles, title: "Innovation", description: "We embrace creativity and fresh ideas to solve challenges and inspire change." },
];

export default function CoreValues() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"><div className="mb-5 flex items-center justify-center gap-4"><span className="h-[2px] w-12 rounded-full bg-yellow-400" /><span className="text-xs font-extrabold uppercase tracking-[0.4em] text-yellow-500 sm:text-sm">Our Values</span><span className="h-[2px] w-12 rounded-full bg-yellow-400" /></div><h2 className="text-4xl font-black sm:text-5xl lg:text-6xl">Principles That Guide Us</h2><p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">Every project, initiative and decision is rooted in these values.</p></div>
        <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-5 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {values.map((value) => { const Icon = value.icon; return <article key={value.title} className="w-[82vw] shrink-0 snap-start rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:w-[45vw] lg:w-auto lg:p-6"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900"><Icon size={27} /></div><h3 className="text-2xl font-black">{value.title}</h3><p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{value.description}</p></article>; })}
        </div>
      </div>
    </section>
  );
}
