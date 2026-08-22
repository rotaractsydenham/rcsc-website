import Hero from "./Hero";
import AboutSection from "./AboutSection";
import UpcomingEvents from "./UpcomingEvents";
import PresidentMessage from "./PresidentMessage";
import FeaturedProjects from "./FeaturedProjects";
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <UpcomingEvents />
      <PresidentMessage />
      <FeaturedProjects />
    </>
  );
}