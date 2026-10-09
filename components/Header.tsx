"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { consultHref, site } from "@/lib/site";
import { services } from "@/lib/services";

const links = [
  { href: "/about/", label: "About" },
  { href: "/training/", label: "Training" },
  { href: "/careers/", label: "Careers" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isServicesRoute = pathname.startsWith("/services") || services.some((s) => pathname.startsWith(`/${s.slug}`));
  const current = (href: string) => (pathname === href || pathname === href.replace(/\/$/, "") ? "page" : undefined);

  // Close menus on navigation
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (groupRef.current && !groupRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setServicesOpen((open) => {
        if (open) toggleRef.current?.focus();
        return false;
      });
    };
    document.addEventListener("click", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`} id="top">
      <div className="wrap header__in">
        <Link href="/" className="brand" aria-label="Task Healthcare home">
          <img
            src="/assets/logo-blue.png"
            alt="Task Healthcare — Your quality of care is our priority"
            width={564}
            height={174}
          />
        </Link>

        <nav className={`nav${menuOpen ? " is-open" : ""}`} id="nav" aria-label="Main">
          <div className={`nav__group${servicesOpen ? " is-open" : ""}`} ref={groupRef}>
            <button
              ref={toggleRef}
              className="nav__toggle"
              aria-expanded={servicesOpen}
              aria-controls="nav-services"
              aria-current={isServicesRoute ? "page" : undefined}
              onClick={() => setServicesOpen((o) => !o)}
            >
              Services
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="nav__menu" id="nav-services">
              {services.map((s) => (
                <Link key={s.slug} href={`/${s.slug}/`} aria-current={current(`/${s.slug}/`)}>
                  <strong>{s.name}</strong>
                  <span>{s.card.replace(/\.$/, "")}</span>
                </Link>
              ))}
              <Link className="nav__all" href="/services/">
                All services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
          <div className="nav__foot">
            <a className="btn btn--line" href={`tel:${site.phone.tel}`}>
              Call {site.phone.display}
            </a>
            <Link className="btn btn--primary" href={consultHref()}>
              Request a consultation
            </Link>
          </div>
        </nav>

        <a className="header__phone" href={`tel:${site.phone.tel}`}>
          <span className="dot" aria-hidden="true" />
          {site.phone.display}
        </a>
        <Link className="btn btn--primary header__cta" href={consultHref()}>
          Request a consultation
        </Link>
        <button
          className="burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
