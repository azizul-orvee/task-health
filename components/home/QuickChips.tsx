"use client";

import { PREFILL_EVENT } from "@/components/ConsultForm";

const CHIPS = [
  { who: "A parent", label: "A parent" },
  { who: "A partner", label: "A partner" },
  { who: "Myself", label: "Myself" },
  { who: "Another family member", label: "Someone else" },
];

/** "Who needs care?" — jumps to the homepage form with step 1 pre-filled. */
export default function QuickChips() {
  return (
    <div className="quick__chips">
      {CHIPS.map((c) => (
        <a
          key={c.who}
          href="#contact"
          onClick={() => window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { who: c.who } }))}
        >
          {c.label}
        </a>
      ))}
    </div>
  );
}
