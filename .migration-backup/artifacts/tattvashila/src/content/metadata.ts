export interface PageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

const SITE_NAME = "Tattvashila";
const SEP = " \u2014 ";

export function buildTitle(pageTitle: string): string {
  return `${pageTitle}${SEP}${SITE_NAME}`;
}

const BASE_DESCRIPTION =
  "Tattvashila is a quiet body of work for grounded, conscious living. Awareness, responsibility and discipline — integrated into ordinary life.";

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: `${SITE_NAME}${SEP}Awareness, integrated into life.`,
    description: BASE_DESCRIPTION,
    ogTitle: `${SITE_NAME}${SEP}Awareness, integrated into life.`,
    ogDescription:
      "A quieter way to live with awareness — without leaving the world you've built.",
  },
  philosophy: {
    title: buildTitle("Philosophy"),
    description:
      "The working ideas behind Tattvashila. Awareness, responsibility, discipline, and conscious participation — carried into ordinary life.",
    ogTitle: buildTitle("Philosophy"),
    ogDescription:
      "Awareness, integrated into ordinary life. The philosophical foundations of Tattvashila.",
  },
  about: {
    title: buildTitle("Origin"),
    description:
      "Tattvashila is not a movement, a startup, or a personal vision. It is a long body of work, put together carefully.",
    ogTitle: buildTitle("Origin"),
    ogDescription:
      "This did not begin as an idea. It began as a series of quiet observations.",
  },
  notes: {
    title: buildTitle("Quiet Notes"),
    description:
      "Rare reflections from Tattvashila, written when there is something honest worth saying.",
    ogTitle: buildTitle("Quiet Notes"),
    ogDescription:
      "Rare reflections, written when there is something honest worth saying.",
  },
};
