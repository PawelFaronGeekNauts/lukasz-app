"use client";

import { useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
};

export default function LazyImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <div
        className={`lazy-image-placeholder ${loaded ? "opacity-0" : "opacity-100"}`}
        aria-hidden="true"
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`lazy-image block h-full w-full ${loaded ? "lazy-image-loaded" : ""} ${className}`}
      />
    </div>
  );
}
