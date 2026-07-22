import Link from "next/link";

export default function ApplyCTA() {
  return (
    <main className="pt-10 pb-10">

      <div className="mx-auto max-w-4xl rounded-3xl bg-yellow-400 px-10 py-20 text-center">

        <h2 className="text-5xl font-black text-slate-900">
          Ready to Become a Rotaractor?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-800">
          Begin your journey of leadership, service and lifelong friendships.
        </p>

        <Link
          href="#"
          className="mt-10 inline-block rounded-xl bg-slate-900 px-10 py-4 font-semibold text-white transition hover:bg-black"
        >
          Apply Now
        </Link>

      </div>

    </main>
  );
}