"use client";

import { ProjectImageData } from "@/lib/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface GalleryItemProps {
  imageItem: ProjectImageData;
}

const GalleryItem = ({ imageItem }: GalleryItemProps) => {
  const divRef = useRef(null) as React.RefObject<HTMLDivElement | null>;
  const [galleryWidth, setGalleryWidth] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      setGalleryWidth(divRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (divRef.current) {
        setGalleryWidth(divRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const widthHeightRatio = imageItem.height / imageItem.width;
  const galleryHeight = Math.ceil(galleryWidth * widthHeightRatio);
  const imageSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      ref={divRef}
      className="w-full"
      style={{ gridRow: `span ${imageSpans}` }}
    >
      <div className="rounded-md overflow-hidden group">
        <Image
          src={imageItem.image}
          alt={imageItem.alt}
          width={galleryWidth}
          height={galleryHeight}
          className="group-hover:opacity-75"
        />
      </div>
    </div>
  );
};

export default GalleryItem;
