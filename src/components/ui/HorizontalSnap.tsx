import { ReactNode } from "react";

interface HorizontalSnapProps {
  children: ReactNode;
  desktopCols?: string;
  gap?: string;
}

export default function HorizontalSnap({
  children,
  desktopCols = "lg:grid-cols-3",
  gap = "gap-2",
}: HorizontalSnapProps) {
  return (
    <div
      className={`
        no-scrollbar

        flex
        ${gap}

        overflow-x-auto
        overflow-y-hidden

        snap-x
        snap-mandatory

        px-6
        pb-8

        lg:grid
        ${desktopCols}
        lg:gap-8
        lg:px-0
        lg:pb-0
        lg:overflow-visible
      `}
      style={{
        scrollPaddingLeft: "1.5rem",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children}
    </div>
  );
}