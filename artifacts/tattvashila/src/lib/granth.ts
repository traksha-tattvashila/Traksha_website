import type {
  Granth,
  GranthVolume,
  GranthChapter,
  CrossReference,
  Commentary,
} from "../content/types/granth";

export interface GranthRegistry {
  granths: Granth[];
  crossReferences: CrossReference[];
  commentaries: Commentary[];
}

export const GRANTH_REGISTRY: GranthRegistry = {
  granths: [],
  crossReferences: [],
  commentaries: [],
};

export function getGranth(slug: string): Granth | undefined {
  return GRANTH_REGISTRY.granths.find((g) => g.slug === slug);
}

export function getGranthVolume(
  granthSlug: string,
  volumeSlug: string,
): GranthVolume | undefined {
  return getGranth(granthSlug)?.volumes.find((v) => v.slug === volumeSlug);
}

export function getGranthChapter(
  granthSlug: string,
  volumeSlug: string,
  chapterSlug: string,
): GranthChapter | undefined {
  return getGranthVolume(granthSlug, volumeSlug)?.chapters.find(
    (c) => c.slug === chapterSlug,
  );
}

export function getCrossReferencesFor(targetSlug: string): CrossReference[] {
  return GRANTH_REGISTRY.crossReferences.filter(
    (r) => r.targetSlug === targetSlug,
  );
}

export function getCommentariesFor(targetSlug: string): Commentary[] {
  return GRANTH_REGISTRY.commentaries.filter(
    (c) => c.targetSlug === targetSlug,
  );
}

export function getPublishedGranths(): Granth[] {
  return GRANTH_REGISTRY.granths.filter(
    (g) => g.status === "published" || g.status === "in-composition",
  );
}

export function getForthcomingGranths(): Granth[] {
  return GRANTH_REGISTRY.granths.filter((g) => g.status === "forthcoming");
}
