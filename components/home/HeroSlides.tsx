"use client";

import { useEffect, useState } from "react";

const SLIDES = ["banner-3", "banner-4", "banner-1"];
const srcSet = (n: string) => `/assets/${n}-800.webp 800w, /assets/${n}-1600.webp 1600w`;

/** Slow cross-fade between the site's own banners. Extra slides load only after the first paint. */
export default function HeroSlides() {
  const [active, setActive] = useState(0);
  const [loadRest, setLoadRest] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setLoadRest(true);
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero__media" aria-hidden="true">
      {SLIDES.map((name, i) =>
        i === 0 || loadRest ? (
          <img
            key={name}
            className={`hero__img${active === i ? " is-active" : ""}`}
            src={`/assets/${name}-1600.webp`}
            srcSet={srcSet(name)}
            sizes="100vw"
            alt=""
            width={1600}
            height={762}
            {...(i === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
          />
        ) : null,
      )}
    </div>
  );
}
