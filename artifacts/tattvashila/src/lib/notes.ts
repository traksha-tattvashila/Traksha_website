import type {
  PublicationStatus,
  PublicationLocale,
} from "../content/types/publication";
import type {
  EditorialMode,
  TraditionReference,
} from "../content/types/taxonomy";

export interface Note {
  slug: string;
  title: string;
  summary: string;
  excerpt: string;
  body: string[];
  signed: string;

  date: string;
  updatedAt?: string;
  reading: string;
  publicationStatus: PublicationStatus;
  locale: PublicationLocale;

  category: string;
  tags: string[];
  editorialMode?: EditorialMode;
  traditionReference?: TraditionReference[];

  relatedPublications?: string[];
  canonicalUrl?: string;
}

export const NOTES: Note[] = [
  {
    slug: "tired-in-a-way-sleep-doesnt-fix",
    title: "On being tired in a way sleep doesn\u2019t fix.",
    summary:
      "An enquiry into the quiet, structural tiredness that accumulates in modern life — not from overwork, but from the sustained absence of inner pause.",
    excerpt:
      "There is a kind of tiredness that has become quietly common, and which the people around us rarely name out loud.",
    body: [
      "There is a kind of tiredness that has become quietly common, and which the people around us rarely name out loud.",
      "It does not arrive at the end of difficult days. It arrives at the end of ordinary ones \u2014 full days, productive days, days that are, by every external measure, fine.",
      "It is not the tiredness of work. Work, even hard work, is recoverable. You sleep, you eat, you take a walk, and you come back. This other tiredness doesn\u2019t recover that way. It sits underneath the day. It is still there in the morning.",
      "If you ask people about it, you\u2019ll hear similar shapes. A senior professional who has built something good and isn\u2019t quite sure how to be inside it. A young parent who is doing well by every visible standard and feels, privately, like a passenger in their own week. A founder, a doctor, a teacher, a homemaker \u2014 all describing a quiet drift that has nothing to do with the outward quality of their lives.",
      "What is this?",
      "The honest answer, as far as we can see, is that it is the cost of living without inner pause in a world structured never to pause.",
      "We did not get here through any single failure. We got here gradually. Phones near pillows. Inboxes that close at midnight and reopen at six. Social feeds that fill the gaps between meetings and the gaps between thoughts. Streaming as a way to wind down. Articles, podcasts, opinions, even self-improvement, consumed at the pace of news.",
      "None of this is, on its own, harmful. The harm is in the absence of an opposite. There is no longer a structural quiet around any of it. Stimulation has become the air. And like any air, you stop noticing it.",
      "The body knows, though. The body keeps the score. So does attention, and so does sleep that doesn\u2019t quite repair, and the strange, low-grade flatness of weekends.",
      "The temptation, when one notices this, is to add another optimisation. A new app. A new routine. A new productivity book. We would gently suggest that this is the same kind of doing that produced the tiredness in the first place.",
      "What is needed instead is something much smaller, and far older. Five unhurried minutes, somewhere in the day, where nothing is happening. A walk without headphones. A meal without a screen. A morning that begins, even briefly, before the world enters it.",
      "It will feel pointless at first. It will feel inefficient. It will feel like wasted time. Stay with it anyway. The quietness is not the absence of doing. It is the presence of you.",
      "Most of what we are calling Tattvashila is built around this very small act, repeated patiently, until it begins to change the texture of an ordinary life.",
    ],
    signed: "Vikramaditya Mitra",

    date: "2026-05-09",
    reading: "5 min",
    publicationStatus: "published",
    locale: "en",

    category: "inner-life",
    tags: ["tiredness", "inner-pause", "attention", "ordinary-life"],
    editorialMode: "reflective",
    traditionReference: ["independent"],
  },
];

export const NOTES_SORTED = [...NOTES].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getNote(slug: string): Note | undefined {
  return NOTES.find((n) => n.slug === slug);
}

export function formatNoteDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getNotesByCategory(categorySlug: string): Note[] {
  return NOTES_SORTED.filter((n) => n.category === categorySlug);
}

export function getNotesByTag(tagSlug: string): Note[] {
  return NOTES_SORTED.filter((n) => n.tags.includes(tagSlug));
}

export function getNextNote(note: Note): Note | undefined {
  const idx = NOTES_SORTED.findIndex((n) => n.slug === note.slug);
  return idx > 0 ? NOTES_SORTED[idx - 1] : undefined;
}

export function getPreviousNote(note: Note): Note | undefined {
  const idx = NOTES_SORTED.findIndex((n) => n.slug === note.slug);
  return idx >= 0 && idx < NOTES_SORTED.length - 1
    ? NOTES_SORTED[idx + 1]
    : undefined;
}

export function getRelatedNotes(note: Note, limit = 3): Note[] {
  if (!note.relatedPublications?.length) {
    return NOTES_SORTED.filter(
      (n) =>
        n.slug !== note.slug &&
        (n.category === note.category || n.tags.some((t) => note.tags.includes(t))),
    ).slice(0, limit);
  }
  return note.relatedPublications
    .map((slug) => getNote(slug))
    .filter(Boolean) as Note[];
}
