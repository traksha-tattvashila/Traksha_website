# Tattvashila — Homepage Prototype, Design System v0.1

A living document. This describes the prototype currently deployed at the root.

---

## 1. Section-by-section rationale

**§ Threshold (hero)**
A near-empty first viewport. Devanagari wordmark `तत्त्वशिला` translated as "the foundation stone" sets the philosophical premise without explanation. The headline `Awareness, integrated into life.` is one sentence — the only thing the visitor must read. The subhead names what the site is *not*, restraining expectation. A single quiet cue ("Begin slowly") replaces a CTA. No buttons, no badges.

**§ I — The Premise**
A confessional opener. The headline directly addresses the visitor's likely skepticism: *this is not another system that asks you to become someone else.* Three short paragraphs follow the rhythm of measured disagreement → clarification → reassurance. Italics on `become someone else` carry the emotional weight; the river-blue accent appears once.

**§ II — Philosophy**
Four tenets — Awareness, Responsibility, Discipline, Conscious participation — set as numbered ideas (`i.`, `ii.`, `iii.`, `iv.`) with old-style figures, not bullets. Each is a paragraph, not a slogan. The leading paragraph acknowledges that "none of these are new" — disarming guru-energy.

**§ III — Ecosystem**
The four sub-entities (Tattvapeetha, Traksha, Vanatattva, Shreetattva) are presented as a hairline-divided list, not a card grid. Each row carries: name, Devanagari mark, single-sentence essence, and a status (`Becoming available`, `In preparation`, `On the horizon`) — borrowing the calmer tense of "becoming" rather than "Coming Soon" startup language. No logos, no links yet — the point is orientation, not navigation.

**§ IV — Journey**
Three "movements" (not steps): Recognition → Integration → Continuity. They sit horizontally on desktop, vertically on mobile. Hairline rules above each phase replace numbered circles or progress bars. Language is abstract on purpose — visitors should sense that *there is a path* without being handed a map.

**§ V — Stay in touch (Reflective intake)**
Two questions, one per row, separated by 64px of breath. No "Subscribe" button — a small typographic `Send →` line that extends on hover. Helper text beneath confirms the contract: *"We write rarely. When we do, it will be worth reading."* On submit, the form replaces itself with a single line: *"Received, with care."* No checkmark icon, no confetti.

**§ Closing**
A single italic line — *"A foundation is laid quietly, long before anything is built upon it."* — followed by the wordmark, the year, and three Devanagari concepts (`शिल्प · संयम · सहभाग` — craft, restraint, participation). The site exits the way it entered: slowly.

---

## 2. Typography system

**Display — Fraunces** *(opsz, 300–500, italic enabled)*
Used for headlines, section titles, tenet titles, ecosystem names. Italic axis carries emotional accents (`integrated`, `become someone else`, `if you'd like`). Letter-spacing tightened slightly (`-0.015em` to `-0.02em`).

**Body — Instrument Sans** *(400, 500)*
Used for paragraphs, helper text, and form fields. Quiet, contemporary, deliberately not Inter. Line-height 1.6–1.75 for breathable reading.

**Devanagari accent — Tiro Devanagari Hindi** *(400)*
Used three places only: (a) hero eyebrow `तत्त्वशिला`, (b) ecosystem chamber names, (c) closing footer concepts. Never decorative.

**Type scale — six sizes total**
| Token | Size | Use |
|---|---|---|
| `micro` | 12px / 0.08em tracking | section labels, eyebrow, status |
| `small` | 15px | helper text, nav |
| `body` | 17px | paragraphs |
| `lead` | 20px | hero subhead, lead paragraphs |
| `display` | clamp(36→60px) | section titles |
| `hero` | clamp(44→84px) | one place — the hero |

Numerals: old-style figures (`onum`) for body and ordinals; tabular figures (`tnum`) for footer year.

---

## 3. Spacing system

A doubled rhythm (`s = 8px`):

- Inline gaps: `2s` (16px) — within a single grouped unit
- Stack within paragraph: `4s` (32px)
- Between heading & body: `8s–12s` (64–96px)
- Between section heading & section content: `20s` (160px)
- Between sections (vertical): `32s–48s` desktop / `24s–32s` mobile (256–384px / 192–256px)

The website breathes in **section-pairs**: a label column (12-col grid: 3 cols) + content column (9 cols), with 12-col gap. On mobile, label stacks above content with the same generous breathing room — *the emotional pacing does not compress on mobile.*

Max content widths:
- Reading paragraph: `38rem` (~608px)
- Wider prose (headlines): `44rem` (~704px)
- Page frame: `1400px` with `6rem` (96px) lateral padding on desktop, `1.5rem` (24px) on mobile

---

## 4. Color system — Mood B "Rivered Paper"

| Token | Hex | Use |
|---|---|---|
| `bone` | `#EAE6DD` | page background |
| `bone-light` | `#EFEBE2` | hover surfaces |
| `ink` | `#1F2230` | primary text |
| `ink-soft` | `#2A2E3D` | secondary text |
| `ink-muted` | `#4A4F60` | tertiary / nav inactive |
| `ink-faint` | `#7A7F8E` | helper / status |
| `river` | `#3A4A6B` | the *one* accent — used sparingly |
| `river-deep` | `#2C3A57` | error / hover |
| `river-soft` | `#5A6A87` | numerals (`i.`, `ii.`) |
| `rule` | `rgba(31,34,48,0.12)` | hairlines |

All text passes WCAG AA on `bone`. The accent (`river`) is used in italic words, hover transitions, the input caret, and selection — never as a button background, never on entire blocks.

A near-imperceptible SVG noise grain (3.5% opacity, multiply blend) overlays the page to imitate paper grain.

---

## 5. Motion philosophy

Single primitive: `<Reveal>`.
- **Behavior:** 24px lift + opacity 0→1
- **Duration:** 1100ms (one-tenth of a second slower than what feels right)
- **Easing:** `cubic-bezier(0.22, 0.61, 0.36, 1)` — a slow exit, no overshoot
- **Trigger:** in-view, once, with `-80px` margin so reveals fire *before* fully entering view
- **Respects** `prefers-reduced-motion`

Hover transitions:
- `colors`: 500–700ms
- `border-color` on inputs: 700ms
- Underline grow on `Send →` line: 700ms
- *Never* `transition: all`

Forbidden in this system: bounce, spring, rotate, scale > 1.02, parallax, marquee, autoplay video, scroll-jacking, pinned sections.

---

## 6. Responsive (mobile-first) behavior

- 12-col grid collapses to single column at `md` (768px) breakpoint
- Section labels move *above* content on mobile (not hidden) — pacing preserved
- Type scale via `clamp()` — no abrupt jumps
- Lateral padding: 24px mobile → 40px tablet → 64–96px desktop
- Vertical section padding: 192px mobile → 256–384px desktop
- Nav: full links on `md+`, single quiet `Stay in touch` link on mobile (no hamburger drawer — there are only 4 destinations and they're all on the same page)

---

## 7. Accessibility & semantics

- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`, `<ol>`, `<form>`, `<label>` properly bound to inputs
- Focus-visible: thin underline on links, river border on form fields — no glowing rings
- `prefers-reduced-motion` honored throughout
- Devanagari uses `lang="hi"`-eligible font stack
- All interactive and content-bearing elements carry `data-testid`

---

## 8. What's still ahead (not yet built)

- Subdomain shell (`traksha.tattvashila.org` etc.) — design system will be exported as `@tattvashila/design-system` package when needed
- About / philosophy long-form essay page
- Quiet Notes (rare correspondence archive)
- Subtle motion on the wordmark itself (optional, lower priority)

---

*Built quietly. The web has enough noise.*
