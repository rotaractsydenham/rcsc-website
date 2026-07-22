import Image from "next/image";
import Link from "next/link";

import { Album } from "@/content/gallery";

interface Props {
  album: Album;
}

export default function AlbumCard({
  album,
}: Props) {
  return (
    <Link href={`/gallery/${album.slug}`}>

      <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">

        <div className="relative h-72 overflow-hidden">

          <Image
            src={album.cover}
            alt={album.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6">

            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase text-slate-900">
              {album.category}
            </span>

            <h3 className="mt-3 text-3xl font-bold text-white">
              {album.title}
            </h3>

          </div>

        </div>

        <div className="p-8">

          <p className="text-sm text-slate-400">
            {album.date}
          </p>

          <p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">
            {album.description}
          </p>

        </div>

      </article>

    </Link>
  );
}