import Link from "next/link";
import Image from "next/image";
import { LegacyYear } from "@/content/legacy";

interface Props {
  legacy: LegacyYear;
}

export default function LegacyCard({ legacy }: Props) {
  return (
    <Link href={`/legacy/${legacy.slug}`}>
      <article className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900">

        <div className="relative h-64 overflow-hidden">

          <Image
            src={legacy.coverImage}
            alt={legacy.year}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">

            <p className="text-yellow-400 font-semibold">
              {legacy.year}
            </p>

            <h3 className="text-3xl font-bold">
              {legacy.theme}
            </h3>

          </div>

        </div>

        <div className="p-8">

          <p className="text-slate-600 dark:text-slate-300">
            {legacy.description}
          </p>

          <div className="mt-8 flex items-center justify-between">

            <span className="text-sm font-semibold">
              President
            </span>

            <span className="text-sm">
              {legacy.president}
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}