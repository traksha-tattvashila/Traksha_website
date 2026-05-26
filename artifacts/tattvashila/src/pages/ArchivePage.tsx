import { Link } from "wouter";
import Reveal from "../components/Reveal";
import QuietImage from "../components/QuietImage";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { groupNotesByYear, groupNotesByCategory } from "../lib/archive";
import { TAXONOMY_CATEGORIES } from "../content/taxonomy";
import { formatNoteDate } from "../content/notes";
import { images } from "../system/images/registry";

export default function ArchivePage() {
  usePageMeta(PAGE_META.archive);

  const byYear = groupNotesByYear();
  const byCategory = groupNotesByCategory();

  const totalPublished = byYear.reduce((n, g) => n + g.items.length, 0);

  return (
    <PageLayout testId="archive-page">

      {/* ── Archive header ── */}
      <header
        data-testid="archive-hero"
        className="relative pt-28 md:pt-36 pb-0"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Archive
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 md:mt-12 hidden md:block">
                  <QuietImage
                    src={images.archiveBooks.src}
                    alt={images.archiveBooks.alt}
                    aspectClass="aspect-[4/3]"
                    fallbackTone="warm"
                    className="rounded-[2px]"
                  />
                  <p className="mt-3 text-micro tracking-widest uppercase text-ink-faint">
                    {images.archiveBooks.credit}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 pb-12 md:pb-16">
              <Reveal delay={0.04}>
                <h1
                  data-testid="archive-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.1] tracking-tight max-w-prose-wide"
                >
                  A complete institutional record of all publications.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 md:mt-8 text-lead text-ink-soft max-w-reading">
                  This archive grows slowly, by design. Each publication is
                  held until it is ready — not published to a schedule.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-4 text-micro tracking-widest uppercase text-ink-faint num-tab">
                  {totalPublished} publication{totalPublished !== 1 ? "s" : ""} in the record
                </p>
              </Reveal>
            </div>

          </SectionGrid>
        </SiteContainer>
      </header>

      {/* ── Publication record by year ── */}
      <SectionShell testId="archive-record" size="sm" border>
        <SiteContainer>
          <SectionGrid>

            {/* Left col — year index */}
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted mb-6 md:mb-8">
                  By year
                </p>
                <nav
                  aria-label="Year index"
                  className="hidden md:flex flex-col gap-3"
                >
                  {byYear.map((group) => (
                    <a
                      key={group.key}
                      href={`#year-${group.key}`}
                      className="text-small text-ink-muted hover:text-ink transition-colors duration-500 quiet-link"
                    >
                      {group.label}
                    </a>
                  ))}
                </nav>
              </Reveal>
            </div>

            {/* Right col — the record */}
            <div className="col-span-12 md:col-span-9">
              {byYear.map((group, gi) => (
                <Reveal key={group.key} delay={0.04 + gi * 0.05}>
                  <section
                    id={`year-${group.key}`}
                    aria-labelledby={`year-${group.key}-heading`}
                    className={gi > 0 ? "mt-16 md:mt-20" : ""}
                  >
                    <div className="archive-year-marker">
                      <h2
                        id={`year-${group.key}-heading`}
                        className="font-display text-display-xl font-normal text-ink/20 leading-none tracking-tighter num-tab select-none"
                        aria-label={`Publications from ${group.label}`}
                      >
                        {group.label}
                      </h2>
                    </div>

                    <ol
                      aria-label={`Publications from ${group.label}`}
                      className="mt-6 md:mt-8 divide-y divide-ink/8"
                    >
                      {group.items.map((note, i) => (
                        <Reveal key={note.slug} delay={0.03 + i * 0.04} as="li">
                          <article className="archive-entry">
                            <Link
                              href={`/notes/${note.slug}`}
                              data-testid={`archive-note-${note.slug}`}
                              className="block py-8 md:py-9 group"
                            >
                              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                <time
                                  dateTime={note.date}
                                  className="text-micro tracking-widest uppercase text-ink-faint num-tab"
                                >
                                  {formatNoteDate(note.date)}
                                </time>
                                <span className="text-micro tracking-widest uppercase text-ink-faint">
                                  &middot; {note.reading} read
                                </span>
                              </div>

                              <h3 className="mt-3 font-display text-title font-normal text-ink leading-[1.2] group-hover:text-river-soft transition-colors duration-700 ease-gentle tracking-tight">
                                {note.title}
                              </h3>

                              {note.excerpt && (
                                <p className="mt-3 text-body text-ink-soft max-w-reading leading-relaxed">
                                  {note.excerpt}
                                </p>
                              )}

                              <span className="mt-5 inline-flex items-center gap-3 text-small text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle">
                                Read
                                <span
                                  aria-hidden
                                  className="block w-6 h-px bg-current transition-[width] duration-700 ease-gentle group-hover:w-10"
                                />
                              </span>
                            </Link>
                          </article>
                        </Reveal>
                      ))}
                    </ol>
                  </section>
                </Reveal>
              ))}

              {byYear.length === 0 && (
                <Reveal>
                  <p className="text-body text-ink-faint py-8">
                    No publications yet. They will appear here as they are completed.
                  </p>
                </Reveal>
              )}
            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Domain taxonomy ── */}
      <SectionShell testId="archive-domains" size="md" border>
        <SiteContainer>
          <SectionGrid>

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Publication domains
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9">
              <Reveal delay={0.04}>
                <p className="text-body text-ink-soft max-w-reading mb-10 md:mb-12">
                  The archive is organised across six domains of inquiry. As
                  new publications appear, they will settle into these domains
                  naturally.
                </p>
              </Reveal>

              <ol
                aria-label="Publication domains"
                className="divide-y divide-ink/8"
              >
                {TAXONOMY_CATEGORIES.map((cat, i) => {
                  const notesInCategory = byCategory.find(
                    (g) => g.key === cat.slug,
                  );
                  const count = notesInCategory?.items.length ?? 0;

                  return (
                    <Reveal key={cat.slug} delay={0.04 + i * 0.04} as="li">
                      <div className="py-7 md:py-8 flex items-baseline justify-between gap-6">
                        <div className="min-w-0">
                          <h3 className="font-display text-title font-normal text-ink leading-tight tracking-tight">
                            {cat.label}
                          </h3>
                          {cat.traditionalEquivalent && (
                            <p className="mt-1 text-caption text-ink-faint italic">
                              {cat.traditionalEquivalent}
                            </p>
                          )}
                          <p className="mt-3 text-small text-ink-muted max-w-prose-wide leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                        <p
                          className="text-micro tracking-widest uppercase text-ink-faint num-tab shrink-0"
                          aria-label={`${count} publication${count !== 1 ? "s" : ""}`}
                        >
                          {count > 0 ? count : "—"}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Closing institutional statement ── */}
      <SectionShell testId="archive-closing" size="md" border>
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9">
              <Reveal>
                <div className="max-w-reading">
                  <QuietImage
                    src={images.vaseInterior.src}
                    alt={images.vaseInterior.alt}
                    aspectClass="aspect-[4/3]"
                    fallbackTone="warm"
                    className="rounded-[2px]"
                  />
                  <p className="mt-4 text-micro tracking-widest uppercase text-ink-faint">
                    {images.vaseInterior.credit}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-10 md:mt-12 text-lead text-ink-soft max-w-reading">
                  If you would like to be notified when new publications
                  appear,{" "}
                  <a
                    href="/#intake"
                    className="text-ink-muted hover:text-ink quiet-link transition-colors duration-700"
                  >
                    leave a quiet line
                  </a>
                  .
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    href="/granthalaya"
                    className="inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
                  >
                    <span>Granthālaya</span>
                    <span
                      aria-hidden
                      className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                    />
                  </Link>
                  <Link
                    href="/notes"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Quiet Notes
                  </Link>
                </div>
              </Reveal>
            </div>
          </SectionGrid>
        </SiteContainer>
      </SectionShell>

    </PageLayout>
  );
}
