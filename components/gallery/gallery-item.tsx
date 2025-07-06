import { ProjectImageData } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface GalleryItemProps {
  imageItem: ProjectImageData;
}

const GalleryItem = ({ imageItem }: GalleryItemProps) => {
  const widthHeightRatio = imageItem.height / imageItem.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const imageSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      style={{ gridRow: `span ${imageSpans}` }}
    >
      <div className="rounded-md overflow-hidden group">
        <Image
          src={imageItem.image}
          alt={imageItem.alt}
          width={250}
          height={galleryHeight}
          sizes="250px"
          className="group-hover:opacity-75"
        />
      </div>
    </div>
  );
};

export default GalleryItem;
