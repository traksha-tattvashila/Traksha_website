# Tattvashila Ecosystem — PRD

## Original Problem Statement
Build the foundation/architecture of the official Tattvashila Ecosystem website (`tattvashila.org`) — a calm, philosophically mature, premium homepage that serves as the gateway to a multi-subdomain ecosystem (Tattvapeetha, Traksha, Vanatattva, Shreetattva). The site must feel "quietly meaningful" — not a startup landing page, not edtech, not self-help, not coaching.

## User Choices Confirmed
- **Stack:** Next.js 14 (App Router, TypeScript) + FastAPI + MongoDB
- **Subdomain architecture:** Decide later — root only for this build
- **Early access:** Reflective intake (2 calm questions) — not a standard form
- **Visual identity:** Mood B — "Rivered Paper", refined v2 (calmer, clearer, warmer)

## Iteration v2 — User Feedback Applied (2026-05-09)
After reviewing v1, user asked to rebalance away from "designed to feel profound" toward "quietly trustworthy, human, refined and real":
- ✅ Stable wordmark — single typographic style "Tattvashila" (no italic split)
- ✅ Increased text contrast (ink #15171F on bone #ECE7DC)
- ✅ Removed paper-grain overlay; clean readable surfaces
- ✅ Tightened section padding (py-32 → py-20 desktop)
- ✅ Added 3 grounded photographs (notebook + glasses, person reading in library, library shelves) with graceful gradient fallback
- ✅ Rewrote hero to communicate the "why" in the first scroll: "A quieter way to live with awareness — without leaving the world you've built."
- ✅ Solid CTA button "Stay in touch" (replacing pure-typographic link)
- ✅ Multi-column footer with quiet navigation
- ✅ Faster, less dramatic motion (1100ms → 850ms)
- ✅ Better readable type scale (smaller display sizes, tighter line-heights)

## What's Implemented
- **Frontend (Next.js 14)** — 7-section homepage, single `<Reveal>` motion primitive, custom `<QuietImage>` (handles SSR + onLoad race + tonal fallback), Wordmark, Nav with desktop+mobile CTA
- **Backend (FastAPI)** — `/api/health`, `POST /api/intake`, `/api/intake/count`
- **Testing** — 8/8 pytest backend, 100% frontend (iter1 + iter2 reports)
- **Documentation** — `/app/DESIGN_SYSTEM.md` updated for v2

## Backlog — Prioritized

### P0 — Pending
- User review of v2 tone before further expansion

### P1 — Next phase (post-approval)
- Long-form Philosophy essay page (`/philosophy`)
- About / Origin page (`/about`)
- Quiet Notes archive (rare correspondence reading-room)
- Subdomain shell scaffolding (Turborepo + `@tattvashila/design-system` package)
- Production deploy to Vercel; Cloudflare DNS for wildcard subdomain
- Plausible analytics integration

### P2 — Later
- Migrate to Next.js `<Image>` for AVIF + srcset (current `<img>` works; this is optimization)
- Reading mode / dyslexia-friendly toggle
- Devanagari language toggle (full Hindi version of homepage)
- Optional editorial illustration per chamber (commissioned)

### P3 — Operational
- Rate-limit `/api/intake` (currently unrestricted public endpoint)
- Tighten CORS to production origin once domain confirmed
- MongoDB index on `intake_submissions.received_at`
- Privacy / Terms pages

## Next Action Items
1. Await user review of refined v2 prototype
2. On approval: expand to long-form pages and prepare Vercel deploy
3. Begin design-system package extraction for subdomain reuse
