import type { TaxonomyCategory, TaxonomyTag } from "../types/taxonomy";

export const TAXONOMY_CATEGORIES: TaxonomyCategory[] = [
  {
    slug: "inner-life",
    label: "Inner Life",
    domain: "contemplative-practice",
    description:
      "Reflections on the quality of inner experience — attention, fatigue, presence, and the texture of an ordinary day.",
    traditionalEquivalent: "antaḥkaraṇa",
  },
  {
    slug: "awareness-and-discipline",
    label: "Awareness & Discipline",
    domain: "applied-awareness",
    description:
      "The integration of awareness and voluntary restraint into ordinary structures of work, family, and responsibility.",
    traditionalEquivalent: "viveka-sādhanā",
  },
  {
    slug: "modern-condition",
    label: "Modern Condition",
    domain: "cultural-observation",
    description:
      "Observation of modern life — its pace, its pressures, and the quiet costs of living without inner pause.",
  },
  {
    slug: "philosophical-foundations",
    label: "Philosophical Foundations",
    domain: "philosophical-inquiry",
    description:
      "The working philosophical ideas behind Tattvashila — drawn from many traditions, held together by their coherence.",
  },
  {
    slug: "institutional-doctrine",
    label: "Institutional Doctrine",
    domain: "institutional-doctrine",
    description:
      "Formal positions and foundational statements of Tattvashila as an institution.",
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
      "Work, family, responsibility, and the world as it is — not as we imagine it should be.",
  },
  {
    slug: "inner-pause",
    label: "Inner Pause",
    description: "The structural absence of stimulation — not emptiness, but presence.",
  },
  {
    slug: "discipline",
    label: "Discipline",
    description: "Voluntary constraint as a path to inner freedom.",
  },
  {
    slug: "awareness",
    label: "Awareness",
    description: "The quality of knowing what is actually happening — inside and outside.",
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
];

export function getCategoryBySlug(slug: string): TaxonomyCategory | undefined {
  return TAXONOMY_CATEGORIES.find((c) => c.slug === slug);
}

export function getTagsBySlug(slugs: string[]): TaxonomyTag[] {
  return slugs
    .map((s) => TAXONOMY_TAGS.find((t) => t.slug === s))
    .filter(Boolean) as TaxonomyTag[];
}
