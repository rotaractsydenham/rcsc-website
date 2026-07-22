import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">

      <div className="max-w-3xl text-center">

        <p className="text-lg font-bold uppercase tracking-[0.6em] text-yellow-500">
          ERROR 404
        </p>

        <h1 className="mt-6 text-8xl font-black">
          Lost?
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-500 dark:text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
         OR...
          You are ready to Join Rotaract!
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-5">

          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
          >
            <Home size={20} />
            Back Home
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center gap-3 rounded-xl border px-8 py-4 font-semibold transition hover:border-yellow-400"
          >
            <Compass size={20} />
            Explore Events
          </Link>

        </div>

      </div>

    </main>
  );
}