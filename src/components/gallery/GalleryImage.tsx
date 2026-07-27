"use client";

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  onClick: () => void;
}

export default function GalleryImage({
  src,
  alt,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        group
        block
        w-full
        overflow-hidden
        rounded-3xl
      "
    >
      <Image
        src={src}
        alt={alt}
        width={700}
        height={700}
        className="
          w-full
          rounded-3xl
          object-cover
          transition
          duration-500
          group-hover:scale-105
        "
      />
    </button>
  );
}