"use client";

import { useState, type CSSProperties } from "react";
import type { Review } from "@/lib/types";

/**
 * Endless sideways row of review cards. The list is rendered twice and the track slides by
 * exactly one copy (-50%), so the loop is seamless. Pure CSS animation: it pauses on hover,
 * and the button pauses it for touch and keyboard users (WCAG 2.2.2). With reduced motion
 * it becomes a static, swipeable row and the duplicate copy is hidden.
 */
export default function ReviewMarquee({ reviews }: { reviews: Review[] }) {
  const [paused, setPaused] = useState(false);

  const cards = (copy: number) =>
    reviews.map((r, i) => (
      <li key={`${copy}-${i}`} className="marquee__item">
        <blockquote className="quote">
          <div className="rating" role="img" aria-label="5 out of 5 stars">
            {[0, 1, 2, 3, 4].map((s) => (
              <span key={s} className="rating__star">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.8l2.8 5.9 6.5.8-4.8 4.5 1.3 6.4L12 17.2l-5.8 3.2 1.3-6.4-4.8-4.5 6.5-.8z" />
                </svg>
              </span>
            ))}
          </div>
          <p>“{r.text}”</p>
          <cite>{r.by}</cite>
        </blockquote>
      </li>
    ));

  return (
    // className must stay constant: PageEffects adds `is-in` to `.reveal` outside React, and a
    // re-rendered className would wipe it (hiding the whole row). Paused state lives in a data attribute.
    <div
      className="marquee reveal"
      data-paused={paused || undefined}
      style={{ "--n": reviews.length } as CSSProperties}
    >
      <div className="marquee__viewport" role="region" aria-label="Reviews from families">
        <div className="marquee__track">
          <ul className="marquee__list">{cards(0)}</ul>
          <ul className="marquee__list marquee__list--clone" aria-hidden="true" inert>
            {cards(1)}
          </ul>
        </div>
      </div>
      <button type="button" className="marquee__toggle" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
        {paused ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 4v16l13-8z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 4v16M16 4v16" />
          </svg>
        )}
        <span>{paused ? "Play reviews" : "Pause reviews"}</span>
      </button>
    </div>
  );
}
