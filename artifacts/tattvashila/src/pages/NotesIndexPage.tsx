import { Link } from "wouter";
import Reveal from "../components/Reveal";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { NOTES_SORTED, formatNoteDate } from "../content/notes";

export default function NotesIndexPage() {
  usePageMeta(PAGE_META.notes);

  return (
    <PageLayout testId="notes-page">

      <section
        data-testid="notes-hero"
        className="relative pt-28 md:pt-36 pb-12 md:pb-16"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Quiet Notes
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <h1
                  data-testid="notes-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.12] tracking-tight"
                >
                  Rare reflections, written when there is something honest worth saying.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 md:mt-8 text-lead text-ink-soft max-w-reading">
                  We do not keep a schedule. New notes appear when they are
                  ready &mdash; not before. The list below is intentionally short,
                  and is meant to remain that way.
                </p>
              </Reveal>
            </div>
          </SectionGrid>
        </SiteContainer>
      </section>

      <SectionShell testId="notes-index" size="sm">
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  The notes
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <ul className="divide-y divide-ink/10 border-y border-ink/15">
                {NOTES_SORTED.map((n, i) => (
                  <Reveal key={n.slug} delay={0.05 + i * 0.04} as="li">
                    <Link
                      href={`/notes/${n.slug}`}
                      data-testid={`note-link-${n.slug}`}
                      className="block py-8 md:py-10 group"
                    >
                      <div className="flex items-baseline gap-4 flex-wrap">
                        <time
                          dateTime={n.date}
                          className="text-micro tracking-widest uppercase text-ink-faint num-tab"
                        >
                          {formatNoteDate(n.date)}
                        </time>
                        <span className="text-micro tracking-widest uppercase text-ink-faint">
                          · {n.reading} read
                        </span>
                      </div>
                      <h2 className="mt-3 font-display text-title font-normal text-ink leading-[1.18] group-hover:text-river transition-colors duration-500 ease-gentle">
                        {n.title}
                      </h2>
                      <p className="mt-3 text-body text-ink-soft">
                        {n.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-3 text-small text-ink-muted group-hover:text-ink transition-colors duration-500 ease-gentle">
                        Read the note
                        <span aria-hidden className="block w-8 h-px bg-current transition-[width] duration-500 ease-gentle group-hover:w-12" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.2}>
                <p className="mt-10 text-small text-ink-faint max-w-reading">
                  Future notes will appear here as they are written. If you
                  would like them sent to you when they are ready,{" "}
                  <a href="/#intake" className="text-ink-muted hover:text-ink quiet-link transition-colors">
                    leave us a quiet line
                  </a>
                  .
                </p>
              </Reveal>
            </div>
          </SectionGrid>
        </SiteContainer>
      </SectionShell>

    </PageLayout>
  );
}
