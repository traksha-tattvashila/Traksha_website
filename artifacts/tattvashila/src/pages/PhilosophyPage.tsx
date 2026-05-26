import { Link } from "wouter";
import Reveal from "../components/Reveal";
import QuietImage from "../components/QuietImage";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { PHILOSOPHY_SECTIONS, PHILOSOPHY_CLOSING } from "../content/principles";
import { EditorialDivider, EditorialQuote } from "../components/editorial";
import { images } from "../system/images/registry";
import { NOTES_SORTED } from "../content/notes";

const AWARENESS_NOTE = NOTES_SORTED.find((n) => n.category === "inner-life");

export default function PhilosophyPage() {
  usePageMeta(PAGE_META.philosophy);

  return (
    <PageLayout testId="philosophy-page">

      {/* ── Doctrinal header ── */}
      <header
        data-testid="philosophy-hero"
        className="relative pt-28 md:pt-36 pb-0"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            {/* Left col — section index + image */}
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted mb-6 md:mb-8">
                  Philosophy
                </p>

                {/* In-page doctrinal index — institutional, quiet */}
                <nav
                  aria-label="Doctrinal sections"
                  className="hidden md:flex flex-col gap-3"
                >
                  {PHILOSOPHY_SECTIONS.map((s) => (
                    <a
                      key={s.numeral}
                      href={`#section-${s.numeral.toLowerCase()}`}
                      className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                    >
                      <span className="inline-block w-5 text-ink-faint num-tab">
                        {s.numeral}
                      </span>
                      {s.label}
                    </a>
                  ))}
                </nav>
              </Reveal>

              {/* Community-under-tree — institutional philosophical atmosphere */}
              <Reveal delay={0.2}>
                <div className="mt-10 md:mt-14 hidden md:block">
                  <QuietImage
                    src={images.heroThreshold.src}
                    alt={images.heroThreshold.alt}
                    aspectClass="aspect-[4/3]"
                    fallbackTone="warm"
                    className="rounded-[2px]"
                  />
                  <p className="mt-3 text-micro tracking-widest uppercase text-ink-faint">
                    {images.heroThreshold.credit}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right col — doctrinal introduction */}
            <div className="col-span-12 md:col-span-9 pb-12 md:pb-16">
              <Reveal delay={0.05}>
                <h1
                  data-testid="philosophy-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.08] tracking-tight max-w-prose-wide"
                >
                  Awareness, integrated into ordinary life.
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-7 md:mt-9 text-lead text-ink-soft max-w-reading leading-[1.75]">
                  These are the working ideas behind Tattvashila. They are not
                  original to us &mdash; they are observations, drawn from many
                  traditions and from ordinary modern life, brought into one
                  place because they belong together.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-5 text-body text-ink-soft max-w-reading leading-[1.80]">
                  We have kept them as plain as we could. They are not a
                  doctrine to adopt, an identity to perform, or a programme to
                  follow. They are a set of working positions &mdash; held
                  carefully, revised slowly, and used in practice.
                </p>
              </Reveal>
            </div>

          </SectionGrid>
        </SiteContainer>
      </header>

      {/* ── Doctrinal sections ── */}
      {PHILOSOPHY_SECTIONS.map((s, sIdx) => {
        const isBeforeFinal = sIdx === PHILOSOPHY_SECTIONS.length - 2;
        const isFinal = sIdx === PHILOSOPHY_SECTIONS.length - 1;

        return (
          <div key={s.numeral}>
            {/* Contemplative pause before the final section — mountain-walk image */}
            {isBeforeFinal && (
              <SectionShell
                testId="philosophy-transition"
                size="base"
                border
              >
                <SiteContainer>
                  <SectionGrid>
                    <div className="col-span-12 md:col-span-3" />
                    <div className="col-span-12 md:col-span-9">
                      <Reveal>
                        <div className="max-w-prose-wide">
                          <QuietImage
                            src={images.journeyWalk.src}
                            alt={images.journeyWalk.alt}
                            aspectClass="aspect-[3/2]"
                            fallbackTone="warm"
                            className="rounded-[2px]"
                          />
                          <p className="mt-4 text-micro tracking-widest uppercase text-ink-faint">
                            {images.journeyWalk.credit}
                          </p>
                        </div>
                      </Reveal>
                    </div>
                  </SectionGrid>
                </SiteContainer>
              </SectionShell>
            )}

            <SectionShell
              id={`section-${s.numeral.toLowerCase()}`}
              testId={`philosophy-section-${s.numeral.toLowerCase()}`}
              size="md"
              border
            >
              <SiteContainer>
                <SectionGrid gapY="gap-y-8">

                  {/* Left col — numeral, label, traditional root */}
                  <div className="col-span-12 md:col-span-3">
                    <Reveal>
                      <p className="text-micro tracking-widest uppercase text-ink-muted">
                        {s.numeral}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{s.label}
                      </p>

                      {s.traditionalRoot && (
                        <p className="mt-3 text-small text-ink-faint italic">
                          {s.traditionalRoot}
                        </p>
                      )}

                      {s.devanagari && (
                        <p className="mt-1 font-display text-lg text-ink-faint font-normal">
                          {s.devanagari}
                        </p>
                      )}
                    </Reveal>
                  </div>

                  {/* Right col — title, doctrinal note, paragraphs */}
                  <div className="col-span-12 md:col-span-9">
                    <Reveal delay={0.05}>
                      <h2
                        className="font-display text-display font-normal text-ink leading-[1.18] tracking-tight max-w-prose-wide"
                      >
                        {s.title}
                      </h2>
                    </Reveal>

                    {s.doctrinalNote && (
                      <Reveal delay={0.08}>
                        <EditorialQuote className="mt-6">
                          {s.doctrinalNote}
                        </EditorialQuote>
                      </Reveal>
                    )}

                    <Reveal delay={0.12}>
                      <div
                        className={`${s.doctrinalNote ? "mt-6" : "mt-8 md:mt-10"} max-w-reading`}
                      >
                        {s.paragraphs.map((p, idx) => (
                          <p
                            key={idx}
                            className={`text-body leading-[1.85] ${
                              idx < s.paragraphs.length - 1
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
          </div>
        );
      })}

      {/* ── Institutional closing statement ── */}
      <SectionShell testId="philosophy-closing" size="lg" border>
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  The position
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <p className="font-display text-display-xl font-normal text-ink leading-[1.18] tracking-tight">
                  {PHILOSOPHY_CLOSING}
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <EditorialDivider kind="ornament" className="mt-12 md:mt-14" />
              </Reveal>

              {/* Quiet institutional CTAs — no product buttons */}
              <Reveal delay={0.16}>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
                  <Link
                    href="/about"
                    data-testid="philosophy-cta-origin"
                    className="inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
                  >
                    <span aria-hidden className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                    <span>Read the origin</span>
                  </Link>
                  <Link
                    href="/archive"
                    data-testid="philosophy-cta-archive"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Browse the archive
                  </Link>
                  <Link
                    href="/granthalaya"
                    data-testid="philosophy-cta-granthalaya"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Granthālaya
                  </Link>
                  <a
                    href="/#intake"
                    data-testid="philosophy-cta-intake"
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

      {/* ── Publication continuity — related reading ── */}
      {AWARENESS_NOTE && (
        <SectionShell testId="philosophy-continuity" size="md" border>
          <SiteContainer>
            <SectionGrid>
              <div className="col-span-12 md:col-span-3">
                <Reveal>
                  <p className="text-micro tracking-widest uppercase text-ink-muted">
                    Related reading
                  </p>
                </Reveal>
              </div>

              <div className="col-span-12 md:col-span-9">
                <Reveal delay={0.04}>
                  <p className="text-small text-ink-muted max-w-reading mb-10 md:mb-12">
                    The ideas above are not complete in the abstract. They
                    appear in the Quiet Notes and in the Granthālaya as
                    concrete, lived inquiry.
                  </p>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="divide-y divide-ink/8 border-y border-ink/8">
                    {/* Related note */}
                    <Link
                      href={`/notes/${AWARENESS_NOTE.slug}`}
                      className="block py-8 group"
                      data-testid="philosophy-related-note"
                    >
                      <p className="text-micro tracking-widest uppercase text-ink-faint mb-3">
                        Quiet Notes &nbsp;·&nbsp; {AWARENESS_NOTE.reading} read
                      </p>
                      <h3 className="font-display text-title font-normal text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle leading-[1.2] tracking-tight">
                        {AWARENESS_NOTE.title}
                      </h3>
                      <p className="mt-3 text-body text-ink-soft max-w-reading leading-relaxed">
                        {AWARENESS_NOTE.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-3 text-small text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle">
                        Read the note
                        <span
                          aria-hidden
                          className="block w-6 h-px bg-current transition-[width] duration-700 ease-gentle group-hover:w-10"
                        />
                      </span>
                    </Link>

                    {/* Granthālaya pointer */}
                    <Link
                      href="/granthalaya"
                      className="block py-8 group"
                      data-testid="philosophy-related-granthalaya"
                    >
                      <p className="text-micro tracking-widest uppercase text-ink-faint mb-3">
                        Granthālaya &nbsp;·&nbsp; ग्रन्थालय
                      </p>
                      <h3 className="font-display text-title font-normal text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle leading-[1.2] tracking-tight">
                        The canonical manuscript space.
                      </h3>
                      <p className="mt-3 text-body text-ink-soft max-w-reading leading-relaxed">
                        These ideas are the ground from which the Granthālaya
                        texts are being composed. Tattvaprashna and
                        Tattvagrantha take each of them further — slowly, in
                        manuscript.
                      </p>
                      <span className="mt-5 inline-flex items-center gap-3 text-small text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle">
                        Granthālaya
                        <span
                          aria-hidden
                          className="block w-6 h-px bg-current transition-[width] duration-700 ease-gentle group-hover:w-10"
                        />
                      </span>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </SectionGrid>
          </SiteContainer>
        </SectionShell>
      )}

    </PageLayout>
  );
}
