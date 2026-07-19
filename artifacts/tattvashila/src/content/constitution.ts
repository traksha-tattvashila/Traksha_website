export const CONSTITUTION_EYEBROW = "CONSTITUTION";
export const CONSTITUTION_HEADING = "How this is governed.";

export const CONSTITUTION_INTRO =
  "This is not a legal document, and it does not describe a large organisation. It is a plain record of the principles Tattvashila holds itself to \u2014 written down so they can be checked against, not just claimed.";

export interface ConstitutionSection {
  label: string;
  text: string;
}

export const CONSTITUTION_SECTIONS: ConstitutionSection[] = [
  {
    label: "TRK \u2014 Identity",
    text: "A verified identity, earned through authenticity and time. Not through frequency of posting, not through popularity, not through payment. Once issued, it is permanent \u2014 never reused, never purchased, never recreated.",
  },
  {
    label: "Tattvaloka \u2014 Participation",
    text: "No feed ranks content by what keeps someone scrolling. There are no public like-counts or follower-counts. Claims made as fact are labelled as such by the person making them; if one is later shown to be wrong, that is recorded plainly, not scored. Moderation exists only for what is illegal or genuinely unsafe \u2014 never for disagreement. Tattvashila does not sell reach, and does not run advertising.",
  },
  {
    label: "Tattvapeetha \u2014 Growth",
    text: "Structured learning, open to anyone, requiring nothing else first.",
  },
];

export const CONSTITUTION_FOOTER =
  "Last updated: 19 July 2026. This document changes only when it is deliberately revised \u2014 not by adding a separate one alongside it.";
