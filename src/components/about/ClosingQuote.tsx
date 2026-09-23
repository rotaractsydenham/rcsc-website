import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export default function ClosingQuote() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center sm:px-8">
        <div className="mb-6 flex items-center gap-4"><span className="h-[2px] w-12 rounded-full bg-yellow-400" /><span className="text-xs font-extrabold uppercase tracking-[0.4em] text-yellow-400 sm:text-sm">Join the Journey</span><span className="h-[2px] w-12 rounded-full bg-yellow-400" /></div>
        <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Together, We Lead.<br /><span className="text-yellow-400">Together, We Serve.</span></h2>
        <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-xl sm:leading-10">"Every great journey begins with a single step. At the Rotaract Club of Sydenham College, that step becomes a lifetime of leadership, friendship and meaningful service."</p>
        <div className="my-10 sm:my-12"><Image src="/logo/logo-dark.png" alt="RCSC Logo" width={96} height={96} className="mx-auto opacity-90" /></div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/join" className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-6 py-3.5 font-bold text-slate-900 transition hover:bg-yellow-300">Become a Member <ArrowRight size={17} /></Link><Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">Contact Us <Mail size={17} /></Link></div>
      </div>
    </section>
  );
}
