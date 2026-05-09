# Tattvashila Ecosystem — PRD

## Original Problem Statement
Build the foundation/architecture of the official Tattvashila Ecosystem website (`tattvashila.org`) — a calm, philosophically mature, premium homepage that serves as the gateway to a multi-subdomain ecosystem (Tattvapeetha, Traksha, Vanatattva, Shreetattva). The site must feel "quietly meaningful" — not a startup landing page, not edtech, not self-help, not coaching. Restraint over persuasion. Pacing over density. Maturity over mysticism.

## User Choices Confirmed (2026-05-09)
- **First delivery:** Written architecture plan + static homepage prototype to *feel* the tone before approving full build
- **Frontend stack:** Next.js 14 (App Router, TypeScript)
- **Subdomain architecture:** Decide later — root only for this build; design system established for future export
- **Early access:** Reflective intake (2 calm questions) instead of standard form
- **Visual identity:** Mood B — "Rivered Paper" (literary, contemplative, cool tones — bone background, deep slate-indigo text, washed indigo accent)

## Personas
- **The skeptical adult.** Has tried productivity / self-help / wellness systems and is tired of marketing. Comes via word of mouth.
- **The thoughtful Indian professional.** Recognizes Bharatiya influence but is allergic to performative spirituality.
- **The diaspora seeker.** Wants depth without dogma; values restraint as a sign of seriousness.

## Architecture — Core Requirements (static)
- Multi-subdomain ready (root + 4 sub-ecosystems planned)
- Mobile-first, accessible (AA), reduced-motion respected
- Single design system extensible to all subdomains later
- Intentionally minimal SEO footprint (organic discovery, not paid)
- Privacy-respecting analytics planned (Plausible)

## What's Implemented (2026-05-09)
- **Frontend (Next.js 14 + TypeScript + Tailwind + Framer Motion)**
  - Mood B color tokens, Fraunces / Instrument Sans / Tiro Devanagari Hindi typography
  - Single motion primitive (`<Reveal>` — 24px lift + 1100ms fade, reduced-motion aware)
  - 7 homepage sections: Threshold, Premise, Philosophy (4 tenets), Ecosystem (4 chambers), Journey (3 movements), Reflective Intake, Closing
  - Mobile-first responsive (390px → desktop) with preserved emotional pacing
- **Backend (FastAPI + MongoDB + Motor)**
  - `GET /api/health`, `POST /api/intake`, `GET /api/intake/count`
  - Pydantic validation: email + reflection (1–600 chars)
- **Testing**
  - 8/8 pytest backend tests pass; full frontend section + intake flow verified at 100%
- **Documentation**
  - `/app/DESIGN_SYSTEM.md` — full v0.1 design system

## Backlog — Prioritized

### P0 — Pending review/approval
- User review of homepage tone before further expansion

### P1 — Next phase (post-approval)
- Long-form Philosophy essay page (`/philosophy`)
- About / Origin story page (`/about`)
- Quiet Notes archive (rare correspondence reading-room)
- Subdomain shell scaffolding (Turborepo + `@tattvashila/design-system` package)
- Production deploy to Vercel; Cloudflare DNS for wildcard subdomain
- Plausible analytics integration

### P2 — Later
- Light email digest pipeline (manual-curated, not drip)
- Reading mode / dyslexia-friendly toggle
- Devanagari language toggle (full Hindi version of homepage)
- Image / illustration commission for one optional editorial visual per chamber

### P3 — Operational
- Rate-limit `/api/intake` (currently unrestricted public endpoint)
- Tighten CORS to production origin once domain confirmed
- Add MongoDB index on `intake_submissions.received_at`
- Privacy / Terms pages

## Next Action Items
1. Await user review of the homepage prototype tone
2. On approval: expand to long-form pages and prepare Vercel deploy
3. Begin design-system package extraction for subdomain reuse
