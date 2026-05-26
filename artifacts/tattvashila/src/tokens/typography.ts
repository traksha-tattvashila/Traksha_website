export const fontFamily = {
  display: ["Fraunces", "Georgia", "serif"],
  sans:    ["Instrument Sans", "system-ui", "sans-serif"],
  deva:    ["Tiro Devanagari Hindi", "serif"],
} as const;

export const fontSize = {
  micro:        ["0.75rem",                         { lineHeight: "1.5",   letterSpacing: "0.09em"   }],
  caption:      ["0.8125rem",                       { lineHeight: "1.56",  letterSpacing: "0.04em"   }],
  small:        ["0.9375rem",                       { lineHeight: "1.62"                             }],
  body:         ["1.0625rem",                       { lineHeight: "1.75"                             }],
  lead:         ["1.1875rem",                       { lineHeight: "1.70"                             }],
  title:        ["clamp(1.4rem, 2.4vw, 1.85rem)",  { lineHeight: "1.22",  letterSpacing: "-0.012em" }],
  subhead:      ["clamp(1.5rem, 2.6vw, 2.05rem)",  { lineHeight: "1.20",  letterSpacing: "-0.014em" }],
  display:      ["clamp(1.65rem, 3.1vw, 2.3rem)",  { lineHeight: "1.18",  letterSpacing: "-0.016em" }],
  "display-xl": ["clamp(1.9rem, 4vw, 2.9rem)",     { lineHeight: "1.14",  letterSpacing: "-0.018em" }],
  hero:         ["clamp(2rem, 4.5vw, 3.15rem)",    { lineHeight: "1.08",  letterSpacing: "-0.024em" }],
} as const;

export const letterSpacing = {
  wider:  "0.08em",
  widest: "0.15em",
} as const;

export const maxWidth = {
  reading:        "40rem",
  "prose-wide":   "46rem",
  "reading-lg":   "56rem",
  "reading-slim": "34rem",
} as const;
