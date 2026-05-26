import { EASE_GENTLE } from "./easings";
import { duration } from "./durations";

/**
 * Canonical Framer Motion variant definitions for Tattvashila.
 * Motion should feel: architectural, quiet, intentional, emotionally mature.
 *
 * Usage:
 *   <motion.div variants={fadeInVariants} initial="hidden" animate="visible" />
 *
 * For delayed entrance, wrap in a parent with staggerChildren or pass
 * a custom transition prop to override delay.
 */

export const fadeInVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.slow, ease: EASE_GENTLE } },
} as const;

export const revealUpVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: EASE_GENTLE },
  },
} as const;

export const heroEntranceVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.hero, ease: EASE_GENTLE },
  },
} as const;

export const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.default, ease: EASE_GENTLE } },
  exit:    { opacity: 0, transition: { duration: duration.fast,    ease: EASE_GENTLE } },
} as const;

export const staggerContainerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
} as const;
