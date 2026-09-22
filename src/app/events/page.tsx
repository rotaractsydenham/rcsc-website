import { events } from "@/content/events";

import EventCard from "@/components/home/EventCard";
import PageHero from "@/components/shared/PageHero";

import HorizontalSnap from "@/components/ui/HorizontalSnap";
import SnapItem from "@/components/ui/SnapItem";

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

        <div className="mx-auto max-w-7xl lg:px-6">

          <HorizontalSnap>

            {events.map((event) => (

              <SnapItem key={event.id}>

                <EventCard
                  {...event}
                />

              </SnapItem>

            ))}

          </HorizontalSnap>

        </div>

      </main>
    </>
  );
}