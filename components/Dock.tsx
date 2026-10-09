"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { consultHref, site } from "@/lib/site";
import { PhoneIcon } from "./icons";

/** Mobile thumb-zone bar: appears after the first screen, hides while the consultation form is visible. */
export default function Dock() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero, .phero");
    const form = document.getElementById("wizard");
    let formVisible = false;

    const update = () => {
      const threshold = hero ? hero.offsetHeight * 0.7 : 300;
      setShown(window.scrollY > threshold && !formVisible);
    };
    const io = form
      ? new IntersectionObserver(([e]) => {
          formVisible = e.isIntersecting;
          update();
        })
      : null;
    if (form && io) io.observe(form);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      io?.disconnect();
    };
  }, [pathname]);

  return (
    <div className={`dock${shown ? " is-shown" : ""}`} aria-label="Quick actions">
      <a className="dock__call" href={`tel:${site.phone.tel}`}>
        <PhoneIcon />
        Call
      </a>
      <Link className="btn btn--primary" href={consultHref()}>
        Request a consultation
      </Link>
    </div>
  );
}
