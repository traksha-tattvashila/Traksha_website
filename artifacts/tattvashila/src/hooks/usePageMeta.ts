import { useEffect } from "react";
import type { PageMeta, PublicationMeta } from "../content/metadata";

function setMetaTag(attr: string, value: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMetaTags(attr: string, value: string) {
  document
    .querySelectorAll<HTMLMetaElement>(`meta[${attr}="${value}"]`)
    .forEach((el) => el.remove());
}

function setCanonicalLink(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function injectStructuredData(data: Record<string, unknown>) {
  const id = "tattvashila-structured-data";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeStructuredData() {
  document.getElementById("tattvashila-structured-data")?.remove();
}

export function usePageMeta(meta: PageMeta | PublicationMeta) {
  useEffect(() => {
    document.title = meta.title;

    setMetaTag("name", "description", meta.description);
    setMetaTag("property", "og:title", meta.ogTitle ?? meta.title);
    setMetaTag(
      "property",
      "og:description",
      meta.ogDescription ?? meta.description,
    );
    setMetaTag("name", "twitter:title", meta.ogTitle ?? meta.title);
    setMetaTag(
      "name",
      "twitter:description",
      meta.ogDescription ?? meta.description,
    );

    const ogType = meta.ogType ?? "website";
    setMetaTag("property", "og:type", ogType);

    if (meta.canonicalUrl) {
      setCanonicalLink(meta.canonicalUrl);
      setMetaTag("property", "og:url", meta.canonicalUrl);
    }

    const pubMeta = meta as PublicationMeta;

    if (ogType === "article") {
      if (pubMeta.articlePublishedTime) {
        setMetaTag(
          "property",
          "article:published_time",
          pubMeta.articlePublishedTime,
        );
      }
      if (pubMeta.articleModifiedTime) {
        setMetaTag(
          "property",
          "article:modified_time",
          pubMeta.articleModifiedTime,
        );
      }
      if (pubMeta.articleSection) {
        setMetaTag("property", "article:section", pubMeta.articleSection);
      }
      if (pubMeta.articleAuthor) {
        setMetaTag("property", "article:author", pubMeta.articleAuthor);
      }
      removeMetaTags("property", "article:tag");
      pubMeta.articleTags?.forEach((tag) => {
        const el = document.createElement("meta");
        el.setAttribute("property", "article:tag");
        el.setAttribute("content", tag);
        document.head.appendChild(el);
      });

      if (pubMeta.structuredData) {
        injectStructuredData(pubMeta.structuredData);
      }
    } else {
      removeStructuredData();
    }

    return () => {
      removeStructuredData();
    };
  }, [
    meta.title,
    meta.description,
    meta.ogTitle,
    meta.ogDescription,
    meta.ogType,
    meta.canonicalUrl,
  ]);
}
