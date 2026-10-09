# Architecture

Next.js 16 App Router + TypeScript. Every route is statically prerendered, and there's no backend.

## Folder map
```
task-health/
├── app/
│   ├── layout.tsx            ← <html>/<body>, local fonts, default metadata, Header/Footer/Dock/PageEffects
│   ├── globals.css           ← all styles: tokens → base → sections → components → @640px → @1024px → reduced-motion
│   ├── fonts/*.woff2         ← self-hosted Fraunces (normal + italic) and Plus Jakarta Sans variable fonts
│   ├── page.tsx              ← homepage
│   ├── [service]/page.tsx    ← the 6 care-type pages (generateStaticParams, dynamicParams = false)
│   ├── services/ about/ training/ careers/ reviews/ contact/  ← one page.tsx each
│   ├── not-found.tsx         ← branded 404
│   ├── sitemap.ts, robots.ts
├── components/
│   ├── Header.tsx (client)   ← nav, Services dropdown (hover/focus/click, Escape), mobile sheet, scroll shadow, active state via usePathname
│   ├── Footer.tsx            ← footer (server)
│   ├── Dock.tsx (client)     ← mobile Call/Consultation bar; shows after the first screen, hides while #wizard is visible
│   ├── PageEffects.tsx (client) ← body.is-loaded (hero intro) + .reveal IntersectionObserver, re-run per route
│   ├── ConsultForm.tsx (client) ← 3-step consultation wizard (React state) → mailto:
│   ├── CountUp.tsx (client), Proof.tsx, CtaBand.tsx, Img.tsx, icons.tsx
│   └── home/ HeroSlides.tsx, Rotator.tsx, QuickChips.tsx (client)
├── lib/
│   ├── site.ts               ← business details + consultHref()
│   ├── services.ts           ← typed content for the 6 care pages
│   └── types.ts              ← Service / Feature types
├── public/assets/            ← images (WebP 800/1600), logos, rating badges, docs/*.docx
├── next.config.ts            ← trailingSlash, images.unoptimized, 301 redirects from old WordPress slugs
├── legacy-static/            ← previous plain-HTML + Python build version (reference only, not built)
└── AGENTS.md, CLAUDE.md, DESIGN.md, docs/ai/
```

## Routes
| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero (HeroSlides, Rotator, QuickChips), Proof, about, services bento, emergency, how it works, objectives, reviews, areas, careers, FAQ, ConsultForm (`#contact`) |
| `/domiciliary-care/` … `/supported-living/` | `app/[service]/page.tsx` + `lib/services.ts` | Page hero, overview + sticky card, numbered features, promise + quote, Proof, related services, CtaBand |
| `/services/` | `app/services/page.tsx` | Care types, service list, conditions, live-in tasks, advanced care, emergency, all services |
| `/about/` | `app/about/page.tsx` | Statement of Purpose download (`/assets/docs/statement-of-purpose.docx`) |
| `/training/` | `app/training/page.tsx` | |
| `/careers/` | `app/careers/page.tsx` | Job description and application form downloads (`/assets/docs/`) |
| `/reviews/` | `app/reviews/page.tsx` | Featured quote, masonry reviews, Valerie's long-read |
| `/contact/` | `app/contact/page.tsx` | Contact cards, hours, FAQ, ConsultForm (`#consult`), Google Maps iframe |
| 404 | `app/not-found.tsx` | |
| `/sitemap.xml`, `/robots.txt` | `app/sitemap.ts`, `app/robots.ts` | |

**Redirects** (`next.config.ts`, 301): `/about-2/`→`/about/`, `/contact-2/`→`/contact/`, `/customer-review-2/`→`/reviews/`, `/training-2/`→`/training/`, `/recruitment/`→`/careers/`, `/service/`→`/services/`, `/home-page/`→`/`.

## Data flow
- **ConsultForm:**
  - Controlled React state across 3 steps.
  - Each step's required fields are validated before moving on; invalid fields get `.invalid`.
  - On the last step it builds a `mailto:enquiries@taskhealthcare.co.uk` link and shows a thank-you state.
  - There is only one form per page (`id="wizard"`), and the Dock looks it up by that id.
- **Pre-fill:**
  - The hero chips dispatch `window` `CustomEvent("consult:prefill", { detail: { who } })` (`PREFILL_EVENT`), which the form listens for.
  - `?care=<query>` on `/contact/` pre-selects the first "Type of care" option containing the query. Care pages link there via `consultHref(service.careQuery)`.
- **Hydration notes:**
  - `<html>` has `suppressHydrationWarning`, because an inline script swaps `no-js`→`js` before React hydrates.
  - `CountUp` server-renders the final number, then animates from 0 when it scrolls into view.

## Integrations
| Service | Where | Notes |
|---|---|---|
| Google Maps embed | `app/contact/page.tsx` | iframe, no API key |
| CQC / homecare.co.uk / socials | `lib/site.ts` | External links only |

## Key CSS gotchas
- The homepage bento rules are scoped to `.bento .tile`. The care pages' `.related` tiles reuse `.tile`.
- `main:has(> .cta-band:last-child) + .footer .footer__cta{display:none}` stops two CTAs stacking at the bottom of a page.
- `[hidden]{display:none!important}` is needed because `.btn` sets `display`.
