import { ProjectImageData } from "@/lib/types";
import React from "react";
import GalleryItem from "./gallery-item";

interface GalleryProps {
  images: ProjectImageData[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <section className="my-3 grid grid-cols-[repeat(auto-fill,_250px)] gap-x-4 auto-rows-[10px] justify-center">
      {images.map((imageItem) => (
        <GalleryItem key={imageItem.image} imageItem={imageItem} />
      ))}
    </section>
  );
};

export default Gallery;
