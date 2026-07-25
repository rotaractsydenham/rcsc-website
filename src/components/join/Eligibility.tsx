import { eligibility } from "@/content/join";

export default function Eligibility() {
  return (
    <section className="py-10">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-16 text-center text-4xl font-black">
          Eligibility
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {eligibility.map((item) => (

            <div
              key={item}
              className="rounded-2xl border p-8 text-lg font-medium"
            >
              ✓ {item}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}