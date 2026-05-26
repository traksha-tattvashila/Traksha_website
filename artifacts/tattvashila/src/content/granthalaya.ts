export interface Grantha {
  numeral: string;
  typeLabel: string;
  slug: string;
  title: string;
  titleDisplay: string;
  devanagari: string;
  devanagariLabel: string;
  sanskritMeaning: string;
  doctrinalPosition?: string;
  paragraphs: string[];
  compositionState: string;
  compositionNote?: string;
}

export const GRANTHAS: Grantha[] = [
  {
    numeral: "I",
    typeLabel: "Pregrantha",
    slug: "tattvaprashna",
    title: "Tattvaprashna",
    titleDisplay: "The text that must precede all others.",
    devanagari: "\u0924\u0924\u094d\u0924\u094d\u0935\u092a\u094d\u0930\u0936\u094d\u0928",
    devanagariLabel: "Tattvaprashna",
    sanskritMeaning: "The fundamental inquiry",
    doctrinalPosition:
      "Questioning is not opposed to doctrine. It is its necessary ground.",
    paragraphs: [
      "Tattvaprashna is not the first volume in a sequence. It is the prerequisite to the sequence itself. It establishes the philosophical ground \u2014 the cleared field \u2014 from which systematic composition can begin.",
      "Its method is not argument but inquiry. It holds open the foundational questions: What is awareness? What is the self that becomes responsible? What makes a discipline hold over time? These are not answered here. They are examined until the examination itself becomes a kind of orientation.",
      "Without Tattvaprashna, a reader may encounter the later granthas as positions. With it, they encounter them as conclusions \u2014 conclusions to a line of questioning they have already followed from the beginning. This is the distinction between doctrine received and doctrine understood.",
      "The text is in preparation. It is not being written quickly.",
    ],
    compositionState: "In preparation",
    compositionNote:
      "The preparatory phase \u2014 establishing the questions before establishing the positions.",
  },
  {
    numeral: "II",
    typeLabel: "Principal series",
    slug: "tattvagrantha",
    title: "Tattvagrantha",
    titleDisplay: "The central institutional manuscript.",
    devanagari: "\u0924\u0924\u094d\u0924\u094d\u0935\u0917\u094d\u0930\u0928\u094d\u0925",
    devanagariLabel: "Tattvagrantha",
    sanskritMeaning: "The foundational text",
    doctrinalPosition:
      "Doctrine without preparation is doctrine without ground.",
    paragraphs: [
      "The Tattvagrantha is the central text of Tattvashila \u2014 a sustained, systematic manuscript on awareness, responsibility, and the integration of inner life with ordinary contemporary existence.",
      "It is being composed as a series, not as a single volume. The series will hold the institutional positions developed over years of practice, reading, and reflection \u2014 positions that constitute the working philosophical ground of Tattvashila.",
      "No volume will appear before it is ready. No part of the series will be released as content. When a grantha is complete, it will be placed in the Grantha\u0304laya. Not before.",
    ],
    compositionState: "In composition",
    compositionNote: undefined,
  },
  {
    numeral: "III",
    typeLabel: "Commentary tradition",
    slug: "commentaries",
    title: "Commentaries",
    titleDisplay: "Active encounters with classical thought.",
    devanagari: "\u091f\u0940\u0915\u093e",
    devanagariLabel: "T\u012bk\u0101",
    sanskritMeaning: "Exegetical commentary",
    doctrinalPosition: undefined,
    paragraphs: [
      "Commentaries in the Tattvashila tradition are not summaries or introductions. They are active philosophical encounters with primary source texts \u2014 Upanishadic passages, Stoic fragments, Confucian essays, Tantric philosophical positions \u2014 read carefully, in context, with the specific questions of contemporary ordinary life in view.",
      "A commentary begins where a text ends: with what it demands of the reader. The form asks for close attention rather than coverage. It proceeds at the pace the text requires.",
    ],
    compositionState: "Not yet begun",
    compositionNote: undefined,
  },
  {
    numeral: "IV",
    typeLabel: "Positional texts",
    slug: "institutional-manuscripts",
    title: "Institutional Manuscripts",
    titleDisplay: "The positional texts of the institution.",
    devanagari: "\u0938\u0902\u0938\u094d\u0925\u093e\u0917\u0924 \u0917\u094d\u0930\u0928\u094d\u0925",
    devanagariLabel: "Sa\u1e43sth\u0101gata Grantha",
    sanskritMeaning: "Institutional foundational texts",
    doctrinalPosition: undefined,
    paragraphs: [
      "Institutional manuscripts are formal texts that establish the philosophical positions, methodological commitments, and civilizational orientation of Tattvashila as an institution \u2014 not as personal views, but as positions the institution is prepared to hold.",
      "These texts do not yet exist in any form. They will be composed when the institution has reached the level of clarity required to hold them permanently and without revision.",
    ],
    compositionState: "Forthcoming",
    compositionNote: undefined,
  },
];

export const GRANTHALAYA_INTRO = {
  headline: "The canonical institutional manuscript space.",
  paragraphs: [
    "Grantha\u0304laya is not a blog category, a reading list, or a publications page. It is the manuscript library of Tattvashila \u2014 a place where texts are composed carefully, held patiently, and placed here when ready.",
    "The works held here are long in composition. They are not articles or essays. They are manuscripts \u2014 sustained, systematic, institutionally committed texts that take the time they require.",
  ],
  institutionalNote: [
    "Tattvashila does not publish to maintain presence. Each manuscript in the Grantha\u0304laya will take whatever time it requires. There is no schedule. There is only the text.",
    "When a manuscript is ready, it will appear here. Not before.",
  ],
} as const;

export const READING_PROGRESSION = [
  { label: "Tattvaprashna",           note: "Pregrantha \u2014 the necessary preparation" },
  { label: "Tattvagrantha",           note: "The principal series" },
  { label: "Commentaries",            note: "Classical textual encounters" },
  { label: "Institutional Manuscripts", note: "Positional texts of the institution" },
] as const;
