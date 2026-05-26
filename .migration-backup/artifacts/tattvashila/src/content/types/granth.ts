export type GranthStatus =
  | "forthcoming"
  | "in-composition"
  | "published"
  | "revised";

export interface GranthChapter {
  slug: string;
  chapterNumber: string;
  title: string;
  subtitle?: string;
  summary: string;
  body?: string[];
  status: GranthStatus;
  publishedAt?: string;
}

export interface GranthVolume {
  slug: string;
  volumeNumber: string;
  title: string;
  subtitle?: string;
  summary: string;
  chapters: GranthChapter[];
  status: GranthStatus;
}

export interface Granth {
  slug: string;
  title: string;
  devanagariTitle?: string;
  subtitle?: string;
  summary: string;
  volumes: GranthVolume[];
  author: string;
  domain: string;
  status: GranthStatus;
  compositionBeganAt?: string;
  canonicalUrl?: string;
}

export interface CrossReference {
  sourceGranth: string;
  sourceChapter: string;
  targetSlug: string;
  targetKind: "note" | "granth-chapter" | "principle";
  relationKind: "elaborates" | "quoted-in" | "responds-to" | "continues";
  annotation?: string;
}

export interface Commentary {
  slug: string;
  targetSlug: string;
  targetKind: "note" | "granth-chapter" | "principle";
  title: string;
  body: string[];
  author: string;
  publishedAt: string;
}
