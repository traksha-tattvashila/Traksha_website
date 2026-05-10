# Tattvashila — Final Launch Checklist

**Version:** v3.8 (final pre-deployment pass)
**Date:** 2026-05-10
**Status:** Ready for clean first public deployment

---

## What was completed in this final pass

- ✅ Real social URLs: Instagram → `https://instagram.com/tattvashila`, YouTube → `https://youtube.com/@tattvashila`
- ✅ X/Twitter and LinkedIn icons removed entirely (returning only when accounts genuinely exist)
- ✅ Restrained monochrome icon style preserved; both open in new tabs (`target="_blank" rel="noopener noreferrer"`)
- ✅ Footer spacing/alignment verified at **390px (mobile)**, **820px (tablet)**, **1440px (desktop)**
- ✅ Comprehensive metadata added in `app/layout.tsx`:
  - `metadataBase: new URL("https://tattvashila.org")`
  - title template + default title
  - description
  - canonical (`alternates.canonical: "/"`)
  - `openGraph` (type, siteName, title, description, locale `en_IN`)
  - `twitter` (card: `summary_large_image`)
  - `robots` (index + follow + googleBot)
  - `icons` (svg favicon)
- ✅ Favicon: `/public/icon.svg` — restrained `T` glyph, ivory on `#001F20`, inherits Tattvashila identity
- ✅ `app/sitemap.ts` — auto-generated for `/`, `/about`, `/philosophy`, `/notes`, all `/notes/[slug]`
- ✅ `app/robots.ts` — allow all, points to `/sitemap.xml`

---

## P0 — MUST do before public launch

### 1. Domain & DNS
- [ ] Acquire/confirm `tattvashila.org` registration
- [ ] Configure DNS (Cloudflare recommended) with wildcard `*.tattvashila.org` so future subdomains (`traksha`, `tattvapeetha`, `vanatattva`, `shreetattva`, `raksha`) resolve when ready
- [ ] Update `metadataBase` in `app/layout.tsx` if production URL ever differs from `https://tattvashila.org`

### 2. Frontend deploy
- [ ] Push to a private GitHub repo
- [ ] Connect Vercel → import the repo → set the Next.js project root to `frontend/`
- [ ] Set environment variable on Vercel: `NEXT_PUBLIC_BACKEND_URL` = production backend URL

### 3. Backend deploy (FastAPI + MongoDB)
- [ ] Choose host: Render / Railway / Fly.io / DigitalOcean App Platform (low-cost, low-config)
- [ ] Provision MongoDB Atlas cluster (free tier is sufficient)
- [ ] Set environment variables on host: `MONGO_URL`, `DB_NAME`
- [ ] **Tighten CORS** in `backend/server.py`: change `allow_origins=["*"]` → `["https://tattvashila.org", "https://www.tattvashila.org"]`
- [ ] Verify `/api/health`, `POST /api/intake`, `GET /api/intake/count` from the deployed backend

### 4. Rate-limiting on `/api/intake`
- [ ] Add a small IP-based throttle (e.g. `slowapi` or simple Redis/in-memory counter) — currently public + unauthenticated, trivial to spam
- [ ] Optional: hCaptcha or Cloudflare Turnstile on the form submit

### 5. Image strategy
- [ ] Decide: keep three Unsplash-hosted hero/premise/journey images **or** self-host them. If self-hosting:
  - Copy the three referenced images into `/frontend/public/images/`
  - Update `HERO_IMG` / `PREMISE_IMG` / `JOURNEY_IMG` constants to local paths
  - (Optional) migrate `<QuietImage>` to `next/image` for AVIF + automatic `srcset`

---

## P1 — Should do before launch (small, fast)

- [ ] Add `:focus-visible` ring (single CSS rule) — strengthens keyboard accessibility:
  ```css
  a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
    outline: 2px solid var(--river);
    outline-offset: 3px;
    border-radius: 2px;
  }
  ```
- [ ] Generate a real Open Graph preview image (`/public/og.png`, 1200×630) and reference it under `openGraph.images` and `twitter.images` in `layout.tsx`. Until then, link previews on Slack/X/iMessage will be text-only — acceptable but not premium.
- [ ] Stub `/privacy` and `/terms` pages — one calm paragraph each is sufficient for launch
- [ ] Replace the placeholder backend URL in `frontend/.env` with the deployed backend URL

---

## P2 — Nice to do, not blocking

- [ ] Plausible Analytics (privacy-respecting, ~1KB script — fits the brand)
- [ ] MongoDB index on `intake_submissions.received_at` for future query performance
- [ ] Migrate `<QuietImage>` to `next/image`
- [ ] Add `Cache-Control` headers via Vercel for static assets (defaults already excellent)

---

## P3 — Held intentionally (per founder direction)

- Turborepo monorepo extraction
- `@tattvashila/design-system` package
- Subdomain shells (Tattvapeetha, Traksha, Vanatattva, Shreetattva, Raksha)
- Automated correspondence emails on intake submission
- Multi-page scaling beyond the current four pages
- Hindi/Devanagari language toggle

---

## Final responsive audit summary (v3.8)

| Aspect | Mobile @390 | Tablet @820 | Desktop @1440 |
|---|---|---|---|
| Type scale | calm, no oversized headings | balanced | quiet authority, clamps prevent stretching |
| Spacing rhythm | tight but breathable (`py-14`) | resolved (`py-20`) | resolved (`py-20`) |
| Footer balance | stacks cleanly: brand → links 6/6 → social → meta | side-by-side brand + links, social row, stacked closure | full 6/3/3 grid, single social row, side-by-side closure |
| Mobile readability | strong; no horizontal overflow | n/a | n/a |
| CTA consistency | inverted system inherited | same | same |

**Verdict:** Ready.

---

## What deployment looks like (suggested order)

1. P0 #1 (domain + DNS) — outside this codebase
2. P0 #3 (backend + MongoDB) — deploy first so frontend has a real URL to point to
3. P0 #4 (rate-limit) — before frontend goes public
4. P0 #2 (frontend) — last, after backend URL is final
5. P0 #5 (image strategy) — can be done before or after; non-blocking
6. P1 items in any order

After Step 4 the public URL is live. Steps 5 and the P1 list are post-launch refinements that won't disturb the experience for early visitors.

— End of checklist.
