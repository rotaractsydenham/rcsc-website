import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Images,
} from "lucide-react";

import { Album } from "@/content/gallery";

interface Props {
  album: Album;
}

export default function FeaturedAlbum({ album }: Props) {
  return (
    <section className="mb-20">
      <div className="group relative isolate overflow-hidden rounded-[2rem] border-2 border-yellow-400 bg-slate-950 shadow-2xl">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={album.cover}
            alt={album.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover transition duration-1000 ease-out group-hover:scale-105"
          />
        </div>

        {/* Overall Darkening */}
        <div className="absolute inset-0 z-[1] bg-black/25" />

        {/* Main Horizontal Gradient */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />

        {/* Strong Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 z-[3] h-[55%] bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[560px] items-end p-7 sm:p-10 lg:min-h-[580px] lg:items-center lg:p-16">
          <div className="max-w-2xl text-white">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 rounded-full bg-yellow-400" />

              <span className="text-sm font-bold uppercase tracking-[0.4em] text-yellow-400">
                Featured Album
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-7xl">
              {album.title}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              {album.description}
            </p>

            {/* Meta */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CalendarDays
                  size={16}
                  className="text-yellow-400"
                />
                {album.date}
              </span>

              <span className="inline-flex items-center gap-2">
                <Images
                  size={16}
                  className="text-yellow-400"
                />
                {album.images.length} Photos
              </span>

              <span className="text-yellow-400">
                {album.category}
              </span>
            </div>

            {/* CTA */}
            <Link
              href={`/gallery/${album.slug}`}
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-900 transition-all duration-300 hover:gap-4 hover:bg-yellow-300"
            >
              Explore Album
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute bottom-6 right-6 z-[4] hidden h-20 w-20 rounded-full border border-yellow-400/30 sm:block" />

        <div className="pointer-events-none absolute bottom-10 right-10 z-[4] hidden h-12 w-12 rounded-full bg-yellow-400/10 sm:block" />

      </div>
    </section>
  );
}