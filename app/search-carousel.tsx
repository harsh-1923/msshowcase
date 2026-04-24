"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    src: "/images/one.png",
    alt: "IDE, Figma and chat side by side",
    caption: "IDE + Figma + Chat",
  },
  {
    src: "/images/two.png",
    alt: "IDE with notes and an AI agent",
    caption: "IDE + Notes + AI Agent",
  },
  {
    src: "/images/three.png",
    alt: "Agent command center",
    caption: "Agent Command Center",
  },
  {
    src: "/images/DSCF0088.JPG",
    alt: "IDE with ticket details",
    caption: "IDE + Ticket Details",
  },
];

export default function SearchCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    dragFree: false,
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div
        className="cursor-grab overflow-hidden active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`relative min-w-0 flex-[0_0_80%] px-2 transition-opacity duration-300 md:flex-[0_0_65%] md:px-4 ${
                selected === i
                  ? "opacity-100"
                  : "opacity-30 hover:opacity-60"
              }`}
            >
              <figure className="flex w-full flex-col gap-3">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1920}
                  height={1280}
                  sizes="(min-width: 768px) 65vw, 80vw"
                  className="h-auto w-full rounded-md"
                  priority={i === 0}
                  draggable={false}
                />
                <figcaption className="text-left text-sm text-zinc-600 dark:text-zinc-400">
                  {slide.caption}
                </figcaption>
              </figure>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              selected === i
                ? "w-6 bg-zinc-900 dark:bg-zinc-100"
                : "w-1.5 bg-zinc-300 dark:bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
