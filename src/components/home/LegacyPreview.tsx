import { legacy } from "@/content/legacy";
import LegacyCard from "./LegacyCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function LegacyPreview() {
  return (
    <section className="bg-slate-50 pt-24 pb-48 dark:bg-slate-900">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Our Legacy"
          title="Building Leaders Since 2020"
          description="Every board leaves behind a story. Explore the journey of the Rotaract Club of Sydenham College."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {legacy.map((item) => (
            <LegacyCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}