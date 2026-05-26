import type { ImageMeta } from "./types";

export const images = {
  heroThreshold: {
    src: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1400&q=80",
    alt: "Soft morning light falling on a quiet, lived-in room",
    credit: "An ordinary morning, an ordinary page.",
    aspectHint: "4/5",
    fallbackTone: "warm",
    loading: "eager",
  },
  heroPremise: {
    src: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=1400&q=80",
    alt: "A person reading a book between library shelves — quiet, ordinary attention",
    credit: "The work of paying attention.",
    aspectHint: "4/5",
    fallbackTone: "warm",
    loading: "eager",
  },
} as const satisfies Record<string, ImageMeta>;

export type ImageKey = keyof typeof images;
