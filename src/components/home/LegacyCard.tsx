import Image from "next/image";
import Link from "next/link";
import { LegacyYear } from "@/content/legacy";

interface Props {
  item: LegacyYear;
}

export default function LegacyCard({ item }: Props) {
  return (
    <Link href={`/legacy/${item.slug}`}>
      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900">

        <Image
          src={item.coverImage}
          alt={item.year}
          width={700}
          height={450}
          className="h-64 w-full object-cover"
        />

        <div className="p-6">

          <p className="text-sm text-yellow-500 font-semibold">
            {item.year}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {item.theme}
          </h3>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {item.message}
          </p>

        </div>

      </div>
    </Link>
  );
}