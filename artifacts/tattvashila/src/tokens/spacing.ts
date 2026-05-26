export const container = {
  maxWidth: "1400px",
} as const;

export const sectionPadding = {
  sm:   "py-12 md:py-16",
  base: "py-16 md:py-24",
  md:   "py-20 md:py-28",
  lg:   "py-24 md:py-32",
} as const;

export type SectionSize = keyof typeof sectionPadding;
