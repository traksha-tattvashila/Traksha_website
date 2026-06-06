# [Project name]

_Replace the heading above with the project's name, and this line with one sentence describing what this app does for users._

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

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
