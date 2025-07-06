import Image from "next/image";
import React from "react";

interface GalleryItemProps {
  imageItem: {
    image: string;
    alt: string;
  };
}

const GalleryItem = ({ imageItem }: GalleryItemProps) => {
  return (
    <div className="h-64 bg-gray-200 rounded-md relative overflow-hidden">
      <Image
        src={imageItem.image}
        alt={imageItem.alt}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default GalleryItem;
