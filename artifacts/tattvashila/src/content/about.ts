export const ABOUT_EYEBROW = "ABOUT";
export const ABOUT_HEADING = "What Tattvashila is.";

export interface AboutParagraph {
  label?: string;
  text: string;
}

export const ABOUT_PARAGRAPHS: AboutParagraph[] = [
  {
    text: "Tattvashila is an institution for grounded, conscious living \u2014 awareness, responsibility and discipline, carried into ordinary life rather than apart from it. It is not a company, a movement, or a personal brand.",
  },
  {
    text: "It is held primarily by Vikramaditya Mitra, working with a small group of contributors across different fields. There is no founder figure to follow and no membership to join \u2014 only a body of work, published when it is ready.",
  },
  {
    label: "What\u2019s here",
    text: "The Philosophy behind the work, the Grantha\u0304laya manuscript library, Quiet Notes, and the Archive of everything completed so far. Each moves at its own pace, on no fixed schedule.",
  },
];
