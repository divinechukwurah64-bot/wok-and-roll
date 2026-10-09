"use client";

import { useEffect, useRef, useState } from "react";
import { UtensilsCrossed } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
};

export default function MediaImage({ src, alt, className = "", fallbackSrc }: Props) {
  const sources = [src, fallbackSrc].filter(Boolean) as string[];
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setIndex((i) => i + 1);
  }, [index]);

  if (index >= sources.length) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-orange-100 text-orange-500 dark:bg-white/5 dark:text-orange-400 ${className}`}
      >
        <UtensilsCrossed className="h-8 w-8" />
      </div>
    );
  }

  const fit = className.includes("object-") ? "" : "object-cover";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={sources[index]}
      ref={ref}
      src={sources[index]}
      alt={alt}
      loading="lazy"
      onError={() => setIndex((i) => i + 1)}
      className={`${fit} ${className}`}
    />
  );
}