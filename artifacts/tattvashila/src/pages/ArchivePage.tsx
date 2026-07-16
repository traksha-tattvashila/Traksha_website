import { Link } from "wouter";
import Reveal from "../components/Reveal";
import QuietImage from "../components/QuietImage";
import { EditorialDivider } from "../components/editorial";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { groupNotesByYear, groupNotesByCategory } from "../lib/archive";
import { TAXONOMY_CATEGORIES } from "../content/taxonomy";
import { formatNoteDate } from "../content/notes";
import { GRANTHAS } from "../content/granthalaya";
import { images } from "../system/images/registry";

/* Only compositions actively in progress belong in the bridge section */
const IN_COMPOSITION = GRANTHAS.filter(
  (g) =>
    g.compositionState === "In preparation" ||
    g.compositionState === "In composition",
);

export default function ArchivePage() {
  usePageMeta(PAGE_META.archive);

  const byYear = groupNotesByYear();
  const byCategory = groupNotesByCategory();
  const totalPublished = byYear.reduce((n, g) => n + g.items.length, 0);

  return (
    <PageLayout testId="archive-page">

      {/* ── Institutional record header ── */}
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

              {/* Composition atmosphere — institution is actively composing */}
              <Reveal delay={0.06}>
                <div className="mt-5 md:mt-6 hidden md:block border-t border-ink/10 pt-5">
                  <p className="text-small text-ink-faint leading-relaxed">
                    The institution is<br />
                    continuously composing.
                  </p>
                </div>
              </Reveal>

              {/* Notebook — active composition atmosphere */}
              <Reveal delay={0.18}>
                <div className="mt-8 md:mt-10 hidden md:block">
                  <QuietImage
                    src={images.notebookReading.src}
                    alt={images.notebookReading.alt}
                    aspectClass="aspect-[4/3]"
                    fallbackTone="warm"
                    className="rounded-[2px]"
                  />
                  <p className="mt-3 text-micro tracking-widest uppercase text-ink-faint">
                    {images.notebookReading.credit}
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

              <Reveal delay={0.10}>
                <p className="mt-7 md:mt-9 text-lead text-ink-soft max-w-reading leading-[1.75]">
                  This archive grows slowly, by design. Each publication is
                  held until it is ready — not released to a schedule, not
                  shaped by frequency.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-5 text-body text-ink-soft max-w-reading leading-[1.80]">
                  The archive does not measure the institution. The institution
                  is continuously composing — notes, reflections, manuscripts,
                  commentaries — and what appears here is what has passed
                  through the full process of readiness. Slowness is not
                  absence. It is the condition of permanence.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-8 text-micro tracking-widest uppercase text-ink-faint num-tab">
                  {totalPublished === 0
                    ? "No texts in the record — the archive is open"
                    : `${totalPublished} text${totalPublished !== 1 ? "s" : ""} in the record\u2002·\u2002The archive is open`}
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

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted mb-6 md:mb-8">
                  The record
                </p>
                {byYear.length > 0 && (
                  <nav
                    aria-label="Publication record by year"
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
                )}
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9">
              {byYear.length === 0 ? (
                <Reveal>
                  <div className="py-10 border-t border-ink/8">
                    <p className="text-body text-ink-soft leading-relaxed">
                      No texts have completed the process of readiness yet.
                      They will appear here when they do.
                    </p>
                    <p className="mt-4 text-small text-ink-faint">
                      The institution is composing.
                    </p>
                  </div>
                </Reveal>
              ) : (
                <>
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
                                  className="block py-8 md:py-10 group"
                                >
                                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-4">
                                    <time
                                      dateTime={note.date}
                                      className="text-micro tracking-widest uppercase text-ink-faint num-tab"
                                    >
                                      {formatNoteDate(note.date)}
                                    </time>
                                    <span className="text-micro tracking-widest uppercase text-ink-faint">
                                      &middot;&nbsp;{note.reading}&nbsp;read
                                    </span>
                                    <span className="text-micro tracking-widest uppercase text-ink-faint">
                                      &middot;&nbsp;{note.category.replace(/-/g, "\u00a0")}
                                    </span>
                                  </div>

                                  <h3 className="font-display text-title font-normal text-ink leading-[1.18] group-hover:text-river-soft transition-colors duration-700 ease-gentle tracking-tight max-w-prose-wide">
                                    {note.title}
                                  </h3>

                                  {note.excerpt && (
                                    <p className="mt-3 text-body text-ink-soft max-w-reading leading-relaxed">
                                      {note.excerpt}
                                    </p>
                                  )}

                                  <span className="mt-6 inline-flex items-center gap-3 text-small text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle">
                                    Read the note
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

                  {/* Composition continuity postscript */}
                  <Reveal delay={0.1}>
                    <div className="mt-12 md:mt-14 pt-8 border-t border-ink/8">
                      <p className="text-small text-ink-faint leading-relaxed">
                        The record above contains what has been completed. The
                        institution continues composing.
                      </p>
                    </div>
                  </Reveal>
                </>
              )}
            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Active composition — bridge to Granthālaya ── */}
      <SectionShell testId="archive-composition" size="md" border>
        <SiteContainer>
          <SectionGrid>

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  In composition
                </p>
                <p className="mt-2 text-small text-ink-faint leading-relaxed">
                  Not yet in the record
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9">
              <Reveal delay={0.04}>
                <p className="text-body text-ink-soft max-w-reading mb-10 md:mb-12 leading-[1.80]">
                  These texts are being composed. They are not forthcoming in
                  any promotional sense. They will enter the archive when they
                  have passed through their own process of completion — without
                  announcement, without preview.
                </p>
              </Reveal>

              <ol
                aria-label="Manuscripts in composition"
                className="divide-y divide-ink/8 border-y border-ink/8"
              >
                {IN_COMPOSITION.map((g, i) => (
                  <Reveal key={g.slug} delay={0.03 + i * 0.05} as="li">
                    <div className="py-8 md:py-9 flex items-baseline gap-8 md:gap-12">
                      <div className="shrink-0 w-28 md:w-36">
                        <p className="text-micro tracking-widest uppercase text-ink-faint">
                          {g.typeLabel}
                        </p>
                        <p className="mt-2 text-small text-ink-muted">
                          {g.compositionState}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <Link
                          href="/granthalaya"
                          className="font-display text-title font-normal text-ink-soft hover:text-ink transition-colors duration-700 ease-gentle tracking-tight leading-[1.18] quiet-link"
                        >
                          {g.title}
                        </Link>
                        <p className="mt-1 font-deva text-[1rem] text-ink-faint leading-relaxed">
                          {g.devanagari}
                        </p>
                        <p className="mt-3 text-small text-ink-faint leading-relaxed max-w-reading">
                          {g.detailSections[0]?.paragraphs[0]}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>

              <Reveal delay={0.12}>
                <div className="mt-8 md:mt-10">
                  <Link
                    href="/granthalaya"
                    className="inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
                  >
                    <span aria-hidden className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                    <span>Granthālaya — the manuscript space</span>
                  </Link>
                </div>
              </Reveal>
            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Areas of inquiry — domain taxonomy ── */}
      <SectionShell testId="archive-domains" size="md" border>
        <SiteContainer>
          <SectionGrid>

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Areas of inquiry
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9">
              <Reveal delay={0.04}>
                <p className="text-body text-ink-soft max-w-reading mb-10 md:mb-12 leading-[1.80]">
                  Six areas of inquiry from which publications emerge. As
                  compositions are completed, they settle into these domains
                  naturally. The domains are named first because they orient
                  the composition — not because they contain it.
                </p>
              </Reveal>

              <ol
                aria-label="Publication domains"
                className="divide-y divide-ink/8 border-y border-ink/8"
              >
                {TAXONOMY_CATEGORIES.map((cat, i) => {
                  const notesInCategory = byCategory.find(
                    (g) => g.key === cat.slug,
                  );
                  const count = notesInCategory?.items.length ?? 0;

                  return (
                    <Reveal key={cat.slug} delay={0.04 + i * 0.04} as="li">
                      <div
                        data-testid={`archive-domain-${cat.slug}`}
                        className="py-8 md:py-9 flex items-baseline justify-between gap-8"
                      >
                        <div className="min-w-0">
                          <h3 className="font-display text-title font-normal text-ink leading-tight tracking-tight">
                            {cat.label}
                          </h3>
                          {cat.traditionalEquivalent && (
                            <p className="mt-1 text-small text-ink-faint italic">
                              {cat.traditionalEquivalent}
                            </p>
                          )}
                          <p className="mt-3 text-small text-ink-muted max-w-prose-wide leading-relaxed">
                            {cat.description}
                          </p>
                        </div>

                        <div className="shrink-0 text-right">
                          {count > 0 ? (
                            <p
                              className="text-micro tracking-widest uppercase text-ink-faint num-tab"
                              aria-label={`${count} publication${count !== 1 ? "s" : ""}`}
                            >
                              {count}
                            </p>
                          ) : (
                            <p
                              className="text-micro tracking-widest uppercase text-ink-faint"
                              aria-label="In preparation"
                            >
                              In preparation
                            </p>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Archival institutional closing ── */}
      <SectionShell testId="archive-closing" size="md" border>
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9">

              {/* Stack-of-books — archival permanence */}
              <Reveal>
                <div className="max-w-reading">
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

              <Reveal delay={0.08}>
                <div className="mt-10 md:mt-12 max-w-reading">
                  <p className="text-body text-ink-soft leading-[1.85] mb-[1.7em]">
                    An archive is not a library. A library holds what exists.
                    An archive preserves what was done — and by doing so,
                    maintains the institution's record of its own thinking over
                    time.
                  </p>
                  <p className="text-body text-ink leading-[1.85]">
                    This archive will deepen slowly. Every text that appears
                    here has been held, revised, and completed. None of them
                    will be removed.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.13}>
                <EditorialDivider kind="ornament" className="mt-12 md:mt-14" />
              </Reveal>

              <Reveal delay={0.17}>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
                  <Link
                    href="/granthalaya"
                    className="inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
                  >
                    <span aria-hidden className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                    <span>Granthālaya</span>
                  </Link>
                  <Link
                    href="/notes"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Quiet Notes
                  </Link>
                  <Link
                    href="/philosophy"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Philosophy
                  </Link>
                  <a
                    href="/#intake"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Stay in touch
                  </a>
                </div>
              </Reveal>

            </div>
          </SectionGrid>
        </SiteContainer>
      </SectionShell>

    </PageLayout>
  );
}
