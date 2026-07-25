import { events } from "@/content/events";
import EventCard from "@/components/home/EventCard";
import PageHero from "@/components/shared/PageHero";
import HorizontalScroll from "@/components/ui/HorizontalSnap";

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

          <HorizontalScroll>
            {events.map((event) => (
              <EventCard
                key={event.id}
                {...event}
              />
            ))}
          </HorizontalScroll>

        </div>
      </main>
    </>
  );
}