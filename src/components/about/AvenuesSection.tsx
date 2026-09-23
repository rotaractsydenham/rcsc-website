import Link from "next/link";
import { ArrowRight, Briefcase, Globe, HeartHandshake, Trophy, Users } from "lucide-react";

const avenues = [
  { title: "Club Service", icon: Users, description: "Building fellowship, strengthening teamwork and creating memorable experiences within the club.", href: "/projects" },
  { title: "Community Service", icon: HeartHandshake, description: "Creating meaningful impact through projects that serve society and promote sustainable development.", href: "/projects" },
  { title: "Professional Development", icon: Briefcase, description: "Equipping members with leadership, communication and career-building opportunities.", href: "/projects" },
  { title: "International Service", icon: Globe, description: "Building friendships beyond borders while promoting cultural understanding and global collaboration.", href: "/projects" },
  { title: "Sports", icon: Trophy, description: "Promoting teamwork, fitness and sportsmanship through friendly competitions and district events.", href: "/projects" },
];

export default function AvenuesSection() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 dark:bg-slate-950 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"><div className="mb-5 flex items-center justify-center gap-4"><span className="h-[2px] w-12 rounded-full bg-yellow-400" /><span className="text-xs font-extrabold uppercase tracking-[0.4em] text-yellow-500 sm:text-sm">Our Avenues</span><span className="h-[2px] w-12 rounded-full bg-yellow-400" /></div><h2 className="text-4xl font-black sm:text-5xl lg:text-6xl">Five Avenues, One Purpose</h2><p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">Every initiative we undertake is guided by one of the five avenues of service, ensuring a balanced approach to leadership, professional growth and community impact.</p></div>
        <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-5 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-5">
          {avenues.map((avenue) => { const Icon = avenue.icon; return <Link key={avenue.title} href={avenue.href} className="group w-[82vw] shrink-0 snap-start rounded-[1.75rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 md:w-auto md:p-7"><div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900"><Icon size={27} /></div><h3 className="text-2xl font-black">{avenue.title}</h3><p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{avenue.description}</p><div className="mt-7 flex items-center gap-2 text-sm font-bold text-yellow-500">Learn More <ArrowRight size={17} className="transition group-hover:translate-x-1" /></div></Link>; })}
        </div>
      </div>
    </section>
  );
}
