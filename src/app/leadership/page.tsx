import PageHero from "@/components/shared/PageHero";
import LeadershipTabs from "@/components/leadership/LeadershipTabs";

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="LEADERSHIP"
        title="Meet the Team"
        subtitle="Driven by service. United by purpose."
        image="/images/banners/leadership.jpg"
      />

      <main className="pt-20 pb-40">
        <div className="mx-auto max-w-7xl">
          <LeadershipTabs />
        </div>
      </main>
    </>
  );
}