import type {
  TaxonomyCategory,
  TaxonomyTag,
  SemanticRelationship,
  KnowledgeDomain,
  EditorialMode,
} from "../types/taxonomy";

export const TAXONOMY_CATEGORIES: TaxonomyCategory[] = [
  {
    slug: "inner-life",
    label: "Inner Life",
    domain: "contemplative-practice",
    description:
      "Reflections on the quality of inner experience \u2014 attention, fatigue, presence, and the texture of an ordinary day.",
    traditionalEquivalent: "anta\u1e25kara\u1e47a",
  },
  {
    slug: "awareness-and-discipline",
    label: "Awareness \u0026 Discipline",
    domain: "applied-awareness",
    description:
      "The integration of awareness and voluntary restraint into ordinary structures of work, family, and responsibility.",
    traditionalEquivalent: "viveka-s\u0101dhan\u0101",
  },
  {
    slug: "modern-condition",
    label: "Modern Condition",
    domain: "cultural-observation",
    description:
      "Observation of modern life \u2014 its pace, its pressures, and the quiet costs of living without inner pause.",
  },
  {
    slug: "philosophical-foundations",
    label: "Philosophical Foundations",
    domain: "philosophical-inquiry",
    description:
      "The working philosophical ideas behind Tattvashila \u2014 drawn from many traditions, held together by their coherence.",
  },
  {
    slug: "institutional-doctrine",
    label: "Institutional Doctrine",
    domain: "institutional-doctrine",
    description:
      "Formal positions and foundational statements of Tattvashila as an institution.",
  },
  {
    slug: "textual-tradition",
    label: "Textual Tradition",
    domain: "textual-tradition",
    description:
      "Engagement with primary sources across philosophical traditions \u2014 read carefully, not ceremonially.",
  },
];

export const TAXONOMY_TAGS: TaxonomyTag[] = [
  {
    slug: "tiredness",
    label: "Tiredness",
    description: "The particular fatigue of modern life that sleep does not repair.",
  },
  {
    slug: "attention",
    label: "Attention",
    description: "The quality and direction of inner focus.",
  },
  {
    slug: "ordinary-life",
    label: "Ordinary Life",
    description:
      "Work, family, responsibility, and the world as it is \u2014 not as we imagine it should be.",
  },
  {
    slug: "inner-pause",
    label: "Inner Pause",
    description: "The structural absence of stimulation \u2014 not emptiness, but presence.",
  },
  {
    slug: "discipline",
    label: "Discipline",
    description: "Voluntary constraint as a path to inner freedom.",
  },
  {
    slug: "awareness",
    label: "Awareness",
    description: "The quality of knowing what is actually happening \u2014 inside and outside.",
  },
  {
    slug: "contemplation",
    label: "Contemplation",
    description: "Sustained, undistracted attention turned inward.",
  },
  {
    slug: "responsibility",
    label: "Responsibility",
    description: "The active assumption of care for oneself and others.",
  },
  {
    slug: "stimulation",
    label: "Stimulation",
    description:
      "The pervasive informational and emotional load of contemporary life.",
  },
  {
    slug: "body-and-sleep",
    label: "Body \u0026 Sleep",
    description:
      "The physical substrate of inner life \u2014 rest, repair, and somatic knowing.",
  },
];

export const SEMANTIC_RELATIONSHIPS: SemanticRelationship[] = [];

export function getCategoryBySlug(slug: string): TaxonomyCategory | undefined {
  return TAXONOMY_CATEGORIES.find((c) => c.slug === slug);
}

export function getTagsBySlug(slugs: string[]): TaxonomyTag[] {
  return slugs
    .map((s) => TAXONOMY_TAGS.find((t) => t.slug === s))
    .filter(Boolean) as TaxonomyTag[];
}

export function getCategoriesByDomain(domain: KnowledgeDomain): TaxonomyCategory[] {
  return TAXONOMY_CATEGORIES.filter((c) => c.domain === domain);
}

export function getRelationshipsFor(slug: string): SemanticRelationship[] {
  return SEMANTIC_RELATIONSHIPS.filter(
    (r) => r.sourceSlug === slug || r.targetSlug === slug,
  );
}

export function getEditorialModeLabel(mode: EditorialMode): string {
  const labels: Record<EditorialMode, string> = {
    reflective: "Reflective",
    expository: "Expository",
    doctrinal: "Doctrinal",
    conversational: "Conversational",
    archival: "Archival",
  };
  return labels[mode] ?? mode;
}
