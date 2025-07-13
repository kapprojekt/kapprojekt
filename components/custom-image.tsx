"use client";

import React from "react";
import { CldImage } from "next-cloudinary";

interface CustomImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  priority?: boolean;
  sizes?: string;
}

const CustomImage = ({
  className,
  src,
  alt,
  width,
  height,
  priority,
  sizes,
}: CustomImageProps) => {
  return (
    <CldImage
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
    />
  );
};

export default CustomImage;
