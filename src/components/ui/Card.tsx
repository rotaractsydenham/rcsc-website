import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-yellow-400
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
        ${className}
      `}
    >
      {children}
    </div>
  );
}