"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackSrc?: string;
  wrapperClassName?: string;
};

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/image-fallback.svg",
  wrapperClassName = "",
  className = "",
  ...props
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <div className={`relative overflow-hidden bg-zinc-900 ${wrapperClassName}`}>
      <Image
        {...props}
        src={currentSrc}
        alt={alt}
        className={`object-contain ${className}`}
        onError={() => {
          if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
        }}
      />
    </div>
  );
}
