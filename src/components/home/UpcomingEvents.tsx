import EventCard from "./EventCard";
import { events } from "@/content/events";

export default function UpcomingEvents() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Upcoming Events
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Join Our Next Events
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {events
  .filter((event) => event.featured)
  .map((event) => (
    <EventCard
      key={event.id}
      {...event}
    />
  ))}
        </div>

      </div>
    </section>
  );
}