/**
 * Backward-compatible re-exports.
 * Canonical motion definitions live in src/system/motion/.
 * This file exists so existing imports continue to resolve during the transition.
 */
export {
  EASE_GENTLE       as EASE_GENTLE_ARRAY,
  EASE_GENTLE_CSS,
} from "../system/motion/easings";

export {
  duration          as durationsFM,
  durationCSS       as durations,
} from "../system/motion/durations";
