import PageHero from "@/components/shared/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <PageHero
  eyebrow="GALLERY"
  title="Moments That Matter"
  subtitle="A glimpse into our journey of service and fellowship."
  image="/images/banners/gallery.jpg"
/>
      <main className="pt-20 pb-40">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryGrid />
        </div>
      </main>
    </>
  );
}