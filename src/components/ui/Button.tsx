import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-yellow-400 text-slate-900 hover:bg-yellow-300"
      : "border border-slate-300 hover:border-yellow-400";

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${classes}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${classes}`}
    >
      {children}
    </button>
  );
}