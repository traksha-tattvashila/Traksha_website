import type { ComponentType } from "react";
import { useParams } from "wouter";
import TattvaprashnaManuscriptPage from "./TattvaprashnaManuscriptPage";
import NotFound from "./not-found";

/**
 * Manuscript resolver for `/granthalaya/:slug/:lang`.
 *
 * Manuscripts are full hand-set texts, so each is its own component. The
 * registry maps `slug/lang` to that component; everything not present resolves
 * to the not-found page. New manuscripts (or new language renderings) are added
 * here, keyed by the same routeLang declared on the grantha's language list.
 */
const MANUSCRIPTS: Record<string, ComponentType> = {
  "tattvaprashna/hindi": TattvaprashnaManuscriptPage,
};

export default function ManuscriptRoute() {
  const { slug, lang } = useParams<{ slug: string; lang: string }>();
  const Manuscript = MANUSCRIPTS[`${slug}/${lang}`];

  if (!Manuscript) return <NotFound />;
  return <Manuscript />;
}
