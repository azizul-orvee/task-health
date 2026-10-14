"use client";

import { PREFILL_EVENT, WHO } from "@/components/ConsultForm";

/** "Who needs care?" — jumps to the homepage form with step 1 pre-filled. */
export default function QuickChips() {
  return (
    <div className="quick__chips">
      {WHO.map((c) => (
        <a
          key={c.value}
          href="#contact"
          onClick={() => window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { who: c.value } }))}
        >
          {c.label}
        </a>
      ))}
    </div>
  );
}
