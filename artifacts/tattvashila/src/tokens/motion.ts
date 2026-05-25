export const EASE_GENTLE_ARRAY = [0.22, 0.61, 0.36, 1] as const;
export const EASE_GENTLE_CSS   = "cubic-bezier(0.22, 0.61, 0.36, 1)";

export const durations = {
  fast:     "300ms",
  default:  "500ms",
  slow:     "600ms",
  verySlow: "1200ms",
} as const;

export const durationsFM = {
  fast:     0.3,
  default:  0.5,
  slow:     0.65,
  verySlow: 1.2,
} as const;
