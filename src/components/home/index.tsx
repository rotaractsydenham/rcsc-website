import Hero from "./Hero";
import RCSCHighlights from "@/components/home/RCSCHighlights";
import AboutSection from "./AboutSection";
import PresidentMessage from "./PresidentMessage";
import FeaturedProjects from "./FeaturedProjects";
import LegacyShowcase from "@/components/home/LegacyPreview/LegacyShowcase";
import GalleryPreview from "./GalleryPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RCSCHighlights />
      <AboutSection />
      <PresidentMessage />
      <FeaturedProjects />
      <LegacyShowcase />
      <GalleryPreview />
    </>
  );
}
