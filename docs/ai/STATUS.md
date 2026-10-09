# Status — last updated 2026-10-10

## Current state
The site is now **Next.js 16 + TypeScript**. All 12 live-site pages plus the 404 are rebuilt with the same design and content as the earlier static version.
- `npm run build` passes, and all 17 routes are statically prerendered.
- `npm run typecheck` is clean.
- Verified in the browser at 375px and 1440px:
  - navigation and the dropdown
  - mobile menu
  - form steps and validation
  - hero-chip pre-fill and `?care=` pre-select
  - redirect from old URLs
  - 404 page
- Not deployed and not a git repo.

## ✅ Recently done
- Ported the static site to the Next.js App Router. Shared UI is in React components, and the care pages are one typed dynamic route.
- Business details are centralised in `lib/site.ts`, with typed service data in `lib/services.ts`.
- Fonts are self-hosted via `next/font/local` (`app/fonts/`).
- 301 redirects from the old WordPress slugs are in `next.config.ts`. `sitemap.xml` and `robots.txt` are generated.
- Prettier is set up (`npm run format`).

## 🚧 In progress
- Nothing.

## ⏭️ Next up
- Client review.
- Choose hosting (Vercel recommended) and point the domain. TODO: confirm with user.
- Replace the `mailto:` form with a real submission: a Next.js Route Handler or Server Action plus an email service (e.g. Resend), or Formspree.
- Delete `legacy-static/` once the user is happy with the Next.js version.
- Optional: ESLint (`eslint-config-next`), analytics, per-page OG images.

## 🐛 Known issues
- The form doesn't submit to a server. It depends on the visitor's email app.
- Unused files in `public/assets/`: the original `*.jpg`s and `logo.png`. Delete them before deploy.
- The related-services grid on care pages leaves one orphan tile on mobile (5 tiles in 2 columns). This is cosmetic.
- Some converted page copy still hard-codes `tel:` and `mailto:` links rather than using `lib/site.ts`.

## ⚠️ Watch out
- **Content to verify with the client:**
  - The reviews from Janine G, G V, Kimberley K, S M and Y J, and the funding FAQ, came from the user's reference mockup.
  - The third phone number, 07816 834903, comes from the live contact page.
- **No invented facts:** there's no fees section, because the live site lists no prices.
- **Sandbox quirks:**
  - npm needs `npm_config_cache=$TMPDIR/npm-cache`.
  - `next/font/google` can't fetch fonts, so the fonts are local.
  - The Browser pane freezes animations while it's in the background.
