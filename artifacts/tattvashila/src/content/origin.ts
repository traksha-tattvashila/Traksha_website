export interface OriginSection {
  numeral: string;
  label: string;
  title: string;
  paragraphs: string[];
}

export interface OriginRecord {
  year: string;
  entry: string;
}

export const ORIGIN_SECTIONS: OriginSection[] = [
  {
    numeral: "I",
    label: "What was observed",
    title: "A pattern that keeps appearing.",
    paragraphs: [
      "Across professions, ages and circumstances, a similar quietness keeps showing up \u2014 in capable, responsible adults who are managing work, family, health and relationships well enough on the outside.",
      "They are not unhappy. They are not unsuccessful. They are simply running on a kind of momentum that no one taught them how to interrupt \u2014 and slowly losing the ability to feel their own life from the inside.",
      "The observation was not only about the people experiencing this. It was also about what was available in response \u2014 and the distance between what existed and what was actually needed. What existed was content, therapy, courses, frameworks, self-help systems. What was needed was something steadier, quieter, and less perishable.",
      "That is the condition Tattvashila was put together to address. Not through motivation or escape, but through something older and steadier \u2014 awareness, responsibility and the daily disciplines that hold a life together.",
    ],
  },
  {
    numeral: "II",
    label: "The philosophical absence",
    title: "Modern life is not broken. The inner architecture most of us were given for it is.",
    paragraphs: [
      "The demands placed on a single life today \u2014 economic, emotional, informational, relational \u2014 have quietly outpaced the tools most of us inherited from family, schooling or culture.",
      "The traditions that once transmitted a working inner architecture \u2014 the Bharatiya philosophical schools, the contemplative disciplines of other civilisations, the slower rhythms of pre-industrial life \u2014 have not disappeared. They have become inaccessible. Too ceremonialised, too academic, too specialised, or too far removed from the circumstances of an ordinary contemporary life to be used plainly.",
      "Tattvashila is one careful response to that gap. Not a translation, not a revival, not a synthesis. A set of working ideas drawn from many sources and tested against ordinary modern life \u2014 held together because they belong together, not because they agree.",
      "We are not asking anyone to leave the life they have built. We are asking, gently, whether that life can be lived from a steadier place inside the person living it.",
    ],
  },
  {
    numeral: "III",
    label: "Institutional character",
    title: "Not a movement, not a startup, not a personal vision.",
    paragraphs: [
      "Tattvashila is being held primarily by Vikramaditya Mitra, working with a small group of contributors across different fields \u2014 quietly, without a marketing rhythm, and without an interest in scale for its own sake.",
      "There is no founder figure to follow, no lineage to inherit, no movement being recruited for. The project has been deliberately kept free of personality, the language plain, and the work itself the only thing a reader is asked to meet.",
      "An institution is not a brand. It does not grow through attention. It deepens through use \u2014 through the steady accumulation of work that earns its place in a library rather than in a feed. That is the form Tattvashila has chosen, and it shapes every decision about what is published, when, and in what form.",
      "The name appears here as a matter of accountability, not authority. Other contributors and any further detail will be introduced only when the work itself makes that useful \u2014 not before, and not for marketing.",
    ],
  },
  {
    numeral: "IV",
    label: "Accountability",
    title: "We would rather be questioned than admired.",
    paragraphs: [
      "A body of work like this can drift, over time, into the very things it was built to avoid \u2014 performance, certainty, soft authority. We have written the philosophy specifically to make that drift visible to ourselves and to anyone watching.",
      "If something here begins to feel like marketing, mysticism or moral pressure, it is a failure on our side \u2014 not a deepening. We would like to hear about it.",
    ],
  },
  {
    numeral: "V",
    label: "Institutional permanence",
    title: "The institution chooses depth over presence.",
    paragraphs: [
      "Tattvashila is not built around a growth metric. It is not optimised for reach, audience size or content frequency. These are not overlooked considerations \u2014 they are deliberate refusals.",
      "The reasons are philosophical before they are practical. A body of work that pursues its own transmission loses the ability to be changed by what it discovers. An institution that grows faster than it understands itself produces weight without gravity.",
      "What Tattvashila chooses instead is time \u2014 long enough to get things right, slow enough to notice when they go wrong, quiet enough that the work remains the primary object of attention rather than the institution producing it.",
      "A foundation, as the name suggests, is laid quietly, long before anything is built upon it.",
    ],
  },
  {
    numeral: "VI",
    label: "Toward the manuscripts",
    title: "What this institution is building toward.",
    paragraphs: [
      "Quiet Notes are where ideas are tested before they are held. The Archive records what has been considered and found ready. But an institution of this kind \u2014 one that takes philosophical positions seriously \u2014 eventually requires a different register. Not notes, but manuscripts. Not reflections, but sustained inquiry.",
      "The Grantha\u0304laya is the institutional manuscript space of Tattvashila. It is where the working ideas of this institution will eventually be held at scale \u2014 in Tattvaprashna, in the Tattvagrantha series, in commentaries and institutional texts that take the time they require.",
      "None of these texts will appear quickly. They are not being written against a deadline. They are being composed in the way that institutions like this have always composed \u2014 slowly, with revision, with the full weight of the questions they are attempting to hold.",
      "The manuscripts do not yet exist in final form. They are being approached. That, too, is part of the record.",
    ],
  },
];

export const ORIGIN_RECORD: OriginRecord[] = [
  {
    year: "2019",
    entry: "The first observations accumulate \u2014 a recurring pattern in ordinary capable lives, unnamed.",
  },
  {
    year: "2021",
    entry: "The philosophical framework is tested against ordinary practice across professions.",
  },
  {
    year: "2023",
    entry: "The institutional form is settled. Tattvashila is not a product, not a movement.",
  },
  {
    year: "2024",
    entry: "The foundational texts begin their early composition. The Grantha\u0304laya architecture is established.",
  },
  {
    year: "2025",
    entry: "The institutional editorial system is built. The first texts move toward readiness.",
  },
  {
    year: "2026",
    entry: "The first Quiet Note is published. The archive begins its record.",
  },
];

export const ORIGIN_CLOSING =
  "A foundation is laid quietly, long before anything is built upon it.";
