"use client";

import { useState } from "react";

/** Service chips. On phones the list is cut to 8 until "Show all" is tapped (CSS does the hiding, only under `.js`). */
export default function HelpsList({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ul id="helps-list" className={`helps__list${open ? " is-open" : ""}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {!open && (
        <button className="helps__more" type="button" aria-controls="helps-list" onClick={() => setOpen(true)}>
          Show all {items.length} services
        </button>
      )}
    </>
  );
}
