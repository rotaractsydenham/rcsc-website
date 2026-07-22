interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}