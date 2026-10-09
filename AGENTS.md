# AGENTS.md — Task Healthcare website redesign

> Start here. This file is the entry point for any AI assistant or developer working on this project.

## What this is
A full redesign of the website for **Task Healthcare Limited**, a CQC-rated Good home care agency in Ilford/Redbridge, London. Live site: https://taskhealthcare.co.uk/ (WordPress). The redesign is a **Next.js + TypeScript** site that rebuilds every page of the live site: home, 6 care pages, services, about, training, careers, reviews, contact and 404. Its goal is to turn visiting families into **consultation requests** and phone calls.

## Read these next
1. `docs/ai/STATUS.md` — where things stand now and what's next (read first)
2. `docs/ai/CHANGELOG.md` — history of every change (read the latest entries)
3. `docs/ai/PROJECT.md` — stack, setup, commands, deploy
4. `docs/ai/ARCHITECTURE.md` — code map and data flow
5. `docs/ai/DECISIONS.md` — why things are the way they are
6. `DESIGN.md` — design brief: concept, type, colour, motion, retention hooks

## Quick facts
- **Stack:** Next.js 16 (App Router) + React 19 + TypeScript (strict). Plain global CSS (`app/globals.css`), no Tailwind. Fonts are self-hosted with `next/font/local`.
- **Run locally:** `npm install`, then `npm run dev` → http://localhost:4321 (also set up as "site" in `.claude/launch.json`).
- **Check:** `npm run typecheck`, `npm run build`, `npm run format` (Prettier).
- **Rendering:** every route is statically prerendered (SSG), with no server data or env vars.
- **Deploy:** not deployed yet. Vercel is the natural fit. (TODO: confirm with user)
- **Package manager:** npm (`package-lock.json`)
- **Not a git repo** yet
- **`legacy-static/`** is the previous plain-HTML version, kept for reference only. It isn't built or served, and is excluded in `tsconfig`. It's safe to delete once the user confirms.

## Conventions
- **Brand assets only:** all imagery, the logo, contact details and copy come from the client's current site (taskhealthcare.co.uk). Don't add stock photos or invent facts such as prices, accreditations or reviews.
- **Business details:**
  - Phone, email, address and social/CQC links live in `lib/site.ts`. Use `site.*` and `consultHref()` instead of hard-coding them.
  - Exception: older page copy converted from HTML still has some inline `tel:` links.
- **Care pages:**
  - One dynamic route, `app/[service]/page.tsx`, with typed data in `lib/services.ts` (`Service` type in `lib/types.ts`).
  - To add or edit a care type, edit `lib/services.ts`. The nav dropdown, footer, sitemap and related tiles update automatically.
- **Server vs client components:** pages are Server Components. Interactive parts are small `"use client"` components:
  - `components/Header.tsx`, `Dock.tsx`, `ConsultForm.tsx`, `CountUp.tsx`, `PageEffects.tsx`
  - `components/home/*`
  Keep them small.
- **Styling:** BEM-ish global classes in `app/globals.css`. It's mobile-first, with `min-width` breakpoints at 640px and 1024px. Design tokens are CSS variables in `:root`.
- **Colour:** the brand blue `--blue` (#005FC9, from the logo) is reserved for primary actions and highlights. Navy `--ink` and cream `--cream` are the main surfaces.
- **Fonts:** Fraunces (serif display, italic `<em>` accents in headings) and Plus Jakarta Sans (body). The `.woff2` files are in `app/fonts/`, exposed as `--font-fraunces` and `--font-jakarta`.
- **Images:**
  - Responsive WebP files in `public/assets/`, named `name-800.webp` and `name-1600.webp`. Use `components/Img.tsx`.
  - `next/image` isn't used: the variants are pre-generated, and `images.unoptimized` is set.
- **Motion:**
  - Only `transform` and `opacity` are animated.
  - Add `className="reveal"` for scroll reveals; `PageEffects` observes them on every route change.
  - Everything must respect `prefers-reduced-motion`.
- **No-JS fallback:** `<html class="no-js">` becomes `js` via an inline script in `app/layout.tsx`. Content that animates in is hidden only under `.js`.
- **Links:** use `next/link` for internal routes. URLs end in a trailing slash (`trailingSlash: true`).

## Don't touch without asking
- Contact details (phone numbers, email, address), the CQC and homecare.co.uk links, and review quotes. These are real client data.
- Factual claims: "under 12 hours" emergency start, 50+ years of NHS experience, the 9.9 score, CQC Good.

## 🚫 Hard rules (MANDATORY for every AI tool)
1. **No `git commit` and no `git push` unless the user explicitly asks in that message.** Permission to commit is not permission to push. Read-only git (`status`, `log`, `diff`) is fine. Leave finished work uncommitted.
2. **The production database is read-only.** No writes, migrations, schema pushes, seeds or resets against production unless the user explicitly asks. Before any DB command, check which DB `DATABASE_URL` points to; if it's production or unclear, stop and ask. Develop and test on a dev or local DB. If any production record is created or changed during development or testing, delete or restore it before finishing, verify that, and log the cleanup in the changelog. (This project has no database today.)

## 📝 Documentation rules (MANDATORY for every AI tool)
This project documents itself. Whatever tool you are (Claude Code, Cursor, Copilot, Codex, etc.):
1. **Before working:** read `docs/ai/STATUS.md` and the latest entries in `docs/ai/CHANGELOG.md`.
2. **After ANY change, before finishing:**
   - Add a dated entry at the TOP of `docs/ai/CHANGELOG.md` (format below).
   - Update `docs/ai/STATUS.md` (done / in progress / next / known issues).
   - Update `ARCHITECTURE.md` if the structure changed, `PROJECT.md` if the stack, commands, env or deploy changed, and `DECISIONS.md` if you made a non-obvious choice.
3. Be specific, include file paths, and never write secrets (env var names only).

Changelog entry format:
    ## YYYY-MM-DD — Short title
    **Type:** feature | fix | refactor | style | content | config | deps | deploy | docs
    **Tool:** <which AI/human>
    **What changed:**
    - <change with `file/path`>
    **Why:** <reason>
    **Notes / gotchas:** <optional, include any test-data cleanup done>
