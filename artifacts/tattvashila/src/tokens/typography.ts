export const fontFamily = {
  display: ["Fraunces", "Georgia", "serif"],
  sans:    ["Instrument Sans", "system-ui", "sans-serif"],
  deva:    ["Tiro Devanagari Hindi", "serif"],
} as const;

export const fontSize = {
  micro:        ["0.75rem",                     { lineHeight: "1.5",  letterSpacing: "0.08em"  }],
  small:        ["0.9375rem",                   { lineHeight: "1.55"                            }],
  body:         ["1.0625rem",                   { lineHeight: "1.65"                            }],
  lead:         ["1.15rem",                     { lineHeight: "1.55"                            }],
  title:        ["clamp(1.4rem, 2.4vw, 1.85rem)",  { lineHeight: "1.2",  letterSpacing: "-0.01em"  }],
  subhead:      ["clamp(1.5rem, 2.6vw, 2rem)",     { lineHeight: "1.2",  letterSpacing: "-0.01em"  }],
  display:      ["clamp(1.625rem, 3.1vw, 2.25rem)",{ lineHeight: "1.2",  letterSpacing: "-0.012em" }],
  "display-xl": ["clamp(1.85rem, 4vw, 2.85rem)",   { lineHeight: "1.12", letterSpacing: "-0.015em" }],
  hero:         ["clamp(1.875rem, 4.4vw, 3.25rem)",{ lineHeight: "1.12", letterSpacing: "-0.018em" }],
} as const;

export const letterSpacing = {
  wider:  "0.08em",
  widest: "0.18em",
} as const;

export const maxWidth = {
  reading:      "38rem",
  "prose-wide": "44rem",
} as const;
