# Project Overview — Task Healthcare website redesign

## Purpose
A full multi-page redesign of the website for Task Healthcare Limited, a domiciliary/home care agency rated Good by the CQC. It serves Redbridge (Ilford, Barkingside) and all of London. The main visitors are adult children arranging care for a parent, plus older adults themselves.
- **Primary action:** request a consultation (the 3-step form in `#contact`).
- **Secondary action:** a phone call (020 8594 7282, available 24/7).

## Owner / client
- Client: Task Healthcare Limited, 45 Forest Road, Ilford, London IG6 3HA.
- Current live site: https://taskhealthcare.co.uk/ (WordPress). All brand assets and copy were taken from it.
- Style reference supplied by the user: https://preview-1784908701136982255.vibepreview.com/ (a vibe-coded mockup of a Task Healthcare redesign). It blocks curl, so view it in a real browser.
- The user (developer/agency) is building this to show the client.

## Tech stack
| Layer | Tech |
|---|---|
| Framework | Next.js 16.3 (App Router), all routes statically prerendered |
| Language | TypeScript 5.9 (strict), React 19.2 |
| Styling | Global CSS with design tokens (`app/globals.css`), mobile-first. No Tailwind |
| Fonts | Self-hosted Fraunces and Plus Jakarta Sans via `next/font/local` |
| Database / ORM | None |
| Auth | None |
| Hosting | Not deployed yet. Vercel recommended (TODO: confirm with user) |
| Analytics / tracking | None yet |
| Forms | The consultation form opens a `mailto:` to enquiries@taskhealthcare.co.uk. There's no backend yet |
| Tooling | Prettier 3.9 |

## Getting started
```bash
cd task-health
npm install
npm run dev        # http://localhost:4321
```

## Scripts
| Command | What it does |
|---|---|
| `npm run dev` | Dev server on port 4321 |
| `npm run build` | Production build (static prerender of all routes) |
| `npm run start` | Serves the production build on port 4321 |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format` | Prettier on the whole repo (ignores `legacy-static/`, `public/`, `docs/`) |

## Environment variables (names only — never values)
None.

## Deployment
Not deployed. On Vercel this is zero-config: import the repo, the framework is detected automatically, and the redirects in `next.config.ts` apply.
- On other hosts, use `npm run build && npm run start`, or add `output: "export"` for pure static hosting. Note that the redirects would then have to move to the host config.
- Point taskhealthcare.co.uk at the new host when the client approves.

## External accounts / dashboards
- CQC listing: https://www.cqc.org.uk/location/1-13376159979
- homecare.co.uk reviews: https://www.homecare.co.uk/homecare/agency.cfm/id/65432240283
- Facebook: https://www.facebook.com/profile.php?id=100089201764890
- Instagram: https://www.instagram.com/sharonilori/
- LinkedIn: https://www.linkedin.com/in/task-healthcare-limited-b5a2982b6/
