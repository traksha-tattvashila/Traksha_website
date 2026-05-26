/**
 * All durations in seconds — intended for Framer Motion transitions.
 * Use durationCSS for Tailwind / CSS transition utilities.
 */
export const duration = {
  fast:     0.3,
  default:  0.5,
  slow:     0.65,
  reveal:   0.85,
  hero:     1.0,
  verySlow: 1.2,
} as const;

/** CSS equivalents for Tailwind transition utilities. */
export const durationCSS = {
  fast:     "300ms",
  default:  "500ms",
  slow:     "600ms",
  verySlow: "1200ms",
} as const;
