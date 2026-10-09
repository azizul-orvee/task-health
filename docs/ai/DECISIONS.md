# Decisions

Why things are the way they are. Newest first.

## 2026-10-10 — Next.js + TypeScript replaces the Python-built static site
**Context:** The user wants the site in Next.js and TypeScript.
**Decision:**
- App Router, with every page a Server Component and interactivity isolated in small client components.
- The care pages are a single typed dynamic route generated from `lib/services.ts`.
**Alternatives considered:** Keeping `build.py`. Rejected because the user explicitly asked for Next.js/TS.
**Consequences:** It's a standard stack (Vercel-ready). The old version is kept in `legacy-static/` until the user approves deleting it.

## 2026-10-10 — Keep the global CSS (no Tailwind or CSS Modules)
**Context:** The design was already implemented in one token-based stylesheet.
**Decision:** Port it unchanged as `app/globals.css`, keeping the BEM-ish class names in the JSX.
**Alternatives considered:** Rewriting in Tailwind or CSS Modules. Rejected: lots of churn with a risk of visual regressions and no user-facing benefit.
**Consequences:** Class names are global, so check for collisions (e.g. the `.bento .tile` scoping).

## 2026-10-10 — Self-hosted fonts with `next/font/local`
**Context:** `next/font/google` downloads fonts at build time, and that fetch failed in the sandbox.
**Decision:** Commit the latin variable `.woff2` files to `app/fonts/`.
**Consequences:** No network dependency at build or runtime, and no third-party font requests. Only the latin subset is included.

## 2026-10-10 — Plain `<img>` with pre-generated srcset instead of `next/image`
**Context:** The images are already optimised WebP at 800 and 1600px.
**Decision:** Use a small `components/Img.tsx` helper and set `images.unoptimized: true`.
**Consequences:** Works on any host, including static export. To switch to `next/image` later, replace the `Img` usage.

## 2026-10-09 — A tiny Python build script instead of a framework or JS includes
**Context:** The site grew from 1 page to 14, all sharing a header, footer and form.
**Decision:** `build.py` (stdlib only) assembles pages from `src/` partials. The 6 care pages come from JSON plus one template.
**Alternatives considered:**
- Copy-pasted HTML: drifts out of sync.
- Including partials with JS: bad for SEO and no-JS visitors.
- Astro or 11ty: adds Node dependencies and is heavier for a demo.
**Consequences:** You must run `python3 build.py` after edits. The output is plain HTML that's easy to host or port into WordPress.

## 2026-10-09 — Clean URLs instead of the WordPress slugs
**Context:** The live WP slugs are `about-2`, `contact-2`, `customer-review-2` and `training-2`.
**Decision:** Use `/about/`, `/contact/`, `/reviews/`, `/training/`, `/careers/` and `/services/`. The care-page slugs stay the same as WordPress.
**Consequences:** 301 redirects are needed at launch to keep SEO and old links working.

## 2026-10-09 — Host the downloadable .docx files locally
**Context:** The Statement of Purpose, job description and application form were linked from WP `wp-content/uploads`.
**Decision:** Copy them into `assets/docs/`.
**Consequences:** The site works without WordPress. If the client updates a document, replace the file in `assets/docs/`.

## 2026-10-09 — No fees section or cost calculator
**Context:** The reference mockup showed hourly and live-in prices and a cost calculator.
**Decision:** Left them out.
**Alternatives considered:** Copying the mockup's prices. Rejected, because the live site publishes no prices and they may not be real.
**Consequences:** Add the section only once the client confirms real rates.

## 2026-10-09 — Featured review + grid instead of a carousel
**Context:** v1 used a horizontal review carousel.
**Decision:** Replaced it with one large featured quote plus a grid of 4 quotes.
**Alternatives considered:** Keeping the carousel. Rejected, because most users never swipe past the first slide and the reviews are key social proof.
**Consequences:** Only 5 reviews are shown. The link to homecare.co.uk covers the rest.

## 2026-10-09 — `mailto:` form instead of a backend
**Context:** This is a demo prototype with no server or hosting decided.
**Decision:** The wizard opens a prefilled email to enquiries@taskhealthcare.co.uk.
**Alternatives considered:** Formspree, Netlify Forms, a WP form plugin. Postponed until hosting is decided.
**Consequences:** It depends on the visitor's email app. Must be replaced before going live.

## 2026-10-09 — Plain static HTML/CSS/JS, no framework
**Context:** The user needed a demo quickly, and the live site is WordPress.
**Decision:** A single static page with no build step or dependencies.
**Alternatives considered:** Next.js or Astro. Rejected as overkill for one page, and it would complicate porting back into WordPress.
**Consequences:** It's easy to host anywhere or port into a WP theme. Shared parts like the header and footer will need templating if more pages are added.

## 2026-10-09 — Floating call button instead of WhatsApp
**Context:** The reference mockup had a WhatsApp button.
**Decision:** Use a phone call action, shown as the mobile dock's Call button.
**Alternatives considered:** WhatsApp on 07498 218177. Not confirmed as a WhatsApp number.
**Consequences:** Switch it if the client confirms WhatsApp.
