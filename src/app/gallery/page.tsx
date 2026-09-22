import PageHero from "@/components/shared/PageHero";
import FeaturedAlbum from "@/components/gallery/FeaturedAlbum";
import AlbumCard from "@/components/gallery/AlbumCard";

import { albums } from "@/content/gallery";
import HorizontalSnap from "@/components/ui/HorizontalSnap";
import SnapItem from "@/components/ui/SnapItem";

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">

          {/* Featured */}
          <FeaturedAlbum album={albums[0]} />

          {/* Album Collection */}
          <section>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-[2px] w-10 rounded-full bg-yellow-400" />

                  <span className="text-sm font-bold uppercase tracking-[0.4em] text-yellow-500">
                    OUR MEMORIES
                  </span>
                </div>

                <h2 className="text-4xl font-black md:text-5xl">
                  Explore the Albums
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-right">
                A collection of moments, milestones and memories from our
                journey together.
              </p>
            </div>

            <HorizontalSnap>
              {albums.map((album) => (
                <SnapItem key={album.id}>
                  <AlbumCard album={album} />
                </SnapItem>
              ))}
            </HorizontalSnap>
          </section>

        </div>
      </main>
    </>
  );
}