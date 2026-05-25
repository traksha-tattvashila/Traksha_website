export const container = {
  maxWidth: "1400px",
} as const;

export const sectionPadding = {
  sm:   "py-12 md:py-16",
  base: "py-14 md:py-20",
  md:   "py-16 md:py-24",
  lg:   "py-20 md:py-28",
} as const;

export type SectionSize = keyof typeof sectionPadding;
