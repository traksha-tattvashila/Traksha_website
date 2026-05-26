export type PublicationKind =
  | "note"
  | "essay"
  | "granth-chapter"
  | "response"
  | "reflection";

export type PublicationStatus =
  | "published"
  | "draft"
  | "archived"
  | "forthcoming";

export type PublicationLocale = "en" | "hi" | "sa";

export interface PublicationAuthor {
  name: string;
  role?: string;
  affiliation?: string;
}

export interface PublicationCoverImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Publication {
  slug: string;
  kind: PublicationKind;
  title: string;
  summary: string;
  excerpt: string;
  author: PublicationAuthor;
  publishedAt: string;
  updatedAt?: string;
  publicationStatus: PublicationStatus;
  category: string;
  tags: string[];
  locale: PublicationLocale;
  canonicalUrl?: string;
  coverImage?: PublicationCoverImage;
  readingTime: string;
  relatedPublications?: string[];
}
