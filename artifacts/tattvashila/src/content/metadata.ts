import type { Note } from "../lib/notes";

export interface PageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  canonicalUrl?: string;
}

export interface PublicationMeta extends PageMeta {
  ogType: "article";
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  articleAuthor?: string;
  structuredData?: Record<string, unknown>;
}

const SITE_NAME = "Tattvashila";
const SITE_URL = "https://tattvashila.com";
const SEP = " \u2014 ";

export function buildTitle(pageTitle: string): string {
  return `${pageTitle}${SEP}${SITE_NAME}`;
}

export function buildCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

const BASE_DESCRIPTION =
  "Tattvashila is an institution for grounded, conscious living. Awareness, responsibility and discipline \u2014 integrated into ordinary life.";

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: `${SITE_NAME}${SEP}Awareness, integrated into life.`,
    description: BASE_DESCRIPTION,
    ogTitle: `${SITE_NAME}${SEP}Awareness, integrated into life.`,
    ogDescription:
      "A quieter way to live with awareness \u2014 without leaving the world you\u2019ve built.",
    ogType: "website",
    canonicalUrl: buildCanonicalUrl("/"),
  },
  philosophy: {
    title: buildTitle("Philosophy"),
    description:
      "The working ideas behind Tattvashila. Awareness, responsibility, discipline, and conscious participation \u2014 carried into ordinary life.",
    ogTitle: buildTitle("Philosophy"),
    ogDescription:
      "Awareness, integrated into ordinary life. The philosophical foundations of Tattvashila.",
    ogType: "website",
    canonicalUrl: buildCanonicalUrl("/philosophy"),
  },
  about: {
    title: buildTitle("About"),
    description:
      "Tattvashila is an institution for grounded, conscious living \u2014 awareness, responsibility and discipline, carried into ordinary life.",
    ogTitle: buildTitle("About"),
    ogDescription:
      "What Tattvashila is, who holds it, and what\u2019s here.",
    ogType: "website",
    canonicalUrl: buildCanonicalUrl("/about"),
  },
  origin: {
    title: buildTitle("Origin"),
    description:
      "Tattvashila is not a movement, a startup, or a personal vision. It is an institution, built carefully over time.",
    ogTitle: buildTitle("Origin"),
    ogDescription:
      "This did not begin as an idea. It began as a series of quiet observations.",
    ogType: "website",
    canonicalUrl: buildCanonicalUrl("/origin"),
  },
  notes: {
    title: buildTitle("Quiet Notes"),
    description:
      "Rare reflections from Tattvashila, written when there is something honest worth saying.",
    ogTitle: buildTitle("Quiet Notes"),
    ogDescription:
      "Rare reflections, written when there is something honest worth saying.",
    ogType: "website",
    canonicalUrl: buildCanonicalUrl("/notes"),
  },
  archive: {
    title: buildTitle("Archive"),
    description:
      "A complete institutional record of all Tattvashila publications, organised by year and domain of inquiry.",
    ogTitle: buildTitle("Archive"),
    ogDescription:
      "A complete institutional record of all publications — held slowly, by design.",
    ogType: "website",
    canonicalUrl: buildCanonicalUrl("/archive"),
  },
  granthalaya: {
    title: buildTitle("Granthālaya"),
    description:
      "The canonical institutional manuscript space of Tattvashila. Tattvaprashna, Tattvagrantha, and the works in composition.",
    ogTitle: buildTitle("Granthālaya — ग्रन्थालय"),
    ogDescription:
      "The canonical institutional manuscript library. Texts composed carefully, held patiently, released when ready.",
    ogType: "website",
    canonicalUrl: buildCanonicalUrl("/granthalaya"),
  },
  catalogue: {
    title: buildTitle("The Catalogue — Granthālaya"),
    description:
      "The manuscript catalogue of Tattvashila — the works of the Granthālaya in their intended order, each held until ready.",
    ogTitle: buildTitle("The Catalogue — Granthālaya"),
    ogDescription:
      "The works of the Granthālaya, in their intended order. Each held until ready.",
    ogType: "website",
    canonicalUrl: buildCanonicalUrl("/granthalaya/catalogue"),
  },
  constitution: {
    title: buildTitle("Constitution"),
    description:
      "A plain record of the principles Tattvashila holds itself to \u2014 written down so they can be checked against, not just claimed.",
    ogTitle: buildTitle("Constitution"),
    ogDescription:
      "How Tattvashila is governed \u2014 identity, participation, and growth, stated plainly.",
    ogType: "website",
    canonicalUrl: buildCanonicalUrl("/constitution"),
  },
  contact: {
    title: buildTitle("Contact"),
    description:
      "Write to Tattvashila directly. No support desk, no routing \u2014 a direct address for questions, corrections, or correspondence.",
    ogTitle: buildTitle("Contact"),
    ogDescription:
      "Write to us directly \u2014 a question, a correction, or a response to something you\u2019ve read.",
    ogType: "website",
    canonicalUrl: buildCanonicalUrl("/contact"),
  },
  tattvaprashna: {
    title: buildTitle("Tattvaprashna — तत्त्वप्रश्न"),
    description:
      "A critical inquiry into human freedom, order, and responsibility. The pregrantha of the Tattvagrantha series — the necessary preparation.",
    ogTitle: buildTitle("Tattvaprashna — तत्त्वप्रश्न"),
    ogDescription:
      "The prerequisite to all that follows. A critical inquiry into human freedom, order, and responsibility.",
    ogType: "article",
    canonicalUrl: buildCanonicalUrl("/granthalaya/tattvaprashna"),
  },
};

export function buildNotePublicationMeta(note: Note): PublicationMeta {
  const canonical =
    note.canonicalUrl ?? buildCanonicalUrl(`/notes/${note.slug}`);

  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.summary || note.excerpt,
    datePublished: note.date,
    ...(note.updatedAt ? { dateModified: note.updatedAt } : {}),
    author: {
      "@type": "Person",
      name: note.signed,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: canonical,
    inLanguage: note.locale === "hi" ? "hi-IN" : note.locale === "sa" ? "sa" : "en-GB",
  };

  return {
    title: buildTitle(note.title),
    description: note.summary || note.excerpt,
    ogTitle: buildTitle(note.title),
    ogDescription: note.summary || note.excerpt,
    ogType: "article",
    canonicalUrl: canonical,
    articlePublishedTime: note.date,
    articleModifiedTime: note.updatedAt,
    articleSection: note.category,
    articleTags: note.tags,
    articleAuthor: note.signed,
    structuredData,
  };
}
