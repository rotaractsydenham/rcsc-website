import HomePage from "@/components/home";
import LegacyShowcase from "@/components/home/LegacyPreview/LegacyShowcase";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <main>
      <HomePage />
      <LegacyShowcase />
      <GalleryPreview />
    </main>
  );
}