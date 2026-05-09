# Tattvashila — PRD

## Original Problem Statement
Build the foundation of the official Tattvashila website (`tattvashila.org`) — a calm, philosophically mature, premium experience that gradually unfolds a long body of work exploring multiple dimensions of human life.

## User Choices Confirmed
- **Stack:** Next.js 14 + FastAPI + MongoDB
- **Mood:** Mood B "Rivered Paper" (refined v2 — quietly trustworthy, human, refined and real)
- **Identity:** *Tattvashila* (singular). The word "ecosystem" is internal-only — never public-facing.

## Iteration Log

### v1 — Architecture + first prototype (literary, restrained)
### v2 — Rebalanced toward clarity + trust (stable wordmark, deeper contrast, real imagery, faster motion, multi-column footer)
### v3 — Identity & structure stabilization, About page (LOW-CREDIT, single pass)
- ✅ "Tattvashila Ecosystem" → "Tattvashila" everywhere (metadata, footer, hero eyebrow)
- ✅ Bilingual naming corrected: Tattvapeetha तत्त्वपीठा, Traksha त्रक्षा, Vanatattva वनतत्त्वा, Shreetattva श्रीतत्त्वा, **Raksha रक्षा** (5th dimension added)
- ✅ Section label "The Ecosystem" → "The work" (homepage), "Several dimensions, each opening in its own time"
- ✅ Soft hint of structural completeness: *"Other dimensions are being thought through. The whole will reveal itself slowly."*
- ✅ **About / Origin page built** (`/about`) — quietly accountable, observational, no founder branding
  - Sections: Origin opening · What was observed · Why this, why now · Who is building this · A note on accountability
  - Reuses Reveal, Wordmark, Nav, Closing components — no new infrastructure
  - Two CTAs: "Write to us, quietly" → /#intake, "Read the philosophy" → /#philosophy
- ✅ Nav updated: Philosophy · The work · Origin · Stay in touch (CTA)
- ✅ Footer updated: "The work" group + "About" group (Origin, Reflective intake, Quiet notes)

## What's Implemented
- **Pages:** `/` homepage (7 sections), `/about` Origin (5 sections + footer)
- **Backend:** FastAPI `/api/health`, `POST /api/intake`, `/api/intake/count`
- **Components:** Nav, Wordmark, Reveal, QuietImage + 7 section components (homepage) + about/page.tsx
- **Design system:** documented in `/app/DESIGN_SYSTEM.md`

## Backlog — Prioritized

### P0 — Pending review
- User review of v3 (About page tone + naming corrections)

### P1 — Next phase (post-approval, one at a time)
- Long-form Philosophy essay page
- Quiet Notes archive (rare correspondence)
- Production deploy to Vercel + DNS

### P2 — Held intentionally (per user direction)
- Turborepo / `@tattvashila/design-system` extraction — DEFERRED until identity matures
- Multi-page scaling — ONE at a time only
- Automated correspondence emails — DEFERRED
- Subdomain shells (Tattvapeetha, Traksha, Vanatattva, Shreetattva, Raksha) — DEFERRED

### P3 — Operational
- Rate-limit `/api/intake`
- Tighten CORS to production origin
- Plausible analytics
- Privacy / Terms pages

## Next Action Items
1. Await user review of About page tone + naming corrections
2. On approval: Philosophy long-form page is the next single addition
