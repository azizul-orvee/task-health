"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up to `end` when scrolled into view. Server-renders the final value (no layout shift, no-JS safe). */
export default function CountUp({ end, decimals = 0 }: { end: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(end.toFixed(decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / 1400, 1);
          setValue((end * (1 - Math.pow(1 - p, 3))).toFixed(decimals));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, decimals]);

  return <span ref={ref}>{value}</span>;
}
