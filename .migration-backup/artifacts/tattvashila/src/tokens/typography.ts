export const fontFamily = {
  display: ["Fraunces", "Georgia", "serif"],
  sans:    ["Instrument Sans", "system-ui", "sans-serif"],
  deva:    ["Tiro Devanagari Hindi", "serif"],
} as const;

export const fontSize = {
  micro:        ["0.75rem",                       { lineHeight: "1.5",   letterSpacing: "0.08em"   }],
  small:        ["0.9375rem",                     { lineHeight: "1.6"                              }],
  body:         ["1.0625rem",                     { lineHeight: "1.72"                             }],
  lead:         ["1.175rem",                      { lineHeight: "1.7"                              }],
  title:        ["clamp(1.4rem, 2.4vw, 1.85rem)",   { lineHeight: "1.25",  letterSpacing: "-0.01em"  }],
  subhead:      ["clamp(1.5rem, 2.6vw, 2rem)",       { lineHeight: "1.22",  letterSpacing: "-0.012em" }],
  display:      ["clamp(1.625rem, 3.1vw, 2.25rem)",  { lineHeight: "1.2",   letterSpacing: "-0.014em" }],
  "display-xl": ["clamp(1.85rem, 4vw, 2.85rem)",     { lineHeight: "1.16",  letterSpacing: "-0.016em" }],
  hero:         ["clamp(2rem, 4.5vw, 3.1rem)",       { lineHeight: "1.1",   letterSpacing: "-0.022em" }],
} as const;

export const letterSpacing = {
  wider:  "0.08em",
  widest: "0.15em",
} as const;

export const maxWidth = {
  reading:       "40rem",
  "prose-wide":  "46rem",
  "reading-lg":  "56rem",
} as const;
