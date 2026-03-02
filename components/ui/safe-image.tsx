"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useMemo, useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackSrc: string;
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function withBasePath(src: string) {
  if (!BASE_PATH) return src;
  if (!src.startsWith("/") || src.startsWith("//")) return src;
  if (src === BASE_PATH || src.startsWith(`${BASE_PATH}/`)) return src;
  return `${BASE_PATH}${src}`;
}

export function SafeImage({ src, fallbackSrc, onError, alt, ...props }: SafeImageProps) {
  const resolvedSrc = useMemo(
    () => withBasePath(typeof src === "string" ? src : fallbackSrc),
    [fallbackSrc, src],
  );
  const resolvedFallbackSrc = useMemo(() => withBasePath(fallbackSrc), [fallbackSrc]);
  const [currentSrc, setCurrentSrc] = useState(resolvedSrc);

  useEffect(() => {
    setCurrentSrc(resolvedSrc);
  }, [resolvedSrc]);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={(event) => {
        if (currentSrc !== resolvedFallbackSrc) {
          setCurrentSrc(resolvedFallbackSrc);
        }
        onError?.(event);
      }}
    />
  );
}
