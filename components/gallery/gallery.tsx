import { ProjectImageData } from "@/lib/types";
import React from "react";
import GalleryItem from "./gallery-item";

interface GalleryProps {
  images: ProjectImageData[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <section className="px-1 my-3 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] auto-rows-[10px]">
      {images.map((imageItem) => (
        <GalleryItem key={imageItem.alt} imageItem={imageItem} />
      ))}
    </section>
  );
};

export default Gallery;
