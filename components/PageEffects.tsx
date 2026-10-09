"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Site-wide motion: marks <body> as loaded (starts the homepage hero intro) and
 * reveals `.reveal` elements once as they scroll into view, with a small stagger
 * between siblings. Re-runs on every client-side navigation.
 */
export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    requestAnimationFrame(() => document.body.classList.add("is-loaded"));
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const sibs = el.parentElement ? Array.from(el.parentElement.querySelectorAll(":scope > .reveal")) : [];
          el.style.setProperty("--d", `${Math.min(sibs.indexOf(el), 4) * 70}ms`);
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
