export type EasingArray = readonly [number, number, number, number];

/**
 * The governing easing curve for Tattvashila.
 * Architectural, quiet, intentional — opens promptly, settles with restraint.
 * Identical to CSS cubic-bezier(0.22, 0.61, 0.36, 1).
 */
export const EASE_GENTLE: EasingArray = [0.22, 0.61, 0.36, 1];
export const EASE_GENTLE_CSS = "cubic-bezier(0.22, 0.61, 0.36, 1)";
