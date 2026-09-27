"use client";

import LazyImage from "@/components/lazy-image";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type ImageCarouselProps = {
  images: StaticImageData[];
  ariaLabel?: string;
  autoplayMs?: number;
};

export default function ImageCarousel({
  images,
  ariaLabel = "Karuzela obrazków",
  autoplayMs = 5000,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, autoplayMs);

    return () => clearInterval(timer);
  }, [images.length, autoplayMs]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      className="relative overflow-hidden rounded-lg shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full">
        {images.map((src, index) => (
          <figure
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Idź do slajdu ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
