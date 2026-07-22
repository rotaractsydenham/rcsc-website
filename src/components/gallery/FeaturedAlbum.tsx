import Image from "next/image";
import Link from "next/link";

import { Album } from "@/content/gallery";

interface Props {
  album: Album;
}

const radius = "rounded-[2rem]";

export default function FeaturedAlbum({
  album,
}: Props) {
  return (
    <section className="mb-24">

      {/* Outer Border */}

      <div
        className={`group relative ${radius} border-2 border-yellow-400 bg-yellow-400 p-[2px] shadow-2xl transition-all duration-500 hover:shadow-yellow-500/10`}
      >

        {/* Inner Card */}

        <div
          className={`relative h-[550px] overflow-hidden ${radius} bg-slate-950`}
        >

          {/* Background Image */}

          <Image
          
            src={album.cover}
            alt={album.title}
            fill
            priority
            sizes="(max-width:768px) 100vw, 1200px"
            className="scale-105 object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]">    
            </Image>

            {/* Base Overlay */}

            <div className="absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:bg-black/15" />

            {/* Gradient */}

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-[28%] to-transparent to-[60%] transition-opacity duration-700 group-hover:opacity-80" />

          {/* Content */}

          <div className="absolute inset-0 z-10 flex items-center">

            <div className="max-w-xl px-14 text-white">

              <span className="inline-block text-sm font-bold uppercase tracking-[0.45em] text-yellow-400">
                Featured Album
              </span>

              <h2 className="mt-5 text-5xl font-black leading-tight lg:text-6xl">
                {album.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-200">
                {album.description}
              </p>

              <Link
                href={`/gallery/${album.slug}`}
                className="mt-10 inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
              >
                View Album →
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}