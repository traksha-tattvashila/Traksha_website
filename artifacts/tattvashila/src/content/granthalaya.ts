/* ═══════════════════════════════════════════════════════════════
   GRANTHĀLAYA — canonical manuscript data
   Single source of truth for the catalogue, the detail pages, the
   frontispiece, and the language gateway. Everything downstream is
   data-driven: new granthas, commentaries and languages are added
   here, not hardcoded into the pages.
═══════════════════════════════════════════════════════════════ */

/** Composition lifecycle. Display strings are kept stable because
 *  other surfaces (e.g. the Archive) filter on `compositionState`. */
export type CompositionStatus =
  | "available"
  | "in-composition"
  | "not-begun"
  | "forthcoming";

/** A reading rendering of a grantha in a given language. */
export interface GranthaLanguage {
  code: string;            // "hi" | "en" | "sa" …
  labelDeva?: string;      // "हिंदी पठन"
  labelRoman?: string;     // "English Rendering"
  state: "active" | "preparing";
  routeLang?: string;      // ":lang" route segment, present when active
  note?: string;           // shown beside preparing renderings
}

/** A labelled movement of the detail page (What it is / Why it exists …). */
export interface GranthaDetailSection {
  label: string;
  paragraphs: string[];
}

/** Title-page (frontispiece) composition for a readable grantha. */
export interface GranthaFrontispiece {
  seriesLabel: string;
  titleDeva: string;
  titleRoman: string;
  subtitleDevaLines: string[];
  subtitleRoman: string;
  authorLabel: string;
  author: string;
  gatewayLabel: string;
}

export interface Grantha {
  numeral: string;
  typeLabel: string;
  slug: string;
  title: string;
  titleDisplay: string;
  devanagari: string;
  devanagariLabel: string;
  sanskritMeaning: string;
  /** One line, for the catalogue only. No sentences. */
  subtitle: string;
  status: CompositionStatus;
  /** Human display of the composition state. Stable string. */
  compositionState: string;
  compositionNote?: string;
  doctrinalPosition?: string;
  /** Long-form, detail page only. Rendered section by section. */
  detailSections: GranthaDetailSection[];
  /** Whether a readable manuscript exists to enter. */
  hasManuscript: boolean;
  frontispiece?: GranthaFrontispiece;
  /** Available + preparing renderings. Empty when no manuscript. */
  languages: GranthaLanguage[];
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
    subtitle: "Pregrantha \u2014 the necessary preparation",
    status: "available",
    compositionState: "In preparation",
    compositionNote:
      "The preparatory phase \u2014 establishing the questions before establishing the positions.",
    doctrinalPosition:
      "Questioning is not opposed to doctrine. It is its necessary ground.",
    detailSections: [
      {
        label: "What it is",
        paragraphs: [
          "Tattvaprashna is not the first volume in a sequence. It is the prerequisite to the sequence itself. It establishes the philosophical ground \u2014 the cleared field \u2014 from which systematic composition can begin.",
        ],
      },
      {
        label: "Why it exists",
        paragraphs: [
          "Its method is not argument but inquiry. It holds open the foundational questions: What is awareness? What is the self that becomes responsible? What makes a discipline hold over time? These are not answered here. They are examined until the examination itself becomes a kind of orientation.",
        ],
      },
      {
        label: "Position in the series",
        paragraphs: [
          "Without Tattvaprashna, a reader may encounter the later granthas as positions. With it, they encounter them as conclusions \u2014 conclusions to a line of questioning they have already followed from the beginning. This is the distinction between doctrine received and doctrine understood.",
        ],
      },
      {
        label: "Relationship to future works",
        paragraphs: [
          "Tattvaprashna is the opening threshold of the Tattvagrantha series. What it holds open as question, the later works will set down as position. It is not read once and left behind \u2014 it is the ground every subsequent grantha is composed upon.",
        ],
      },
    ],
    hasManuscript: true,
    frontispiece: {
      seriesLabel: "\u0924\u0924\u094d\u0924\u094d\u0935\u0917\u094d\u0930\u0902\u0925 \u0936\u0943\u0902\u0916\u0932\u093e \u0915\u093e \u090f\u0915 \u092a\u0942\u0930\u094d\u0935-\u0917\u094d\u0930\u0902\u0925",
      titleDeva: "\u0924\u0924\u094d\u0924\u094d\u0935\u092a\u094d\u0930\u0936\u094d\u0928",
      titleRoman: "Tattvaprashna",
      subtitleDevaLines: [
        "\u092e\u093e\u0928\u0935 \u0938\u094d\u0935\u0924\u0902\u0924\u094d\u0930\u0924\u093e, \u0935\u094d\u092f\u0935\u0938\u094d\u0925\u093e",
        "\u0914\u0930 \u0909\u0924\u094d\u0924\u0930\u0926\u093e\u092f\u093f\u0924\u094d\u0935 \u092a\u0930",
        "\u090f\u0915 \u0935\u093f\u0935\u0947\u091a\u0928\u093e\u0924\u094d\u092e\u0915 \u0917\u094d\u0930\u0902\u0925",
      ],
      subtitleRoman:
        "A critical inquiry into human freedom, order, and responsibility",
      authorLabel: "\u0932\u0947\u0916\u0915",
      author: "Vikram A. Mitra",
      gatewayLabel: "\u092a\u093e\u0920 \u092e\u0947\u0902 \u092a\u094d\u0930\u0935\u0947\u0936 \u0915\u0930\u0947\u0902",
    },
    languages: [
      {
        code: "hi",
        labelDeva: "\u0939\u093f\u0902\u0926\u0940 \u092a\u0920\u0928",
        state: "active",
        routeLang: "hindi",
      },
      {
        code: "en",
        labelRoman: "English Rendering",
        state: "preparing",
        note: "Under translation preparation",
      },
    ],
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
    subtitle: "The principal series",
    status: "in-composition",
    compositionState: "In composition",
    doctrinalPosition:
      "Doctrine without preparation is doctrine without ground.",
    detailSections: [
      {
        label: "What it is",
        paragraphs: [
          "The Tattvagrantha is the central text of Tattvashila \u2014 a sustained, systematic manuscript on awareness, responsibility, and the integration of inner life with ordinary contemporary existence.",
        ],
      },
      {
        label: "Why it exists",
        paragraphs: [
          "It is being composed as a series, not as a single volume. The series will hold the institutional positions developed over years of practice, reading, and reflection \u2014 positions that constitute the working philosophical ground of Tattvashila.",
        ],
      },
      {
        label: "How it will appear",
        paragraphs: [
          "No volume will appear before it is ready. No part of the series will be released as content. When a grantha is complete, it will be placed in the Grantha\u0304laya. Not before.",
        ],
      },
    ],
    hasManuscript: false,
    languages: [],
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
    subtitle: "Classical textual encounters",
    status: "not-begun",
    compositionState: "Not yet begun",
    detailSections: [
      {
        label: "What it is",
        paragraphs: [
          "Commentaries in the Tattvashila tradition are not summaries or introductions. They are active philosophical encounters with primary source texts \u2014 Upanishadic passages, Stoic fragments, Confucian essays, Tantric philosophical positions \u2014 read carefully, in context, with the specific questions of contemporary ordinary life in view.",
        ],
      },
      {
        label: "Its method",
        paragraphs: [
          "A commentary begins where a text ends: with what it demands of the reader. The form asks for close attention rather than coverage. It proceeds at the pace the text requires.",
        ],
      },
    ],
    hasManuscript: false,
    languages: [],
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
    subtitle: "Positional texts of the institution",
    status: "forthcoming",
    compositionState: "Forthcoming",
    detailSections: [
      {
        label: "What it is",
        paragraphs: [
          "Institutional manuscripts are formal texts that establish the philosophical positions, methodological commitments, and civilizational orientation of Tattvashila as an institution \u2014 not as personal views, but as positions the institution is prepared to hold.",
        ],
      },
      {
        label: "When they will exist",
        paragraphs: [
          "These texts do not yet exist in any form. They will be composed when the institution has reached the level of clarity required to hold them permanently and without revision.",
        ],
      },
    ],
    hasManuscript: false,
    languages: [],
  },
];

/** Lookup helper — used by the detail, frontispiece and manuscript routes. */
export function getGranthaBySlug(slug: string | undefined): Grantha | undefined {
  if (!slug) return undefined;
  return GRANTHAS.find((g) => g.slug === slug);
}

export const GRANTHALAYA_INTRO = {
  headline: "The canonical institutional manuscript space.",
  paragraphs: [
    "Grantha\u0304laya is not a blog category, a reading list, or a publications page. It is the manuscript library of Tattvashila \u2014 a place where texts are composed carefully, held patiently, and placed here when ready.",
    "The works held here are long in composition. They are not articles or essays. They are manuscripts \u2014 sustained, systematic, institutionally committed texts that take the time they require.",
  ],
  institutionalNote: [
    "Each manuscript in the Grantha\u0304laya will take whatever time it requires. There is no schedule. There is only the text.",
    "When a manuscript is ready, it will appear here. Not before.",
  ],
} as const;

export const READING_PROGRESSION = [
  { label: "Tattvaprashna",           note: "Pregrantha \u2014 the necessary preparation" },
  { label: "Tattvagrantha",           note: "The principal series" },
  { label: "Commentaries",            note: "Classical textual encounters" },
  { label: "Institutional Manuscripts", note: "Positional texts of the institution" },
] as const;
