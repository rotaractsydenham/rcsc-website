import PageHero from "@/components/shared/PageHero";
import AboutCollege from "@/components/about/AboutCollege";
import AboutClub from "@/components/about/AboutClub";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import AvenuesSection from "@/components/about/AvenuesSection";
import RotaryConnection from "@/components/about/RotaryConnection";
import WhyJoin from "@/components/about/WhyJoin";
import ClosingQuote from "@/components/about/ClosingQuote";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <PageHero eyebrow="ABOUT" title="More Than a Club" subtitle="A family of young leaders creating lasting impact through service, fellowship and leadership." image="/images/banners/about.jpg" />
      <AboutCollege />
      <AboutClub />
      <VisionMission />
      <CoreValues />
      <AvenuesSection />
      <RotaryConnection />
      <WhyJoin />
      <ClosingQuote />
    </main>
  );
}
