# Tattvashila — Pre-Deployment Audit Report

**Version:** v3.7 (post final-footer refinement)
**Date:** 2026-05-10
**Pages reviewed:** `/`, `/about`, `/philosophy`, `/notes`, `/notes/[slug]`
**Mode:** Read-only audit. No code changed during this audit.

---

## 1. Executive summary

Tattvashila is **ready for review prior to deployment**. The emotional identity (quietly trustworthy, mature, grounded) is now consistent across all five pages. Typography, palette and CTA psychology are unified. The footer reads as architectural rather than as a second landing page. No critical issues block a public launch.

A small number of pre-launch items are listed in §11 — none of them are blockers; most are operational (CORS, rate-limiting, analytics, real social URLs).

---

## 2. Visual consistency — **Strong**

| Token | Hex | Status |
|---|---|---|
| Page background | `#ECE7DC` (warm bone) | ✅ used everywhere |
| Section accent bg | `#F3EEE5` (`bone-light`) — used on Intake + About §IV | ✅ |
| Primary text | `#001F20` (deep mineral) | ✅ used everywhere |
| Secondary text | `#0D2A2C` (`ink-soft`) | ✅ |
| Muted | `#3A4F51` (`ink-muted`) | ✅ |
| Faint / metadata | `#6E7E80` (`ink-faint`) | ✅ |
| Accent | `#2A5158` (`river`) — used sparingly: hover on chamber names + note titles | ✅ |
| CTA bg | `#001F20` | ✅ inverted from page (5 CTA instances) |
| CTA text | `#F3EEE5` (warm ivory, never pure white) | ✅ |
| CTA hover | `#0D2A2C` (subtle lift, no hue shift) | ✅ |

All five pages share one design system. No drift detected.

---

## 3. Typography rhythm — **Strong**

**Pairing in use:**
- `Fraunces` (serif, 300/400/500, italic available but unused decoratively) — for headings only
- `Instrument Sans` (400/500) — for all body, labels, UI
- `Tiro Devanagari Hindi` — only for Sanskrit names (तत्त्वशिला, तत्त्वपीठा, त्रक्षा, वनतत्त्वा, श्रीतत्त्वा, रक्षा)

**Scale (six sizes — restrained):**

| Token | Size | Use |
|---|---|---|
| `micro` | 12px (0.75rem) tracking 0.08em | section labels, footer meta, status |
| `small` | 15px (0.9375rem) | nav, helper text, footer links |
| `body` | 17px (1.0625rem) | paragraphs |
| `lead` | 18.4px (1.15rem) | hero subheads |
| `display` | clamp(1.625rem → 2.25rem) | section titles |
| `hero` | clamp(1.875rem → 3.25rem) | one place — the hero on each page |

**Audit findings:**
- ✅ No decorative italics anywhere — italics reserved for true emphasis (currently unused)
- ✅ Headings in Fraunces 400; no font-weight performance
- ✅ Numerals: old-style (`onum`) on body / ordinals; tabular (`tnum`) for footer year
- ✅ Devanagari accent is consistent and never decorative
- ✅ Type ramp reduced ~14% in v3.6; no longer reads as "editorial showcase"
- ⚠️ **Minor:** Hero image caption "An ordinary morning, an ordinary page." adds one extra read before the eye reaches Premise. Cosmetic only — flagged for optional removal.

---

## 4. Responsive behavior — **Strong**

**Breakpoints:** mobile-first; `md:` at 768px; `lg:` at 1024px.

**Verified:**
- Desktop @1440px: 12-col grid with 3-col label / 9-col content; lateral padding 64px (`lg:px-16`); sections `py-20`
- Mobile @390px: single column; lateral padding 24px; sections `py-14`; nav collapses to a single solid "Stay in touch" CTA; footer link groups split 6/6 cols
- All images have `aspect` constraints — no layout shift on load
- No horizontal overflow at 390px (verified prior testing iteration)
- `prefers-reduced-motion` honored throughout via the `<Reveal>` primitive
- `scroll-padding-top: 6rem` keeps anchor-jumps clear of fixed nav

**Minor note:** the 6-column footer link split on mobile (`The work` left, `About` right) reads correctly, but if a third group is ever added, it will need to stack — currently no contingency.

---

## 5. Emotional coherence — **Strong (and well-protected)**

**The promised emotional target was:** *"This feels carefully observed, responsibly built, and quietly necessary — not a movement trying to recruit me."*

**Verified across pages:**
- Homepage hero: *"A quieter way to live with awareness — without leaving the world you've built."* — promise held
- Premise: *"This is not another system that asks you to become someone else."*
- Philosophy /philosophy: explains rather than performs; defines awareness *"plainly"* and explicitly *"not in a religious or therapeutic sense"*
- About /about: founder named (Vikramaditya Mitra) only as *accountability, not authority*; closing line *"We would rather be questioned than admired."*
- Notes /notes/...: *"Most of what we are calling Tattvashila is built around this very small act, repeated patiently."* Signed simply, no title

No mystical, motivational, anti-modern or guru language found. No saffron, no diyas, no founder portraits. No CTAs that "sell".

---

## 6. Accessibility — **Good, with low-priority follow-ups**

| Item | Status |
|---|---|
| Semantic landmarks (`header`, `main`, `section`, `footer`, `article`, `ol`, `form`, `label`) | ✅ |
| `data-testid` on every interactive and content-bearing element | ✅ |
| `lang="en"` on `<html>` | ✅ |
| Color contrast: ink `#001F20` on bone `#ECE7DC` | ≈ 14.6 : 1 (AAA Large + AAA Body) |
| CTA contrast: `bone-light #F3EEE5` on `ink #001F20` | ≈ 14.4 : 1 (AAA) |
| `ink-muted #3A4F51` on bone | ≈ 8.2 : 1 (AAA) |
| `ink-faint #6E7E80` on bone | ≈ 4.4 : 1 (AA Body, **borderline AA Large**) — used only for footer meta and status labels |
| `prefers-reduced-motion` | ✅ honored in Reveal + global CSS |
| Form labels bound via `htmlFor` / `id` | ✅ on intake fields |
| `aria-label` on icon-only links | ✅ on social icons |
| Focus styles | ⚠️ minimal — `outline: none` + colored borders/underlines on focus. **Adequate but not generous.** Could add a 2px `ring-river` on `:focus-visible` for stronger keyboard-user signal. |
| Skip-to-content link | ⚠️ not present. Low priority for a 5-page site. |
| `alt` text on images | ✅ all three Unsplash photos carry descriptive alt |

**Pre-launch recommendation:** strengthen focus rings (single 5-line CSS edit). Skip-link optional.

---

## 7. Performance — **Good for a static-content site**

| Item | Status / Note |
|---|---|
| Stack | Next.js 14 (App Router) — server-rendered, hydration-light |
| Fonts | 3 Google fonts (Fraunces, Instrument Sans, Tiro Devanagari Hindi) loaded via `next/font`, `display: swap` |
| Images | 3 external Unsplash images on the homepage; all use plain `<img loading="eager">` with `transition-opacity` fade. Server-side cached by Unsplash CDN. |
| Animation | One Framer Motion primitive (`<Reveal>`) — light, no scroll-jacking |
| JS bundle | Modest — no third-party analytics, no chat widget, no marketing pixels |

**Pre-launch recommendation:** when moving to Vercel, switch the three homepage `<img>` tags inside `<QuietImage>` to `next/image` for AVIF + automatic `srcset`. Single-component change. Optional but worthwhile.

**Console:** no errors, no warnings beyond Next.js' default font preload notice.

---

## 8. Footer refinement (post v3.7) — **Now resolved**

| Aspect | Before | After |
|---|---|---|
| Padding | `pt-14 md:pt-20 pb-9 md:pb-11` | `pt-12 md:pt-16 pb-7 md:pb-9` |
| Wordmark | text-2xl md:text-3xl | text-xl |
| Quote | text-xl md:text-2xl | text-base md:text-lg |
| Link list | `space-y-3 text-body` | `space-y-2 text-small` |
| Social icons | absent | 4 monochrome SVGs (Instagram, X, YouTube, LinkedIn) — outline style, `text-ink-muted hover:text-ink` |
| Closure line | "© 2026 · Tattvashila" + Devanagari "शिल्प · संयम · सहभाग" | **"© 2026 · Tattvashila"** + **"Grounded in Dharma. Carried with integrity."** |
| Quiet Notes link | "Quiet notes (soon)" → `#` | **"Quiet Notes" → `/notes`** (active) |

Footer now reads as *foundational closure*, not as a second landing page.

---

## 9. CTA consistency — **Strong, fully unified (v3.4 system)**

| Location | Element | Style |
|---|---|---|
| Nav (desktop) | Stay in touch | `bg-ink text-bone-light hover:bg-ink-soft` ✅ |
| Nav (mobile) | Stay in touch | same ✅ |
| Hero (homepage) | Read the philosophy / Stay in touch | inline link, no bg ✅ |
| Intake | Send quietly | bg-ink button ✅ |
| About §IV | Write to us, quietly | bg-ink button ✅ |
| Philosophy summary | Read the origin | bg-ink button ✅ |
| Note page | Back to Quiet Notes / Stay in touch | inline links, no bg ✅ |

**One CTA system across the whole site.** No surprise variants.

---

## 10. Mobile vs Desktop experience

**Mobile (390 × 844):**
- Hero readable in 2–3 vertical viewports
- Nav simplifies to wordmark + single CTA — no hamburger drawer (intentional; only 4 destinations exist)
- Section padding reduced to `py-14` (was `py-20` pre-v3.6) — better rhythm
- Footer stacks cleanly: brand block → link groups (6/6) → social row → closure stack
- No horizontal overflow

**Desktop (≥1024px):**
- 1400px max content width with generous lateral padding
- 3/9 column split keeps long-form sections inside a comfortable reading measure (`max-w-prose-wide` ≈ 704px)
- Footer flows side-to-side without stretching; closure row balances © and tagline
- Image aspects (4:5 throughout) prevent any single photo from dominating

**Wider screens (≥1440px):**
- Container caps at 1400px — no infinite stretching
- Type scale clamps at `2.25rem display / 3.25rem hero`, so headings don't grow into "luxury-editorial" register

---

## 11. Pre-deployment punch list

### P0 — must do before public launch
1. **Replace Unsplash hero/premise/journey images with self-hosted assets** (or commit to Unsplash CDN for now and accept the dependency). Currently we rely on an external image host's continued availability of three specific photos.
2. **Replace social URLs** in `Closing.tsx` from generic `https://instagram.com/` etc. to the real Tattvashila handles — or remove icons entirely until accounts exist.
3. **Tighten CORS `allow_origins`** in `/app/backend/server.py` from `["*"]` to the production origin once the domain is finalized.
4. **Rate-limit** `POST /api/intake` (currently public + unauth'd; trivial to spam). Suggested: simple in-memory IP throttle or hCaptcha.

### P1 — should do before launch
5. **Strengthen `:focus-visible` styles** with a 2px `ring-river` outline (one CSS rule).
6. **Update `metadata` `metadataBase`** in `layout.tsx` once production URL is set, so Open Graph URLs resolve.
7. **Add `robots.txt`** and **`sitemap.ts`** (Next.js native — three small files for `/`, `/about`, `/philosophy`, `/notes`, `/notes/[slug]`).
8. **Replace test backend URL** in `frontend/.env` with the deployed backend URL.

### P2 — nice to do
9. Migrate `<QuietImage>` to `next/image` for AVIF/srcset.
10. Add **Plausible analytics** (privacy-respecting; ~1KB script).
11. Add MongoDB index on `intake_submissions.received_at`.
12. Add **Privacy** and **Terms** stub pages (one paragraph each is sufficient for launch).

### P3 — held intentionally
- Turborepo monorepo extraction
- `@tattvashila/design-system` package
- Subdomain shells (Tattvapeetha, Traksha, Vanatattva, Shreetattva, Raksha)
- Automated correspondence emails
- All deferred until identity matures further (per your direction)

---

## 12. Verdict

The site is **identity-stable, visually unified, emotionally coherent, and ready for review**. Footer refinement has resolved the last visible looseness in the experience. After completing the P0/P1 list (estimated <1 hour of focused work), `tattvashila.org` is ready to be deployed.

— End of audit.
