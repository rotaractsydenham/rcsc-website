import { club } from "@/content/club";

export default function VisionMission() {
  return (
    <section className="py-24">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        <div className="rounded-3xl border p-10">

          <h2 className="mb-6 text-3xl font-bold">
            Vision
          </h2>

          <p className="leading-8">
            {club.vision}
          </p>

        </div>

        <div className="rounded-3xl border p-10">

          <h2 className="mb-6 text-3xl font-bold">
            Mission
          </h2>

          <p className="leading-8">
            {club.mission}
          </p>

        </div>

      </div>

    </section>
  );
}