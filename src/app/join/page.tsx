import PageHero from "@/components/shared/PageHero";
import Benefits from "@/components/join/Benefits";
import Journey from "@/components/join/Journey";
import Eligibility from "@/components/join/Eligibility";
import ApplyCTA from "@/components/join/ApplyCTA";

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="JOIN RCSC"
        title="Lead. Serve. Inspire."
        subtitle="Become part of a community that empowers young leaders through service, fellowship and professional development."
        image="/images/banners/join.jpg"
      />

      <main className="pt-24 pb-48">

        <Benefits />

        <Journey />

        <Eligibility />

        <ApplyCTA />

      </main>
    </>
  );
}