# Tattvashila

An institution for grounded, conscious living — a public website expressing the Foundation (Philosophy, Origin) and Knowledge & Record (Granthālaya manuscript library, Notes, Archive).

## Run & Operate

- Workflow `artifacts/tattvashila: web` — runs the frontend on port 19271 (preview at `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/tattvashila run typecheck` — frontend typecheck only

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind v4 (`@tailwindcss/vite`), wouter routing
- Fonts: Fraunces (display), Instrument Sans (UI), Tiro Devanagari Hindi (manuscript)
- Motion: Framer Motion with `EASE_GENTLE = cubic-bezier(0.22, 0.61, 0.36, 1)`

## Where things live

- `artifacts/tattvashila/src/` — all frontend source
- `artifacts/tattvashila/src/pages/` — 15 route components (Home, Philosophy, Notes, Granthālaya flow, Archive, Origin, Constitution, Contact, About, 404)
- `artifacts/tattvashila/src/content/` — all static content data (notes, granthalaya, principles, navigation, taxonomy)
- `artifacts/tattvashila/src/tokens/` — design tokens (colors, typography, motion, spacing)
- `artifacts/tattvashila/src/system/` — motion easings, image registry
- `artifacts/tattvashila/src/index.css` — Tailwind v4 `@theme` (all colour/type tokens) + custom CSS classes
- `canon/` — manuscript composition, canonical language, rendering governance

## Architecture decisions

- **Institutional structure is locked at v1.0.** `canon/institutional-constitution.md` is the **single source of truth** for what Tattvashila is and how it is structured. All navigation, content, and implementation decisions must conform to it.
- Tattvashila is the **Institution** (a Saṃsthā), organized into three layers: **Foundation** (Philosophy, Origin), **Knowledge & Record** (Granthālaya, Notes, Archive), and **Traksha** (the technology backbone / implementation layer — TRK Identity, Tattvapeetha, Raksha, Shreetattva, Vanatattva, Volunteer Systems, TattvaCoin, and future functions).
- **Granthālaya is one wing** (a manuscript library within Knowledge & Record) — not the homepage identity and not the institution itself.
- **Traksha is not a product.** It is the implementation layer through which all practical systems operate; everything lives inside one canonical website (no fragmentation into separate web properties).
- The `canon/` documents remain authoritative on manuscript composition, language, rendering fidelity, and preservation. On **structure**, the Constitution is supreme.

## Product

Tattvashila is an institution for grounded, conscious living. Its public website expresses the Foundation (Philosophy, Origin) and the Knowledge & Record (Granthālaya manuscript library, Notes, Archive); its practical functions operate through the Traksha implementation layer. See `canon/institutional-constitution.md` for the authoritative structure.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- **`canon/institutional-constitution.md` — authoritative institutional structure (Constitutional Structure Locked v1.0).** Read before any structural, navigation, or content change.
- `canon/` — manuscript composition, canonical language, rendering fidelity, and preservation governance.
- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
