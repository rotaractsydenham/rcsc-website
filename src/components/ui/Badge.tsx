interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400">
      {children}
    </span>
  );
}