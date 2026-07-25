import Image from "next/image";
import { albums } from "@/content/gallery";

export default function GalleryGrid() {
  return (
    <>
      {/* Mobile */}

      <div
        className="
          no-scrollbar

          flex
          gap-2

          overflow-x-auto
          overflow-y-hidden

          snap-x
          snap-mandatory

          px-6
          pb-8

          lg:hidden
        "
        style={{
          scrollPaddingLeft: "1.5rem",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {albums.map((image) => (
          <div
            key={image.id}
            className="
              w-full
              shrink-0
              snap-start
            "
          >
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={image.cover}
                alt={image.title}
                width={700}
                height={700}
                className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop */}

      <div className="hidden columns-1 gap-6 sm:columns-2 lg:columns-3 lg:block">

        {albums.map((image) => (
          <div
            key={image.id}
            className="mb-6 break-inside-avoid overflow-hidden rounded-3xl"
          >
            <Image
              src={image.cover}
              alt={image.title}
              width={700}
              height={700}
              className="w-full rounded-3xl object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}

      </div>
    </>
  );
}