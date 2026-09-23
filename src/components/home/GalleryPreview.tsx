import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";

import { albums } from "@/content/gallery";

export default function GalleryPreview() {
  const featuredAlbum = albums[0];
  const previewAlbums = albums.slice(1, 4);

  if (!featuredAlbum) return null;

  return (
    <section className="relative overflow-hidden bg-white pb-48 pt-20 dark:bg-slate-950 sm:pb-40 sm:pt-24">

      {/* =====================================================
          TOP TRANSITION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent dark:from-slate-950" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-yellow-400/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">

              <span className="h-[2px] w-10 rounded-full bg-yellow-400 sm:w-14" />

              <span className="text-xs font-bold uppercase tracking-[0.4em] text-yellow-500 sm:text-sm sm:tracking-[0.45em]">
                Gallery
              </span>

            </div>

            {/* Heading */}
            <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Moments That Stay
              <span className="block text-yellow-500">
                With Us
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:mt-6 sm:text-base sm:leading-8 dark:text-slate-400">
              A collection of moments, memories and milestones from the
              journey of the Rotaract Club of Sydenham College.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/gallery"
            className="
              group hidden
              shrink-0
              items-center
              gap-3
              rounded-full
              border
              border-yellow-400
              px-5
              py-2.5
              text-xs
              font-bold
              uppercase
              tracking-[0.14em]
              text-slate-900
              transition-all
              duration-300
              hover:bg-yellow-400
              sm:inline-flex
              dark:text-white
            "
          >
            Explore Gallery

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-yellow-400
                text-slate-950
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowUpRight size={15} />
            </span>
          </Link>

        </div>

        {/* =====================================================
            DESKTOP GALLERY
        ===================================================== */}

        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4">

          {/* Featured Album */}
          <Link
            href={`/gallery/${featuredAlbum.slug}`}
            className="
              group relative col-span-8 block overflow-hidden
              rounded-[2rem]
              border-2 border-yellow-400
              shadow-sm
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            <div className="relative h-[520px]">

              <Image
                src={featuredAlbum.cover}
                alt={featuredAlbum.title}
                fill
                sizes="(max-width: 1280px) 66vw, 800px"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 text-white lg:p-10">

                <div className="mb-4 flex items-center gap-3">

                  <Images
                    size={17}
                    className="text-yellow-400"
                  />

                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-400">
                    Featured Memories
                  </span>

                </div>

                <h3 className="max-w-2xl text-3xl font-black leading-tight lg:text-4xl">
                  {featuredAlbum.title}
                </h3>

                <p className="mt-4 line-clamp-2 max-w-xl text-sm leading-7 text-slate-200 lg:text-base">
                  {featuredAlbum.description}
                </p>

                {/* Explore */}
                <div className="mt-6 flex items-center gap-3">

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                    Explore
                  </span>

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-yellow-400
                      text-slate-950
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowUpRight size={17} />
                  </span>

                </div>

              </div>

            </div>
          </Link>

          {/* Side Albums */}
          <div className="col-span-4 grid grid-rows-2 gap-4">

            {previewAlbums.slice(0, 2).map((album) => (
              <Link
                key={album.slug}
                href={`/gallery/${album.slug}`}
                className="
                  group relative block overflow-hidden
                  rounded-[2rem]
                  border border-slate-200
                  dark:border-slate-800
                "
              >

                <div className="relative h-full min-h-[252px]">

                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    sizes="(max-width: 1280px) 33vw, 400px"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
                      Album
                    </p>

                    <h3 className="mt-2 line-clamp-2 text-xl font-black leading-tight">
                      {album.title}
                    </h3>

                    <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-slate-950 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight size={16} />
                    </div>

                  </div>

                </div>

              </Link>
            ))}

          </div>
        </div>

        {/* =====================================================
            MOBILE GALLERY
        ===================================================== */}

        <div className="lg:hidden">

          {/* Featured Album */}
          <Link
            href={`/gallery/${featuredAlbum.slug}`}
            className="
              group relative block overflow-hidden
              rounded-[1.75rem]
              border-2 border-yellow-400
              shadow-sm
              transition-all duration-500
              hover:shadow-xl
            "
          >
            <div className="relative h-[360px] sm:h-[400px]">

              <Image
                src={featuredAlbum.cover}
                alt={featuredAlbum.title}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">

                <div className="flex items-center gap-2.5">

                  <Images
                    size={15}
                    className="text-yellow-400"
                  />

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
                    Featured Memories
                  </p>

                </div>

                <h3 className="mt-3 line-clamp-2 text-2xl font-black leading-tight sm:text-3xl">
                  {featuredAlbum.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-200">
                  {featuredAlbum.description}
                </p>

                <div className="mt-5 flex items-center gap-3">

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                    Explore
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-yellow-400
                      text-slate-950
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>

                </div>

              </div>

            </div>
          </Link>

          {/* Swipeable Albums */}
          {previewAlbums.length > 0 && (
            <div
              className="
                -mx-5
                mt-4
                flex
                snap-x
                snap-mandatory
                gap-2
                overflow-x-auto
                px-5
                pb-3

                [-ms-overflow-style:none]
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >

              {previewAlbums.map((album) => (
                <Link
                  key={album.slug}
                  href={`/gallery/${album.slug}`}
                  className="
                    group
                    relative
                    h-[220px]
                    w-[calc(100vw-40px)]
                    shrink-0
                    snap-center
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-slate-200
                    dark:border-slate-800
                  "
                >

                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    sizes="(max-width: 768px) calc(100vw - 40px)"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
                      Album
                    </p>

                    <h3 className="mt-2 line-clamp-2 text-xl font-black leading-tight">
                      {album.title}
                    </h3>

                    <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-slate-950 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight size={16} />
                    </div>

                  </div>

                </Link>
              ))}

            </div>
          )}

          {/* Mobile Gallery CTA */}
          <div className="mt-5 flex justify-center">

            <Link
              href="/gallery"
              className="
                group inline-flex
                items-center gap-2.5
                rounded-full
                border border-yellow-400
                px-5 py-2.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-950
                transition-all
                duration-300
                hover:bg-yellow-400
                dark:text-white
              "
            >
              Explore Gallery

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-400
                  text-slate-950
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowUpRight size={14} />
              </span>

            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

    </section>
  );
}