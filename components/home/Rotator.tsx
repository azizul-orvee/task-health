"use client";

import { useEffect, useState } from "react";

/** Rotating italic word at the end of the hero headline ("…at home for your mum / your dad / …"). */
export default function Rotator({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"" | "is-out" | "is-in">("");

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setPhase("is-out");
      t1 = setTimeout(() => {
        setI((n) => (n + 1) % words.length);
        setPhase("is-in");
        t2 = setTimeout(() => setPhase(""), 30);
      }, 350);
    }, 2800);
    return () => {
      clearInterval(id);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [words.length]);

  return (
    <span className="rotator" aria-live="polite">
      <em className={phase || undefined}>{words[i]}</em>
    </span>
  );
}
