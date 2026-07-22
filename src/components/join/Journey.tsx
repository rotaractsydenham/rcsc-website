import { membershipJourney } from "@/content/join";

export default function Journey() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-16 text-center text-4xl font-black">
          Your Journey
        </h2>

        <div className="space-y-6">

          {membershipJourney.map((step, index) => (

            <div
              key={step}
              className="flex items-center gap-6 rounded-2xl border p-6"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 font-bold text-slate-900">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}