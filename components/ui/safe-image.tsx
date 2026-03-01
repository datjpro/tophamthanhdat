"use client";

import Image, { type ImageProps } from "next/image";
import { useMemo, useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackSrc: string;
};

export function SafeImage({ src, fallbackSrc, onError, ...props }: SafeImageProps) {
  const initialSrc = useMemo(() => (typeof src === "string" ? src : fallbackSrc), [fallbackSrc, src]);
  const [currentSrc, setCurrentSrc] = useState(initialSrc);

  return (
    <Image
      {...props}
      src={currentSrc}
      onError={(event) => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
        onError?.(event);
      }}
    />
  );
}
