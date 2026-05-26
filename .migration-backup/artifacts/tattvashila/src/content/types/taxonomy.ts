export type KnowledgeDomain =
  | "contemplative-practice"
  | "philosophical-inquiry"
  | "institutional-doctrine"
  | "cultural-observation"
  | "applied-awareness"
  | "textual-tradition";

export type EditorialMode =
  | "reflective"
  | "expository"
  | "doctrinal"
  | "conversational"
  | "archival";

export type TraditionReference =
  | "vedantic"
  | "buddhist"
  | "stoic"
  | "humanist"
  | "cross-traditional"
  | "independent";

export interface TaxonomyCategory {
  slug: string;
  label: string;
  domain: KnowledgeDomain;
  description: string;
  traditionalEquivalent?: string;
}

export interface TaxonomyTag {
  slug: string;
  label: string;
  description?: string;
}

export interface SemanticRelationship {
  sourceSlug: string;
  targetSlug: string;
  relationKind:
    | "continues"
    | "responds-to"
    | "elaborates"
    | "contrasts"
    | "supplements";
}
