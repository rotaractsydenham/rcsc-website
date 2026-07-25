import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Images } from "lucide-react";

import { albums } from "@/content/gallery";
import PageHero from "@/components/shared/PageHero";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AlbumPage({
  params,
}: Props) {
  const { slug } = await params;

  const album = albums.find(
    (item) => item.slug === slug
  );

  if (!album) notFound();

  return (
    <>
      <PageHero
        eyebrow="GALLERY"
        title={album.title}
        subtitle={album.description}
        image={album.cover}
      />

      <main className="pt-20 pb-40">

        <div className="mx-auto max-w-7xl px-6">

          {/* Back */}

          <Link
            href="/gallery"
            className="mb-12 inline-flex items-center gap-3 rounded-xl border px-6 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Back to Gallery
          </Link>

          {/* Details */}

          <div className="mb-16 flex flex-wrap gap-8">

            <div className="flex items-center gap-3 rounded-full border px-5 py-3">

              <Calendar
                size={18}
                className="text-yellow-500"
              />

              <span>{album.date}</span>

            </div>

            <div className="flex items-center gap-3 rounded-full border px-5 py-3">

              <Images
                size={18}
                className="text-yellow-500"
              />

              <span>

                {album.images.length} Photos

              </span>

            </div>

            <div className="rounded-full border px-5 py-3">

              {album.category}

            </div>

          </div>

          {/* Images */}

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">

            {album.images.map((image, index) => (

              <div
                key={index}
                className="mb-6 break-inside-avoid overflow-hidden rounded-3xl"
              >

                <Image
                  src={image}
                  alt={`${album.title} ${index + 1}`}
                  width={700}
                  height={700}
                  className="w-full rounded-3xl object-cover transition duration-500 hover:scale-105"
                />

              </div>

            ))}

          </div>

        </div>

      </main>
    </>
  );
}