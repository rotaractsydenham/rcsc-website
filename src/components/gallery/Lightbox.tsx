"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import {
  useEffect,
} from "react";

interface Props {
  images: string[];
  index: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onPrevious,
  onNext,
}: Props) {

  useEffect(() => {

    function handleKey(
      e: KeyboardEvent
    ) {

      if (e.key === "Escape")
        onClose();

      if (e.key === "ArrowLeft")
        onPrevious();

      if (e.key === "ArrowRight")
        onNext();

    }

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );

  }, []);

  return (

    <div
      className="
        fixed
        inset-0
        z-[100]

        flex
        items-center
        justify-center

        bg-black/90
        backdrop-blur
      "
      onClick={onClose}
    >

      <button
        className="
          absolute
          right-8
          top-8
        "
      >
        <X size={34} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="
          absolute
          left-8
          rounded-full
          bg-white/10
          p-4
        "
      >
        <ChevronLeft />
      </button>

      <Image
        src={images[index]}
        alt=""
        width={1800}
        height={1200}
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
          max-h-[90vh]
          w-auto
          rounded-3xl
          object-contain
        "
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="
          absolute
          right-8
          rounded-full
          bg-white/10
          p-4
        "
      >
        <ChevronRight />
      </button>

    </div>

  );

}