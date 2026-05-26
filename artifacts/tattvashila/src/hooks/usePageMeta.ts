import { useEffect } from "react";
import type { PageMeta } from "../content/metadata";

function setMetaTag(attr: string, value: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    document.title = meta.title;
    setMetaTag("name",     "description",        meta.description);
    setMetaTag("property", "og:title",           meta.ogTitle ?? meta.title);
    setMetaTag("property", "og:description",     meta.ogDescription ?? meta.description);
    setMetaTag("name",     "twitter:title",      meta.ogTitle ?? meta.title);
    setMetaTag("name",     "twitter:description",meta.ogDescription ?? meta.description);
  }, [meta.title, meta.description, meta.ogTitle, meta.ogDescription]);
}
