import PageHero from "@/components/shared/PageHero";
import FeaturedAlbum from "@/components/gallery/FeaturedAlbum";
import AlbumCard from "@/components/gallery/AlbumCard";

import { albums } from "@/content/gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="GALLERY"
        title="Moments That Matter"
        subtitle="Explore our journey through projects, events and unforgettable memories."
        image="/images/banners/gallery.jpg"
      />

      <main className="pt-20 pb-48">

        <div className="mx-auto max-w-7xl px-6">

          <FeaturedAlbum album={albums[0]} />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                album={album}
              />
            ))}

          </div>

        </div>

      </main>
    </>
  );
}