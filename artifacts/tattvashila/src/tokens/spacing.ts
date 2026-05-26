export const container = {
  maxWidth: "1400px",
} as const;

export const sectionPadding = {
  sm:   "py-14 md:py-20",
  base: "py-20 md:py-28",
  md:   "py-24 md:py-32",
  lg:   "py-28 md:py-36",
} as const;

export type SectionSize = keyof typeof sectionPadding;
