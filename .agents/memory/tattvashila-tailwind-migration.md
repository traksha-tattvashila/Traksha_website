---
name: Tattvashila Tailwind v4 migration
description: How the app's Tailwind v3 CSS was converted to v4 when porting to Replit's pnpm_workspace stack.
---

# Tailwind v3 → v4 migration for Tattvashila

## The rule
The workspace catalog pins `tailwindcss: ^4.x` and `@tailwindcss/vite`. Any react-vite scaffold uses v4. The imported app used v3 syntax (`@tailwind base/components/utilities`) and `tailwind.config.ts`.

**Why:** The createArtifact scaffold generates v4-compatible `vite.config.ts` (with `@tailwindcss/vite` plugin). Mixing v3 CSS syntax with the v4 plugin causes a silent no-op — no utilities are generated.

## How to apply
When restoring content from a v3 source into a v4 scaffold:

1. Replace `@tailwind base; @tailwind components; @tailwind utilities;` with `@import "tailwindcss";`
2. Add a `@theme { }` block in the CSS with all custom tokens (colours, font families, font sizes, letter-spacing, max-widths, easing):
   - Colours: `--color-{name}: {value}` → generates `bg-{name}`, `text-{name}`, `border-{name}`
   - Fonts: `--font-{name}: {family stack}` → generates `font-{name}`
   - Font sizes: `--text-{name}: {size}` + `--text-{name}--line-height: {lh}` → generates `text-{name}`
   - Letter spacing: `--tracking-{name}: {value}` → generates `tracking-{name}`
   - Max widths: `--max-width-{name}: {value}` → generates `max-w-{name}`
   - Easing: `--ease-{name}: {cubic-bezier(...)}` → generates `ease-{name}`
3. Keep the `:root { --var: value }` block for plain CSS rules that use `var(--*)` directly
4. Do NOT copy `tailwind.config.ts` or `postcss.config.js` into the v4 scaffold — they are v3 artefacts

## Tattvashila's custom tokens
All defined in `artifacts/tattvashila/src/index.css` under `@theme`. Source of truth for values:
- Colours: `src/tokens/colors.ts`
- Typography: `src/tokens/typography.ts`
- Motion easing: `src/system/motion/easings.ts` (`EASE_GENTLE_CSS = "cubic-bezier(0.22, 0.61, 0.36, 1)"`)
- Spacing: `src/tokens/spacing.ts`
