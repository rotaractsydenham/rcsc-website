import { events } from "@/content/events";
import EventCard from "@/components/home/EventCard";
import PageHero from "@/components/shared/PageHero";

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="EVENTS"
        title="Our Events"
        subtitle="Explore upcoming and past events organized by RCSC."
        image="/images/banners/events.jpg"
      />

      <main className="pt-20 pb-40">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event.id}
                {...event}
              />
            ))}
          </div>

        </div>
      </main>
    </>
  );
}