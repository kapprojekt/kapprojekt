import { ProjectImageData } from "@/lib/types";
import React from "react";
import GalleryItem from "./gallery-item";

interface GalleryProps {
  images: ProjectImageData[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <section className="my-3 grid grid-cols-1 md:grid-cols-2 gap-x-4 auto-rows-[10px] justify-center">
      {images.map((imageItem) => (
        <GalleryItem key={imageItem.image} imageItem={imageItem} />
      ))}
    </section>
  );
};

export default Gallery;
