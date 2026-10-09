# Changelog

All changes to this project, newest first. Every AI tool and human must add an entry here after each change.

## 2026-10-10 — Migrated to Next.js 16 + TypeScript
**Type:** refactor
**Tool:** Claude Code
**What changed:**
- New Next.js App Router project in the repo root:
  - `package.json`: next 16.3.8, react 19.2.0, typescript 5.9.3, prettier 3.9.8
  - `tsconfig.json`, `next.config.ts`, `.prettierrc.json`, `.gitignore`
- Pages:
  - `app/page.tsx`, `app/[service]/page.tsx` (6 care pages via `generateStaticParams`)
  - `app/{services,about,training,careers,reviews,contact}/page.tsx`, `app/not-found.tsx`, `app/sitemap.ts`, `app/robots.ts`
- Components in `components/`:
  - Header, Footer, Dock, PageEffects, ConsultForm, CountUp, Proof, CtaBand, Img, icons
  - `home/` HeroSlides, Rotator, QuickChips
- Interactivity rewritten in React: the old `main.js` DOM code became state and effects in client components.
- Data: `lib/site.ts` (business details), `lib/services.ts` and `lib/types.ts` (typed care-page content).
- The static page markup was machine-converted to JSX with a one-off script, so the copy is identical, then formatted with Prettier.
- `styles.css` became `app/globals.css`. The font tokens now point to the `next/font` variables.
- Fonts are self-hosted with `next/font/local` (`app/fonts/*.woff2`, latin variable files from Google Fonts).
- `assets/` moved to `public/assets/`.
- `next.config.ts` has 301 redirects from the old WP slugs, `trailingSlash: true` and `images.unoptimized`.
- The previous static site (HTML, `build.py`, `src/`, `main.js`) moved to `legacy-static/` for reference.
- `.claude/launch.json` now runs `npm run dev` on port 4321.
**Why:** The user asked for the site to be built with Next.js and TypeScript instead of the Python-built static HTML.
**Notes / gotchas:**
- `next/font/google` fails in the sandbox, so the fonts are local.
- npm needs `npm_config_cache=$TMPDIR/npm-cache` in the sandbox.
- The user's "footer links go to WordPress" report was caused by a stale Browser-pane tab showing `file:///…/index.html` from the first version. That tab is now closed.

## 2026-10-09 — Rebuilt every page of the live site (multi-page)
**Type:** feature
**Tool:** Claude Code
**What changed:**
- Added the static site generator `build.py` and sources in `src/`:
  - `partials/`: head, header, footer, consult, cta, proof
  - `pages/`
  - `data/services.json`
  - `templates/service.html`
- `index.html` is now generated from `src/pages/index.html`.
- New pages:
  - care pages: `/domiciliary-care/`, `/live-in-care/`, `/dementia-care/`, `/respite-care/`, `/end-of-life-care/`, `/supported-living/`
  - `/services/`, `/about/`, `/training/`, `/careers/`, `/reviews/`, `/contact/`, `404.html`, plus `sitemap.xml`
- The content was scraped from each live WP page and lightly edited. Copy-paste errors were fixed ("Ideal Care Services" and "task health Care Services" → Task Healthcare).
- Header: Services dropdown (`.nav__group`, `.nav__menu`). The footer, nav and homepage tiles now link to internal pages instead of WordPress.
- New images from the live pages:
  - home-visit, tea, nurse-portrait, wheelchair, talking, doctor, respite, supported, recruit, training, contact, dom-hero
  - each as `-800`/`-1600.webp`
- New `assets/logo-blue.png` and `assets/logo-white.png`, with the white background removed. This fixes the footer logo showing a white or black box.
- `assets/docs/` holds local copies of the Statement of Purpose, the carer job description and the application form (.docx).
- `styles.css`:
  - Added multi-page components: phero, crumbs, overview, feat, story, related, cta-band, checklist, panel, pull, doc-card, skill-grid, perks, masonry, longread, ccard, hours, map, notfound.
  - Scoped the homepage bento rules to `.bento`.
  - Hide the footer CTA when a page ends with `.cta-band`.
- `main.js`:
  - Guards for page-specific elements.
  - Services dropdown (click, hover, Escape).
  - Current-page highlight in the menu.
  - `?care=` pre-fills the form's care type.
**Why:** The user found that the footer care-service and company links went to the old WordPress site and asked for every page to be rebuilt.
**Notes / gotchas:**
- Paths are root-absolute, so serve over HTTP.
- 301 redirects from the old WP slugs are needed at launch.
- An automated link check passed with no broken internal links.

## 2026-10-09 — Project documentation initialized
**Type:** docs
**Tool:** Claude Code
**What changed:**
- Created `AGENTS.md`, `CLAUDE.md`, and `docs/ai/` (`PROJECT.md`, `ARCHITECTURE.md`, `STATUS.md`, `CHANGELOG.md`, `DECISIONS.md`)
**Why:** So any session or AI tool can understand and continue the project without re-explaining it.
**Notes / gotchas:** State at this point: a static homepage prototype is complete, not deployed, and not a git repo. The history below was reconstructed from the session.

## 2026-10-09 — Award-style redesign (v2)
**Type:** feature / style
**Tool:** Claude Code (award-frontend skill)
**What changed:**
- Rewrote `index.html`, `styles.css` (mobile-first, token-based) and `main.js`.
- Added `DESIGN.md` (concept: "warm, human home care that feels like family").
- New sections:
  - hero with a rotating headline word and "Who needs care?" chips
  - count-up proof band
  - bento services grid
  - emergency band
  - "How it works"
  - objectives with an aims accordion
  - featured review plus a grid (the carousel was removed)
  - areas and community
  - dark careers band
  - FAQ plus a 3-step wizard with a progress bar
  - mobile dock bar
- Generated `assets/*-800.webp` and `*-1600.webp` responsive images, plus `cqc-good.webp` and `homecare-score.webp`.
- Fixes found during QA:
  - a `[hidden]{display:none!important}` override, because `.btn` was un-hiding the Back button
  - the dock now hides while `#wizard` is visible
  - the header background is now solid, so the logo's multiply blend works
  - removed the hero title `max-width`
**Why:** The user asked for an Awwwards-level pass focused on mobile-first, appropriate motion and retention psychology.

## 2026-10-09 — Initial redesign based on the reference mockup (v1)
**Type:** feature
**Tool:** Claude Code
**What changed:**
- Downloaded brand assets (logo, banners, photos, CQC and homecare badges) from taskhealthcare.co.uk into `assets/`, renamed them, and resized them to at most 1800px.
- Built the first `index.html`, `styles.css` and `main.js`, following the structure of the vibepreview reference mockup and using only content from the live site.
- Added `.claude/launch.json` (python http.server on port 4321).
**Why:** The user wanted their current site upgraded to the style and structure of the example site, using their own brand assets, as a quick demo.
