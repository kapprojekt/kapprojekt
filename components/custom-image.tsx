"use client";

import React from "react";
import { CldImage } from "next-cloudinary";

interface CustomImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
}

const CustomImage = ({
  className,
  src,
  alt,
  width,
  height,
}: CustomImageProps) => {
  return (
    <CldImage
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;
