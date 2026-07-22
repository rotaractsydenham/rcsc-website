import Image from "next/image";
import { gallery } from "@/content/gallery";

export default function GalleryGrid() {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">

      {gallery.map((image) => (

        <div
          key={image.id}
          className="mb-6 break-inside-avoid overflow-hidden rounded-3xl"
        >

          <Image
            src={image.image}
            alt={image.title}
            width={700}
            height={700}
            className="w-full rounded-3xl object-cover transition duration-500 hover:scale-105"
          />

        </div>

      ))}

    </div>
  );
}