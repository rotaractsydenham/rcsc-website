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
    <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-4"><span className="h-[2px] w-12 rounded-full bg-yellow-400" /><span className="text-xs font-extrabold uppercase tracking-[0.4em] text-yellow-500 sm:text-sm">Why Join RCSC</span></div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Your Journey Starts Here</h2>
            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">Joining the Rotaract Club of Sydenham College is more than becoming a member of a student organisation. It is an opportunity to lead, serve, grow and create memories that last a lifetime.</p>
            <Link href="/join" className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-6 py-3.5 font-bold text-slate-900 transition hover:bg-yellow-300">Become a Member <ArrowRight size={17} /></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, index) => <div key={benefit} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6"><div className="mb-5 flex items-center justify-between"><span className="text-xs font-black tracking-[0.2em] text-slate-400">0{index + 1}</span><CheckCircle2 size={22} className="text-yellow-500" /></div><p className="font-semibold leading-7">{benefit}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
