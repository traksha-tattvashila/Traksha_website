export interface ImageMeta {
  src: string;
  alt: string;
  credit?: string;
  aspectHint?: string;
  fallbackTone?: "warm" | "river" | "stone";
  loading?: "eager" | "lazy";
}
