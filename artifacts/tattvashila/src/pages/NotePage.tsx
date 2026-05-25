import { Link, useParams } from "wouter";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import Closing from "../components/sections/Closing";
import { getNote, formatNoteDate } from "../lib/notes";

export default function NotePage() {
  const { slug } = useParams<{ slug: string }>();
  const note = getNote(slug);

  if (!note) {
    return (
      <main className="relative min-h-screen bg-bone text-ink">
        <Nav />
        <div className="pt-40 pb-20 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <p className="text-lead text-ink-soft">Note not found.</p>
          <Link href="/notes" className="mt-6 inline-block text-small text-ink-muted hover:text-ink quiet-link">
            Back to Quiet Notes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main data-testid="note-page" className="relative min-h-screen bg-bone text-ink">
      <Nav />

      <article
        data-testid={`note-${note.slug}`}
        className="relative pt-28 md:pt-36 pb-16 md:pb-20"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-12">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <Link
                  href="/notes"
                  data-testid="note-back"
                  className="inline-flex items-center gap-2 text-micro tracking-widest uppercase text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle"
                >
                  <span aria-hidden>&larr;</span>
                  <span>Quiet Notes</span>
                </Link>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <div className="flex items-baseline gap-4 flex-wrap">
                  <time
                    dateTime={note.date}
                    className="text-micro tracking-widest uppercase text-ink-faint num-tab"
                  >
                    {formatNoteDate(note.date)}
                  </time>
                  <span className="text-micro tracking-widest uppercase text-ink-faint">
                    · {note.reading} read
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1
                  data-testid="note-title"
                  className="mt-5 md:mt-6 font-display font-normal text-ink leading-[1.12] tracking-tight"
                  style={{ fontSize: "clamp(1.85rem, 4vw, 2.85rem)" }}
                >
                  {note.title}
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <div
                  data-testid="note-body"
                  className="mt-10 md:mt-12 space-y-5 text-body text-ink-soft"
                >
                  {note.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <p
                  data-testid="note-signed"
                  className="mt-12 md:mt-14 text-body text-ink"
                >
                  &mdash; {note.signed}
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-16 md:mt-20 pt-6 border-t border-ink/15 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    href="/notes"
                    data-testid="note-cta-back"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                  >
                    Back to Quiet Notes
                  </Link>
                  <a
                    href="/#intake"
                    data-testid="note-cta-intake"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                  >
                    Stay in touch
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </article>

      <Closing />
    </main>
  );
}
