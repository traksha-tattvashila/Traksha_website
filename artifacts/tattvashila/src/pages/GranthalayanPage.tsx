import { Link } from "wouter";
import Reveal from "../components/Reveal";
import QuietImage from "../components/QuietImage";
import { EditorialQuote, EditorialDivider } from "../components/editorial";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { GRANTHAS, GRANTHALAYA_INTRO, READING_PROGRESSION } from "../content/granthalaya";
import { images } from "../system/images/registry";

export default function GranthalayanPage() {
  usePageMeta(PAGE_META.granthalaya);

  return (
    <PageLayout testId="granthalaya-page">

      {/* ── Manuscript chamber header ── */}
      <header
        data-testid="granthalaya-hero"
        className="relative pt-28 md:pt-36 pb-0"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            {/* Left — label, Devanagari, section index, image */}
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Granthālaya
                </p>
                <p className="mt-2 font-deva text-[1.3rem] text-ink-faint font-normal leading-relaxed">
                  ग्रन्थालय
                </p>
              </Reveal>

              {/* In-page manuscript index */}
              <Reveal delay={0.06}>
                <nav
                  aria-label="Granthālaya manuscript index"
                  className="hidden md:flex flex-col gap-3 mt-8 md:mt-10"
                >
                  {GRANTHAS.map((g) => (
                    <a
                      key={g.slug}
                      href={`#grantha-${g.numeral.toLowerCase()}`}
                      className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                    >
                      <span className="inline-block w-5 text-ink-faint num-tab">
                        {g.numeral}
                      </span>
                      {g.title}
                    </a>
                  ))}
                </nav>
              </Reveal>

              {/* Stack-of-books — manuscript continuity atmosphere */}
              <Reveal delay={0.18}>
                <div className="mt-10 md:mt-14 hidden md:block">
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

            {/* Right — institutional heading and mission */}
            <div className="col-span-12 md:col-span-9 pb-12 md:pb-16">
              <Reveal delay={0.04}>
                <h1
                  data-testid="granthalaya-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.08] tracking-tight max-w-prose-wide"
                >
                  {GRANTHALAYA_INTRO.headline}
                </h1>
              </Reveal>

              {GRANTHALAYA_INTRO.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.10 + i * 0.05}>
                  <p className={`text-lead text-ink-soft max-w-reading leading-[1.75] ${i === 0 ? "mt-7 md:mt-9" : "mt-5"}`}>
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

          </SectionGrid>
        </SiteContainer>
      </header>

      {/* ── Reading progression ── */}
      <SectionShell testId="granthalaya-progression" size="sm" border>
        <SiteContainer>
          <SectionGrid>

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  The reading order
                </p>
                <p className="mt-2 text-small text-ink-faint">
                  Suggested approach
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9">
              <ol
                aria-label="Manuscript reading progression"
                className="divide-y divide-ink/8 border-y border-ink/8"
              >
                {READING_PROGRESSION.map((entry, i) => (
                  <Reveal key={entry.label} delay={0.03 + i * 0.04} as="li">
                    <div className="py-5 md:py-6 flex items-baseline gap-8 md:gap-12">
                      <span
                        className="text-small text-ink-faint num-tab shrink-0 w-6"
                        aria-hidden
                      >
                        {["I", "II", "III", "IV"][i]}
                      </span>
                      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                        <span className="text-body text-ink font-normal">
                          {entry.label}
                        </span>
                        <span className="text-small text-ink-faint">
                          {entry.note}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Manuscript sections ── */}
      {GRANTHAS.map((grantha, gIdx) => (
        <SectionShell
          key={grantha.slug}
          id={`grantha-${grantha.numeral.toLowerCase()}`}
          testId={`granthalaya-${grantha.slug}`}
          size="md"
          border
        >
          <SiteContainer>
            <SectionGrid gapY="gap-y-8">

              {/* Left — numeral, type, Devanagari, state */}
              <div className="col-span-12 md:col-span-3">
                <Reveal>
                  <p className="text-micro tracking-widest uppercase text-ink-muted">
                    {grantha.numeral}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{grantha.typeLabel}
                  </p>
                  <p className="mt-3 font-deva text-[1.25rem] text-ink-soft font-normal leading-relaxed">
                    {grantha.devanagari}
                  </p>
                  <p className="mt-1 text-small text-ink-faint italic">
                    {grantha.sanskritMeaning}
                  </p>
                </Reveal>

                {/* Composition state — quiet, archival */}
                <Reveal delay={0.06}>
                  <div className="mt-6 md:mt-8 border-t border-ink/10 pt-5">
                    <p className="text-micro tracking-widest uppercase text-ink-faint">
                      Composition
                    </p>
                    <p className="mt-2 text-small text-ink-muted">
                      {grantha.compositionState}
                    </p>
                    {grantha.compositionNote && (
                      <p className="mt-2 text-small text-ink-faint leading-relaxed">
                        {grantha.compositionNote}
                      </p>
                    )}
                  </div>
                </Reveal>
              </div>

              {/* Right — title, doctrinal position, paragraphs, optional image */}
              <div className="col-span-12 md:col-span-9">
                <Reveal delay={0.05}>
                  <h2
                    className="font-display text-display font-normal text-ink leading-[1.18] tracking-tight max-w-prose-wide"
                  >
                    {grantha.titleDisplay}
                  </h2>
                </Reveal>

                {/* Doctrinal position — for Tattvaprashna and Tattvagrantha */}
                {grantha.doctrinalPosition && (
                  <Reveal delay={0.09}>
                    <EditorialQuote className="mt-8 md:mt-10">
                      {grantha.doctrinalPosition}
                    </EditorialQuote>
                  </Reveal>
                )}

                <Reveal delay={0.12}>
                  <div className={`max-w-reading ${grantha.doctrinalPosition ? "" : "mt-8 md:mt-10"}`}>
                    {grantha.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className={`text-body leading-[1.85] ${
                          idx < grantha.paragraphs.length - 1
                            ? "mb-[1.7em] text-ink-soft"
                            : "text-ink"
                        }`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>

                {/* Notebook image — only after Tattvaprashna (pregrantha) */}
                {gIdx === 0 && (
                  <Reveal delay={0.18}>
                    <div className="mt-12 md:mt-14 max-w-reading">
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
                )}

                {/* Tattvaprashna — quiet entry into the manuscript */}
                {gIdx === 0 && (
                  <Reveal delay={0.22}>
                    <div className="mt-10 md:mt-12 pt-8 border-t border-ink/8">
                      <Link
                        href="/granthalaya/tattvaprashna"
                        className="inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
                      >
                        <span
                          aria-hidden
                          className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                        />
                        <span>Enter the manuscript</span>
                      </Link>
                    </div>
                  </Reveal>
                )}
              </div>

            </SectionGrid>
          </SiteContainer>
        </SectionShell>
      ))}

      {/* ── Institutional note ── */}
      <SectionShell testId="granthalaya-note" size="md" border>
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9">

              {/* Vase — manuscript silence transition */}
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

              <Reveal delay={0.08}>
                <div className="mt-10 md:mt-12 max-w-reading">
                  {GRANTHALAYA_INTRO.institutionalNote.map((p, i) => (
                    <p
                      key={i}
                      className={`text-body leading-[1.85] ${
                        i < GRANTHALAYA_INTRO.institutionalNote.length - 1
                          ? "mb-[1.7em] text-ink-soft"
                          : "text-ink"
                      }`}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <EditorialDivider kind="ornament" className="mt-12 md:mt-14" />
              </Reveal>

              {/* Quiet institutional CTAs */}
              <Reveal delay={0.18}>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
                  >
                    <span aria-hidden className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                    <span>Read the origin</span>
                  </Link>
                  <Link
                    href="/philosophy"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Philosophy
                  </Link>
                  <Link
                    href="/archive"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Archive
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
