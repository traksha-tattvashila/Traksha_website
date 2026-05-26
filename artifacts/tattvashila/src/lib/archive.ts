import { NOTES_SORTED, type Note } from "./notes";
import {
  TAXONOMY_CATEGORIES,
  TAXONOMY_TAGS,
  getCategoryBySlug,
  getTagsBySlug,
} from "../content/taxonomy";
import type { TaxonomyCategory, TaxonomyTag } from "../content/types/taxonomy";

export interface ArchiveGroup<T> {
  key: string;
  label: string;
  items: T[];
}

export interface ArchiveIndex {
  byCategory: ArchiveGroup<Note>[];
  byTag: ArchiveGroup<Note>[];
  byYear: ArchiveGroup<Note>[];
  byStatus: ArchiveGroup<Note>[];
  total: number;
}

export function groupNotesByCategory(): ArchiveGroup<Note>[] {
  const groups: ArchiveGroup<Note>[] = [];

  for (const category of TAXONOMY_CATEGORIES) {
    const items = NOTES_SORTED.filter((n) => n.category === category.slug);
    if (items.length > 0) {
      groups.push({ key: category.slug, label: category.label, items });
    }
  }

  const categorised = new Set(TAXONOMY_CATEGORIES.map((c) => c.slug));
  const uncategorised = NOTES_SORTED.filter((n) => !categorised.has(n.category));
  if (uncategorised.length > 0) {
    groups.push({ key: "uncategorised", label: "Uncategorised", items: uncategorised });
  }

  return groups;
}

export function groupNotesByTag(): ArchiveGroup<Note>[] {
  const groups: ArchiveGroup<Note>[] = [];

  for (const tag of TAXONOMY_TAGS) {
    const items = NOTES_SORTED.filter((n) => n.tags.includes(tag.slug));
    if (items.length > 0) {
      groups.push({ key: tag.slug, label: tag.label, items });
    }
  }

  return groups;
}

export function groupNotesByYear(): ArchiveGroup<Note>[] {
  const map = new Map<string, Note[]>();

  for (const note of NOTES_SORTED) {
    const year = note.date.slice(0, 4);
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(note);
  }

  return Array.from(map.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, items]) => ({ key: year, label: year, items }));
}

export function groupNotesByStatus(): ArchiveGroup<Note>[] {
  const statusOrder = ["published", "forthcoming", "draft", "archived"] as const;
  const groups: ArchiveGroup<Note>[] = [];

  for (const status of statusOrder) {
    const items = NOTES_SORTED.filter((n) => n.publicationStatus === status);
    if (items.length > 0) {
      const label =
        status === "forthcoming"
          ? "Forthcoming"
          : status === "draft"
          ? "In preparation"
          : status === "archived"
          ? "Archive"
          : "Published";
      groups.push({ key: status, label, items });
    }
  }

  return groups;
}

export function buildArchiveIndex(): ArchiveIndex {
  return {
    byCategory: groupNotesByCategory(),
    byTag: groupNotesByTag(),
    byYear: groupNotesByYear(),
    byStatus: groupNotesByStatus(),
    total: NOTES_SORTED.filter((n) => n.publicationStatus === "published").length,
  };
}

export function filterNotes(options: {
  category?: string;
  tag?: string;
  status?: string;
  locale?: string;
}): Note[] {
  return NOTES_SORTED.filter((n) => {
    if (options.category && n.category !== options.category) return false;
    if (options.tag && !n.tags.includes(options.tag)) return false;
    if (options.status && n.publicationStatus !== options.status) return false;
    if (options.locale && n.locale !== options.locale) return false;
    return true;
  });
}

export function resolveCategory(slug: string): TaxonomyCategory | undefined {
  return getCategoryBySlug(slug);
}

export function resolveTags(slugs: string[]): TaxonomyTag[] {
  return getTagsBySlug(slugs);
}
