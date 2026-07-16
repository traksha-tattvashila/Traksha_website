import { Link } from "wouter";
import Reveal from "../components/Reveal";
import QuietImage from "../components/QuietImage";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { NOTES_SORTED, formatNoteDate } from "../content/notes";
import { getCategoryBySlug } from "../content/taxonomy";
import { images } from "../system/images/registry";

export default function NotesIndexPage() {
  usePageMeta(PAGE_META.notes);

  return (
    <PageLayout testId="notes-page">

      {/* ── Publication header ── */}
      <header
        data-testid="notes-hero"
        className="relative pt-28 md:pt-36 pb-0"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Quiet Notes
                </p>
              </Reveal>

              {/* Editorial image — book and tea still-life */}
              <Reveal delay={0.2}>
                <div className="mt-8 md:mt-12 hidden md:block">
                  <QuietImage
                    src={images.heroPremise.src}
                    alt={images.heroPremise.alt}
                    aspectClass="aspect-[4/5]"
                    fallbackTone="warm"
                    className="rounded-[2px]"
                  />
                  <p className="mt-3 text-micro tracking-widest uppercase text-ink-faint">
                    {images.heroPremise.credit}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 max-w-prose-wide pb-12 md:pb-16">
              <Reveal delay={0.05}>
                <h1
                  data-testid="notes-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.1] tracking-tight"
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
      </header>

      {/* ── Publication archive ── */}
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
              <ol
                aria-label="Publication archive"
                className="divide-y divide-ink/10 border-y border-ink/10"
              >
                {NOTES_SORTED.map((n, i) => {
                  const category = getCategoryBySlug(n.category);
                  return (
                    <Reveal key={n.slug} delay={0.05 + i * 0.04} as="li">
                      <article>
                        <Link
                          href={`/notes/${n.slug}`}
                          data-testid={`note-link-${n.slug}`}
                          className="block py-9 md:py-11 group"
                        >
                          <div className="flex items-baseline gap-x-4 gap-y-1 flex-wrap">
                            <time
                              dateTime={n.date}
                              className="text-micro tracking-widest uppercase text-ink-faint num-tab"
                            >
                              {formatNoteDate(n.date)}
                            </time>
                            <span className="text-micro tracking-widest uppercase text-ink-faint">
                              &middot; {n.reading} read
                            </span>
                            {category && (
                              <span className="text-micro tracking-widest uppercase text-ink-faint">
                                &middot; {category.label}
                              </span>
                            )}
                          </div>

                          <h2 className="mt-4 font-display text-title font-normal text-ink leading-[1.18] group-hover:text-river-soft transition-colors duration-500 ease-gentle">
                            {n.title}
                          </h2>

                          <p className="mt-4 text-body text-ink-soft max-w-reading leading-relaxed">
                            {n.excerpt}
                          </p>

                          <span className="mt-6 inline-flex items-center gap-3 text-small text-ink-muted group-hover:text-ink transition-colors duration-500 ease-gentle">
                            Read the note
                            <span
                              aria-hidden
                              className="block w-8 h-px bg-current transition-[width] duration-500 ease-gentle group-hover:w-12"
                            />
                          </span>
                        </Link>
                      </article>
                    </Reveal>
                  );
                })}
              </ol>

              <Reveal delay={0.2}>
                <p className="mt-12 text-small text-ink-faint max-w-reading">
                  Future notes will appear here as they are written. If you
                  would like them sent to you when they are ready,{" "}
                  <a
                    href="/#intake"
                    className="text-ink-muted hover:text-ink quiet-link transition-colors duration-700 ease-gentle"
                  >
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
