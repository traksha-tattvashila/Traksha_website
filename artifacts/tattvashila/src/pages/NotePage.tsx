import { Link, useParams } from "wouter";
import Reveal from "../components/Reveal";
import { PageLayout, SiteContainer, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META, buildTitle } from "../content/metadata";
import { getNote, formatNoteDate } from "../content/notes";

export default function NotePage() {
  const { slug } = useParams<{ slug: string }>();
  const note = getNote(slug);

  const meta = note
    ? {
        title:          buildTitle(note.title),
        description:    note.excerpt,
        ogTitle:        buildTitle(note.title),
        ogDescription:  note.excerpt,
      }
    : PAGE_META.notes;

  usePageMeta(meta);

  if (!note) {
    return (
      <PageLayout testId="note-not-found">
        <div className="pt-40 pb-20">
          <SiteContainer>
            <p className="text-lead text-ink-soft">Note not found.</p>
            <Link href="/notes" className="mt-6 inline-block text-small text-ink-muted hover:text-ink quiet-link">
              Back to Quiet Notes
            </Link>
          </SiteContainer>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout testId="note-page">
      <article
        data-testid={`note-${note.slug}`}
        className="relative pt-28 md:pt-36 pb-16 md:pb-20"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8">
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
                  className="mt-5 md:mt-6 font-display text-display-xl font-normal text-ink leading-[1.12] tracking-tight"
                >
                  {note.title}
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <div
                  data-testid="note-body"
                  className="mt-10 md:mt-12 space-y-7 text-body text-ink-soft max-w-reading"
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
          </SectionGrid>
        </SiteContainer>
      </article>
    </PageLayout>
  );
}
