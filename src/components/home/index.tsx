import Hero from "./Hero";
import Stats from "./Stats";
import AboutSection from "./AboutSection";
import UpcomingEvents from "./UpcomingEvents";
import PresidentMessage from "./PresidentMessage";
import FeaturedProjects from "./FeaturedProjects";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <UpcomingEvents />
      <PresidentMessage />
      <FeaturedProjects />
    </>
  );
}