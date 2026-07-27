"use client";

import { useState } from "react";
import Image from "next/image";

import { Album } from "@/content/gallery";

import GalleryImage from "./GalleryImage";
import Lightbox from "./Lightbox";

interface Props {
  album: Album;
}

export default function AlbumGallery({
  album,
}: Props) {
  const [selected, setSelected] =
    useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">

        {album.images.map((image, index) => (
          <div
            key={index}
            className="mb-6 break-inside-avoid"
          >
            <GalleryImage
              src={image}
              alt={`${album.title} ${index + 1}`}
              onClick={() => setSelected(index)}
            />
          </div>
        ))}

      </div>

      {selected !== null && (
        <Lightbox
          images={album.images}
          index={selected}
          onClose={() => setSelected(null)}
          onPrevious={() =>
            setSelected((current) =>
              current === null
                ? 0
                : current === 0
                ? album.images.length - 1
                : current - 1
            )
          }
          onNext={() =>
            setSelected((current) =>
              current === null
                ? 0
                : current === album.images.length - 1
                ? 0
                : current + 1
            )
          }
        />
      )}
    </>
  );
}