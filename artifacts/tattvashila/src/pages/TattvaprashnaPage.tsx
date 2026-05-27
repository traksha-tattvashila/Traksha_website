import { Link } from "wouter";
import Reveal from "../components/Reveal";
import { EditorialDivider } from "../components/editorial";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { GRANTHAS } from "../content/granthalaya";

const grantha = GRANTHAS.find(g => g.slug === "tattvaprashna")!;

export default function TattvaprashnaPage() {
  usePageMeta(PAGE_META.tattvaprashna);

  return (
    <PageLayout testId="tattvaprashna-page">

      {/* ── Canonical Frontispiece ── */}
      <section
        aria-label="Tattvaprashna manuscript frontispiece"
        data-testid="tattvaprashna-frontispiece"
        className="ms-frontispiece"
      >
        <div className="ms-frontispiece-inner">

          {/* Series designation */}
          <Reveal>
            <p className="ms-series-label">
              तत्त्वग्रंथ श्रृंखला का एक पूर्व-ग्रंथ
            </p>
          </Reveal>

          {/* Main title — Devanagari dominant */}
          <Reveal delay={0.06}>
            <h1 className="ms-title-deva">तत्त्वप्रश्न</h1>
            <p className="ms-title-roman">Tattvaprashna</p>
          </Reveal>

          {/* Manuscript rule */}
          <Reveal delay={0.10}>
            <div className="ms-rule" />
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.13}>
            <p className="ms-subtitle-deva">
              मानव स्वतंत्रता, व्यवस्था<br />
              और उत्तरदायित्व पर<br />
              एक विवेचनात्मक ग्रंथ
            </p>
            <p className="ms-subtitle-roman mt-3">
              A critical inquiry into human freedom, order, and responsibility
            </p>
          </Reveal>

          {/* Silence */}
          <div className="ms-silence-lg" />

          {/* Author */}
          <Reveal delay={0.17}>
            <p className="text-micro tracking-widest uppercase text-ink-faint mb-2">
              लेखक
            </p>
            <p className="ms-author">Vikram A. Mitra</p>
          </Reveal>

          {/* Foot — institution colophon */}
          <Reveal delay={0.20}>
            <div className="ms-frontispiece-foot mt-8">
              <span className="ms-foot-deva">तत्त्वशिला</span>
              <span className="ms-foot-sep" />
              <span className="ms-foot-roman">Tattvashila</span>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── Manuscript context — institutional prose ── */}
      <SectionShell
        testId="tattvaprashna-context"
        size="md"
        border
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8">

            {/* Left — numeral, type label, composition state */}
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  {grantha.numeral}&nbsp;&nbsp;·&nbsp;&nbsp;{grantha.typeLabel}
                </p>
                <p className="mt-3 font-deva text-[1.2rem] text-ink-soft font-normal leading-relaxed">
                  {grantha.devanagari}
                </p>
                <p className="mt-1 text-small text-ink-faint italic">
                  {grantha.sanskritMeaning}
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="mt-6 border-t border-ink/10 pt-5">
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

            {/* Right — doctrinal position + institutional paragraphs */}
            <div className="col-span-12 md:col-span-9">

              {grantha.doctrinalPosition && (
                <Reveal delay={0.05}>
                  <blockquote className="border-l border-ink/15 pl-6 mb-8 md:mb-10">
                    <p className="text-lead text-ink-soft italic leading-[1.75]">
                      {grantha.doctrinalPosition}
                    </p>
                  </blockquote>
                </Reveal>
              )}

              <Reveal delay={0.09}>
                <div className="max-w-reading">
                  {grantha.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={`text-body leading-[1.85] ${
                        i < grantha.paragraphs.length - 1
                          ? "mb-[1.7em] text-ink-soft"
                          : "text-ink"
                      }`}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>

            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Manuscript preparation notice ── */}
      <SectionShell
        testId="tattvaprashna-preparation"
        size="md"
        border
      >
        <SiteContainer>
          <SectionGrid>

            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9">
              <Reveal>
                <div className="max-w-reading">

                  {/* Preparation notice in Devanagari */}
                  <p className="font-deva text-[1.05rem] leading-[2] text-ink-soft mb-5">
                    यह ग्रंथ तैयार किया जा रहा है।<br />
                    इसे शीघ्रता में नहीं लिखा जा रहा।
                  </p>

                  <p className="text-body text-ink-soft leading-[1.85] mb-[1.7em]">
                    Tattvaprashna is not being written quickly. It is the
                    prerequisite to all that follows — the philosophical clearing
                    that makes everything else possible. It takes the time it
                    requires.
                  </p>

                  <p className="text-body text-ink leading-[1.85]">
                    When it is ready, the manuscript will appear here.
                  </p>

                </div>
              </Reveal>

              <Reveal delay={0.10}>
                <EditorialDivider kind="ornament" className="mt-12 md:mt-14" />
              </Reveal>

              {/* Navigation — quiet, institutional */}
              <Reveal delay={0.14}>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
                  <Link
                    href="/granthalaya"
                    className="inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
                  >
                    <span
                      aria-hidden
                      className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                    />
                    <span>Return to Granthālaya</span>
                  </Link>
                  <Link
                    href="/philosophy"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Philosophy
                  </Link>
                  <Link
                    href="/about"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Origin
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
