"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  { src: "/images/one.png", alt: "Search results from multiple surfaces" },
  { src: "/images/two.png", alt: "Inline thread preview inside VSCode" },
];

export default function SearchCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.src}
              className="relative min-w-0 flex-[0_0_100%] px-4 md:px-8"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={1280}
                className="mx-auto h-auto w-full max-w-6xl rounded-md ring-1 ring-black/10 dark:ring-white/10 shadow-sm"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-zinc-900 ring-1 ring-black/10 backdrop-blur transition hover:bg-white dark:bg-black/60 dark:text-zinc-50 dark:ring-white/10 dark:hover:bg-black/80 md:left-8"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-zinc-900 ring-1 ring-black/10 backdrop-blur transition hover:bg-white dark:bg-black/60 dark:text-zinc-50 dark:ring-white/10 dark:hover:bg-black/80 md:right-8"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

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
