import { ReactNode } from "react";

interface SnapItemProps {
  children: ReactNode;
}

export default function SnapItem({
  children,
}: SnapItemProps) {
  return (
    <div
      className="
        shrink-0

        w-full

        snap-start

        lg:w-auto
        lg:shrink
      "
    >
      {children}
    </div>
  );
}