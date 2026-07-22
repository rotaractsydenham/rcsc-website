import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: PageHeroProps) {
  return (
    <section className="relative flex h-[45vh] items-center justify-center overflow-hidden pt-15">

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

        {/* Eyebrow */}
        <div className="mb-8 flex items-center justify-center gap-4">
  <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

  <span className="text-base font-extrabold uppercase tracking-[0.6em] text-yellow-400">
    {eyebrow}
  </span>

  <span className="h-[2px] w-16 rounded-full bg-yellow-400" />
</div>

        {/* Title */}
        <h1 className="text-5xl font-black md:text-6xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
          {subtitle}
        </p>

      </div>
    </section>
  );
}