import Hero from "./Hero";
import AboutSection from "./AboutSection";
import PresidentMessage from "./PresidentMessage";
import FeaturedProjects from "./FeaturedProjects";
import RCSCHighlights from "@/components/home/RCSCHighlights";
export default function HomePage() {
  return (
    <>
      <Hero />
      <RCSCHighlights />
      <AboutSection />
      <PresidentMessage />
      <FeaturedProjects />
    </>
  );
}