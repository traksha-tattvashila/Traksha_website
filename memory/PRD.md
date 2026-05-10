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
- ✅ Nav updated: Philosophy · The work · Origin · Stay in touch (CTA)
- ✅ Footer updated: "The work" group + "About" group (Origin, Reflective intake, Quiet notes)

### v3.1 — Visual psychology source-of-truth (LOW-CREDIT, color pass only)
- ✅ Primary text color shifted from harsh slate (`#15171F`) to deep mineral teal-charcoal (**`#001F20`**) — warmer, calmer, more grounded
- ✅ Ink scale harmonized: `#001F20` → `#0D2A2C` → `#3A4F51` → `#6E7E80`
- ✅ Accent (river) re-tuned to harmonized mineral teal: `#2A5158` (was slate-indigo `#324669`)
- ✅ Selection color and CSS variables updated
- ✅ Bone backgrounds preserved (warm ivory, not pure white)
- Result: "quiet premium depth" — CTAs, wordmark, headings, body all carry calm mineral warmth instead of stark black

### v3.2 — Founder attribution (LOW-CREDIT)
- ✅ "Vikramaditya Mitra" (single word) added to About / Origin section III as factual mid-sentence attribution — no portrait, no biography, no founder hero treatment

### v3.3 — Philosophy page built (LOW-CREDIT, single pass)
- ✅ `/philosophy` page created — text-led, no new imagery (most credible for "explain not perform")
- ✅ Inherits v3.1 palette and existing Nav/Reveal/Closing components automatically
- ✅ Six numbered sections (I–VI): The condition · Awareness · Responsibility · Discipline · Conscious participation · Why this, now
- ✅ Each section: short label, plain title, 3 short paragraphs — readable, breathable, observational
- ✅ Opening: "These are the working ideas behind Tattvashila. We have kept them as plain as we could. They are not original to us — they are observations..."
- ✅ Closing summary: "Awareness, responsibility, discipline, conscious participation — carried into the same ordinary life you are already living. Nothing more, nothing less."
- ✅ CTAs: "Read the origin" → /about, "Stay in touch" → /#intake
- ✅ Tone: observational, calm, direct — explicitly avoids mystical/poetic register

### v3.4 — CTA inversion system formalized (LOW-CREDIT, token + hover)
**Source-of-truth: official CTA psychology for Tattvashila.**

- **Background (page):** warm bone `#ECE7DC` / `bone-light` `#F3EEE5`
- **Text (page):** ink `#001F20`
- **CTA buttons** invert this:
  - Background → `bg-ink` `#001F20`
  - Text → `text-bone-light` `#F3EEE5` (warm ivory — never pure white)
- **Hover:** subtle lift only — `hover:bg-ink-soft` `#0D2A2C` (slightly lighter shade of the same ink). No hue shift, no scale, no glow, no brightening.
- **Transition:** `duration-500 ease-gentle` (cubic-bezier 0.22, 0.61, 0.36, 1)

**Why:** the button reads as a natural extension of the page (thoughtful invitation), not as a separate marketing object (conversion optimization). Inversion keeps emotional continuity; the warm ivory text on deep mineral teal preserves "calm premium depth" instead of stark black-on-white contrast.

**Applied across all 5 CTA instances:** Nav (desktop + mobile), Intake submit, /about CTA, /philosophy CTA. **All future pages and components must inherit these tokens.**

### v3.5 — Quiet Notes archive built (LOW-CREDIT, single pass)
- ✅ `/notes` archive index — "Rare reflections, written when there is something honest worth saying."
- ✅ `/notes/[slug]` dynamic note page (Next.js `generateStaticParams`)
- ✅ Single source of truth: `/app/frontend/lib/notes.ts` (note metadata + body paragraphs)
- ✅ **One note, intentionally** — *"On being tired in a way sleep doesn't fix."* (~5 min read, signed: Vikramaditya Mitra)
- ✅ Topic: the modern condition of stimulation-without-pause; observational tone, no spiritual terminology
- ✅ Inherits v3.1 palette + v3.4 CTA system automatically
- ✅ Archive intentionally short with closing line: "Future notes will appear here as they are written. If you would like them sent to you when they are ready, leave us a quiet line."
- ✅ Note signing format: simple "— Vikramaditya Mitra" — no titles, no bio, no portrait

**Future notes:** add a new entry to `NOTES` array in `/app/frontend/lib/notes.ts`. Archive and routing pick it up automatically.

### v3.6 — Homepage refinement & calibration (LOW-CREDIT, craft pass)
- ✅ **Type scale reduced ~14%:** `display` `clamp(1.625rem→2.25rem)` (was `1.875→2.625rem`), `hero` `clamp(1.875rem→3.25rem)` (was `2.25rem→4rem`); `lead` 1.15rem (was 1.1875rem); line-height tightened
- ✅ **Section padding tightened:** all homepage sections `py-14 md:py-20` (was `py-20 md:py-28`) — better rhythm, less scrolling fatigue
- ✅ **Hero compressed:** `pt-24 md:pt-28 pb-12 md:pb-20` (was `pt-28 md:pt-32 pb-16 md:pb-24`); inline hero clamp reduced to match new scale
- ✅ **Hero image:** `aspect-[4/5] md:aspect-[4/5]` (was `md:aspect-[3/4]`) — less vertical dominance on desktop
- ✅ **Footer recalibrated:** wordmark size `default` (was `large`); quote `text-lg md:text-xl` (was `text-xl md:text-2xl`); paddings tightened (`pt-14 md:pt-20 pb-9 md:pb-11`); link spacing `space-y-2.5` (was `space-y-3`); link text `text-small` (was `text-body`)
- ✅ **Quiet Notes link activated:** footer "Quiet notes (soon)" → "Quiet Notes" → `/notes`
- ✅ Result: "calm authority, not scale dominance" — typography no longer performs importance, footer no longer feels like a second landing page

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
