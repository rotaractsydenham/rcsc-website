import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";

import { albums } from "@/content/gallery";

export default function GalleryPreview() {
  const featuredAlbum = albums[0];
  const previewAlbums = albums.slice(1, 4);

  if (!featuredAlbum) return null;

  return (
    <section className=" mb-20 overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="mb-5 flex items-center gap-4">

              <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

              <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
                GALLERY
              </span>

            </div>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Moments That Stay With Us
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              A collection of moments, memories and milestones from the
              journey of the Rotaract Club of Sydenham College.
            </p>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex w-fit items-center gap-3 font-semibold text-yellow-500 transition hover:text-yellow-600"
          >
            Explore Gallery

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Desktop Creative Layout */}

        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6">

          {/* Featured Album */}

          <Link
            href={`/gallery/${featuredAlbum.slug}`}
            className="group relative col-span-8 block overflow-hidden rounded-[2rem]"
          >
            <div className="relative h-[540px]">

              <Image
                src={featuredAlbum.cover}
                alt={featuredAlbum.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-10 text-white">

                <div className="mb-4 flex items-center gap-3">

                  <Images
                    size={18}
                    className="text-yellow-400"
                  />

                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                    Featured Memories
                  </span>

                </div>

                <h3 className="max-w-2xl text-4xl font-black">
                  {featuredAlbum.title}
                </h3>

                <p className="mt-4 max-w-xl leading-8 text-slate-200">
                  {featuredAlbum.description}
                </p>

              </div>

            </div>
          </Link>

          {/* Side Albums */}

          <div className="col-span-4 flex flex-col gap-6">

            {previewAlbums.slice(0, 2).map((album) => (

              <Link
                key={album.slug}
                href={`/gallery/${album.slug}`}
                className="group relative flex-1 overflow-hidden rounded-[2rem]"
              >

                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 text-white">

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">
                    Album
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {album.title}
                  </h3>

                </div>

              </Link>

            ))}

          </div>

        </div>

        {/* Mobile Layout */}

        <div className="lg:hidden">

          {/* Featured */}

          <Link
            href={`/gallery/${featuredAlbum.slug}`}
            className="group relative block h-[480px] overflow-hidden rounded-[2rem]"
          >

            <Image
              src={featuredAlbum.cover}
              alt={featuredAlbum.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 text-white">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">
                Featured Memories
              </p>

              <h3 className="mt-3 text-3xl font-black">
                {featuredAlbum.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-200">
                {featuredAlbum.description}
              </p>

            </div>

          </Link>

          {/* Swipe Albums */}

          {previewAlbums.length > 0 && (

            <div
              className="
                no-scrollbar
                mt-5
                flex
                gap-2
                overflow-x-auto
                snap-x
                snap-mandatory
                pb-4
              "
            >

              {previewAlbums.map((album) => (

                <Link
                  key={album.slug}
                  href={`/gallery/${album.slug}`}
                  className="
                    relative
                    h-[260px]
                    w-full
                    shrink-0
                    snap-start
                    overflow-hidden
                    rounded-[2rem]
                  "
                >

                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">

                    <h3 className="text-xl font-black">
                      {album.title}
                    </h3>

                  </div>

                </Link>

              ))}

            </div>

          )}

        </div>


      </div>
    </section>
  );
}