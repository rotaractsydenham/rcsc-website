import EventCard from "./EventCard";
import { highlightEvents } from "@/content/highlights/events";
import HorizontalSnap from "@/components/ui/HorizontalSnap";
import SnapItem from "@/components/ui/SnapItem";

export default function UpcomingEvents() {
  const featuredEvents = highlightEvents.filter(
    (event) => event.featured
  );

  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-yellow-400" />

            <p className="text-sm font-bold uppercase tracking-[0.4em] text-yellow-500">
              Upcoming Events
            </p>

            <span className="h-[2px] w-10 rounded-full bg-yellow-400" />
          </div>

          <h2 className="text-4xl font-black sm:text-5xl">
            Join Our Next Events
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
            Discover what's happening at RCSC and be part of our
            next experiences, initiatives and moments together.
          </p>

        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <HorizontalSnap>
          {featuredEvents.map((event) => (
            <SnapItem key={event.id}>
              <EventCard {...event} />
            </SnapItem>
          ))}
        </HorizontalSnap>
      </div>

    </section>
  );
}