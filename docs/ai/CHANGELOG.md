# Changelog

All changes to this project, newest first. Every AI tool and human must add an entry here after each change.

## 2026-11-08 — Duplicate review check; Valerie, Felsted kept
**Type:** docs
**Tool:** Claude Code
**What changed:**
- Decision recorded: the "beyond mere professionalism" review stays credited to Valerie, Felsted (the live site's attribution). Louise F, the homecare.co.uk name for the same review, stays out of `lib/reviews.ts`.
- Removed the open question from `docs/ai/STATUS.md`. Corrected the previous entry, which wrongly said this review was also the dementia-care page quote: that page quotes Pamela H. The Valerie quote in `lib/services.ts` is on `end-of-life-care`, and it's a different passage of her letter.
**Why:** The user doesn't want any duplicate review, and wants the original kept under its original name.
**Notes / gotchas:** Audited every quote in `lib/reviews.ts`, `lib/services.ts`, `app/page.tsx`, `app/reviews/page.tsx` and `app/about/page.tsx`: 14 unique names in the list, no repeated sentences, and no review under two names, so no code changed. A review can still appear as a short excerpt on one page and in full on `/reviews`, by design. Pamela H and Pamela Harris are two different reviews.

## 2026-11-07 — Eight more homecare.co.uk reviews; reviews moved to one data list
**Type:** content | refactor
**Tool:** Claude Code
**What changed:**
- Added 8 reviews the user pasted from homecare.co.uk: C P (4 Sep 2025), N S (25 Aug 2025), J M (25 Aug 2025), Jen H (17 Jan 2025), Nathan J (12 Dec 2024), Shirley S (18 Sep 2024), John F (13 Sep 2024) and H V (11 Apr 2024). Wording is as published, with straight apostrophes made curly and "She" lower-cased in C P's review.
- `lib/reviews.ts` now holds every homecare.co.uk review as `reviews: VerifiedReview[]` (newest first, ISO `date`, full `text`, optional marquee `excerpt`, optional `inMarquee: false`). `longDate()` and `shortDate()` format dates by hand rather than with `Intl`, so server and client output match. New `VerifiedReview` type in `lib/types.ts`.
- `app/reviews/page.tsx`: the six hand-written masonry cards are replaced by `reviews.map(...)`, giving 14 cards.
- `homeReviews` (the marquee) is now built from the list: Pamela Harris and Valerie, Felsted (live-site quotes) first, then every review except Pamela H, who is already the feature quote above it. That's 15 cards. The loop is 150s at the same speed. Long reviews (Jen H, John F, H V) use ellipsis excerpts.
**Why:** The user asked to add all the reviews they pasted.
**Notes / gotchas:**
- Skipped: S M (already listed) and Louise F (9 Apr 2024). Louise F's text is the same review as the "Valerie, Felsted" long read on `/reviews`, which the live site credits to Valerie. The user later chose to keep Valerie (see the 2026-11-08 entry).
- To add a review, add one entry to `reviews` in `lib/reviews.ts`. It then appears on `/reviews` and in the home marquee.

## 2026-11-07 — Centred text on the review marquee cards
**Type:** style
**Tool:** Claude Code
**What changed:**
- `.marquee__item .quote` now has `text-align:center` (`app/globals.css`). The quote and the reviewer name are centred under the star tiles, like the reference video. Only the marquee is affected; the `/reviews` grid stays left-aligned.
**Why:** The user asked for it.

## 2026-11-07 — Green, centred star tiles on the review marquee
**Type:** style
**Tool:** Claude Code
**What changed:**
- The marquee cards in `components/home/ReviewMarquee.tsx` now show five green square tiles with white SVG stars (`.rating`, `.rating__star`), centred above the quote, instead of gold `★★★★★` text. The accessible name is on the row (`role="img"`, "5 out of 5 stars").
- New colour token `--green:#1a9a5c` in `app/globals.css`, used only for these tiles (white star on it is above 3:1). The quote text stays left-aligned.
**Why:** The user asked for the stars to be centred and green, as in their reference video.
**Notes / gotchas:** The gold `.stars` glyphs are still used everywhere else, including the `/reviews` page and the care pages.

## 2026-11-07 — Fix: review cards vanished when "Pause reviews" was clicked
**Type:** fix
**Tool:** Claude Code
**What changed:**
- `components/home/ReviewMarquee.tsx`: the root `className` is now constant (`marquee reveal`). The paused state is a `data-paused` attribute, and the CSS selector changed from `.marquee.is-paused` to `.marquee[data-paused]` in `app/globals.css`.
**Why:** `PageEffects` adds `is-in` to `.reveal` elements directly in the DOM, outside React. Toggling pause re-rendered the `className`, React overwrote it, `is-in` was dropped, and `.js .reveal` hid the whole marquee (opacity 0).
**Notes / gotchas:** Never give a `.reveal` element a `className` that changes with state. Put state in a `data-*` attribute or on a child element. No other component did this (checked with a grep).

## 2026-11-06 — Scrolling review marquee on the home page
**Type:** feature
**Tool:** Claude Code
**What changed:**
- New `components/home/ReviewMarquee.tsx` (client) replaces the 4-card `.quotes` grid in the home page reviews section (`app/page.tsx`). It runs full width, outside `.wrap`, between the Pamela H feature quote and the CTA row.
- The cards are rendered twice, and `.marquee__track` slides by `-50%` in a CSS `@keyframes marquee` loop, so the loop is seamless. They move right to left, like the user's reference video. The duration is `var(--n) * 10s` (about 36px/s), so adding reviews keeps the same speed.
- Pauses on hover (`@media (hover:hover)`), and a "Pause reviews / Play reviews" button (`aria-pressed`) covers touch and keyboard users (WCAG 2.2.2). The button is hidden under `.no-js`. The duplicate list is `aria-hidden` and `inert`.
- Reduced motion: no animation, and the row becomes a horizontally scrollable, scroll-snapped list. The duplicate list and the button are hidden.
- Review data moved to `lib/reviews.ts` (`homeReviews`, new `Review` type in `lib/types.ts`). It holds 7 reviews: the 4 that were on the home page plus G V, S M and Y J, all shortened with ellipses from the verified full texts on `/reviews`. No wording was changed.
- `app/globals.css`: added the `.marquee*` rules. The unused `.quotes` grid rules were replaced by the marquee's 1024px card width (340px).
**Why:** The user wanted the reviews to scroll sideways like a Shopify "Scrolling Reviews" section they shared as a video.
**Notes / gotchas:** To reverse the direction, add `animation-direction:reverse` to `.marquee__track`. The `/reviews` page keeps its static masonry grid on purpose, because it's the full archive.

## 2026-11-06 — Fallback preview config on port 4322
**Type:** config
**Tool:** Claude Code
**What changed:**
- Added a `site-4322` entry to `.claude/launch.json` that runs `next dev -p 4322`. The original `site` entry (port 4321) is unchanged.
**Why:** Port 4321 was taken by another local project's dev server (se-mobile-tyre), and `npm run dev` pins 4321.
**Notes / gotchas:** If 4321 is busy, use `preview_start` with name `site-4322`. The dev server logs a 404 for `/favicon.ico` (no favicon at that path).

## 2026-10-22 — Mockup reviews verified; dates corrected
**Type:** content
**Tool:** Claude Code
**What changed:**
- Checked the six review quotes that weren't on the live site against the homecare.co.uk profile (https://www.homecare.co.uk/homecare/agency.cfm/id/65432240283, Reviews tab): Janine G, G V, Pamela H ("13 years"), Kimberley K, S M and Y J. All six are real, and the wording matches apart from light spelling fixes and trimming. None were removed.
- Every date was one year early. Corrected them in `app/reviews/page.tsx`, `app/page.tsx` and `lib/services.ts`:
  - Janine G: 19 Sep 2025
  - G V: 3 Sep 2025
  - Pamela H: 25 Jun 2025
  - Kimberley K: 12 Dec 2024
  - S M: 8 Oct 2024
  - Y J: 13 Sep 2024
**Why:** The user asked to verify the reviews taken from the vibepreview mockup and remove any that couldn't be found.
**Notes / gotchas:**
- homecare.co.uk sits behind an Imperva CAPTCHA. curl gets a stub page, so the user has to pass the CAPTCHA in a real browser. Full review text is in the DOM behind CSS "Read more" toggles, so read `textContent`, not `innerText`.
- The profile now shows **9.6** (9.625, based on 9 reviews in the last 2 years; 16 all-time). The site still says 9.9 in `components/Proof.tsx`, the badge alt text in `app/page.tsx` and `app/reviews/page.tsx`, and the reviews page meta. That's a protected claim, so it was left for the user to decide.
- The "goes beyond mere professionalism" quote, credited to "Valerie, Felsted" on the live site, appears on homecare.co.uk as Louise F (daughter-in-law), 9 April 2024. The live site's attribution was kept.

## 2026-10-22 — Reference sites recorded
**Type:** docs
**Tool:** Claude Code
**What changed:**
- Added a "Reference sites" section to `AGENTS.md` with the live site and the vibepreview mockup (`/about`).
**Why:** The user wants every session and tool to know what "the reference sites" means.

## 2026-10-22 — Tighter spacing between sections, site-wide
**Type:** style
**Tool:** Claude Code
**What changed:**
- New `--space-section` token, `clamp(3rem, 2.2rem + 3.2vw, 5.25rem)`, about 48px on mobile and 81px at 1440px. Section padding now uses it instead of `--space-xl`, which was about 72–134px. It applies to `.section`, `.careers`, `.footer`, `.phero` (bottom), `.cta-band`, `.pull` and `.notfound` (`app/globals.css`). `--space-xl` stays for column gaps.
- `--space-l` reduced from `clamp(2.5rem,1.8rem + 3vw,4.5rem)` to `clamp(2rem,1.5rem + 2vw,3.5rem)` (about 53px at 1440px, down from 72px). This tightens heading-to-content spacing, the `.urgent` and `.join` bands, and `.center` CTAs.
- Fix: centred section heads (`.section__head--center`, e.g. "How it works") inherited the desktop `gap: var(--space-l)` as a row gap. That left about 72px between the eyebrow and the h2. They now use `--space-s`.
**Why:** The user found the white space between sections too large across the site.
**Notes / gotchas:** `npm run format` reformats files that were never Prettier-formatted (`app/globals.css`, `AGENTS.md`, `tsconfig.json` …) into thousands of lines of churn. It was reverted and not run.

## 2026-10-15 — Dummy commit to test the push workflow
**Type:** docs
**Tool:** Claude Code
**What changed:**
- Added this entry to `docs/ai/CHANGELOG.md`. Nothing else changed.
**Why:** The user asked for a dummy change to test commit and push.

## 2026-10-15 — Design critique fixes on the home page
**Type:** style
**Tool:** Claude Code
**What changed:**
- Services bento has no gaps any more. Desktop: tiles 5 and 6 span 2 columns and show their descriptions. Tablet: the last tile spans the full row (`app/globals.css`).
- Accent discipline:
  - `h2 em` is now italic in the heading colour. Blue italic is reserved for `h1 em`, `blockquote em` and an opt-in `em.hl` (`app/globals.css`).
  - Home uses `.hl` only on "dignity" and "the care you need". "quickly" and "efficiently" are plain text again (`app/page.tsx`).
  - This change is site-wide, so inner-page h2 accents are now ink italic.
- The emergency band `.urgent` is now navy (`--ink`) with a blue `btn--primary` "Call now" button (`app/page.tsx`, `app/services/page.tsx`).
- The careers section moved below the consultation form as a slim white `.join` strip with a `btn--line` button, and its paragraph was shortened (`app/page.tsx`, `app/globals.css`). The id stays `#careers`.
- "Who needs care?" order:
  - The options are now the shared exported `WHO` constant in `components/ConsultForm.tsx`, used by `components/home/QuickChips.tsx`.
  - The hero and the form now use the same order: A parent, A partner, Myself, Someone else.
- Rating badges:
  - They sit on cream cards with an "Independently rated" label and are no longer cropped (`.badges`, `.badges__label`).
  - The links are unchanged.
- Mobile:
  - New `components/home/HelpsList.tsx` (client) shows 8 of the 18 service chips plus a "Show all 18 services" button below 640px. Hiding only happens under `.js`.
  - The FAQ is now a sibling of the form, so it comes after the form on mobile. On desktop it stays in the left column via `grid-template-areas`.
  - The FAQ change applies to `app/page.tsx` and `app/contact/page.tsx`.
- `components/Proof.tsx`: only "50+" counts up. "9.9" and "<12h" are static, so they never show a lower or wrong figure mid-animation.
**Why:** The user asked to apply all seven fixes from the design critique.
**Notes / gotchas:**
- Checked at 375px, 768px and 1440px. Chip prefill works.
- The mobile home page went from 15,109px to 14,461px.
- `app/globals.css` was already not Prettier-formatted before this change, and that was left as is.

## 2026-10-10 — Git repository initialised and pushed to GitHub
**Type:** config
**Tool:** Claude Code
**What changed:**
- `git init`, then the first commit `e50b31c` ("first commit") of the whole project on branch `main`.
- Remote `origin` is https://github.com/azizul-orvee/task-health.git, and `main` was pushed with upstream tracking.
- `.gitignore`: added `.claude/.cc-writes/`.
**Why:** The user asked to commit and push the project to GitHub.
**Notes / gotchas:** The sandbox blocks writing `.git/`, so the git commands were run outside it with the user's request. These doc updates came after the push and are uncommitted.

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
