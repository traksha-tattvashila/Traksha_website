import { Link } from "wouter";
import Reveal from "../components/Reveal";
import QuietImage from "../components/QuietImage";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { ORIGIN_SECTIONS, ORIGIN_RECORD, ORIGIN_CLOSING } from "../content/origin";
import { EditorialDivider } from "../components/editorial";
import { images } from "../system/images/registry";

export default function OriginPage() {
  usePageMeta(PAGE_META.origin);

  return (
    <PageLayout testId="about-page">

      {/* ── Founding manuscript header ── */}
      <header
        data-testid="about-hero"
        className="relative pt-28 md:pt-36 pb-0"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            {/* Left col — section index + image */}
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted mb-6 md:mb-8">
                  Origin
                </p>

                {/* In-page manuscript index */}
                <nav
                  aria-label="Origin manuscript sections"
                  className="hidden md:flex flex-col gap-3"
                >
                  {ORIGIN_SECTIONS.map((s) => (
                    <a
                      key={s.numeral}
                      href={`#origin-${s.numeral.toLowerCase()}`}
                      className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                    >
                      <span className="inline-block w-5 text-ink-faint num-tab">
                        {s.numeral}
                      </span>
                      {s.label}
                    </a>
                  ))}
                  <a
                    href="#origin-record"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link mt-1"
                  >
                    <span className="inline-block w-5 text-ink-faint">&mdash;</span>
                    A record
                  </a>
                </nav>
              </Reveal>

              {/* Solitary mountain-walk — institutional emergence */}
              <Reveal delay={0.2}>
                <div className="mt-10 md:mt-14 hidden md:block">
                  <QuietImage
                    src={images.journeyWalk.src}
                    alt={images.journeyWalk.alt}
                    aspectClass="aspect-[3/2]"
                    fallbackTone="warm"
                    className="rounded-[2px]"
                  />
                  <p className="mt-3 text-micro tracking-widest uppercase text-ink-faint">
                    {images.journeyWalk.credit}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right col — founding statement */}
            <div className="col-span-12 md:col-span-9 pb-12 md:pb-16">
              <Reveal delay={0.05}>
                <h1
                  data-testid="about-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.1] tracking-tight max-w-prose-wide"
                >
                  This did not begin as an idea. It began as a series of quiet observations.
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-7 md:mt-9 text-lead text-ink-soft max-w-reading leading-[1.75]">
                  Tattvashila is not a movement, a startup, or a personal vision.
                  It is a long body of work, put together carefully, in response
                  to something many people recognise privately but rarely name.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-5 text-body text-ink-soft max-w-reading leading-[1.80]">
                  What follows is an account of why this institution exists,
                  what philosophical absence it responds to, and what it is
                  building toward. It is written as a record, not a manifesto.
                </p>
              </Reveal>
            </div>

          </SectionGrid>
        </SiteContainer>
      </header>

      {/* ── Manuscript sections ── */}
      {ORIGIN_SECTIONS.map((s, sIdx) => {
        const isBeforeManuscripts = sIdx === ORIGIN_SECTIONS.length - 2;

        return (
          <div key={s.numeral}>
            {/* Contemplative visual pause before Section VI */}
            {isBeforeManuscripts && (
              <SectionShell
                testId="about-transition"
                size="base"
                border
              >
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
                          <p className="mt-3 text-micro tracking-widest uppercase text-ink-faint">
                            {images.vaseInterior.credit}
                          </p>
                        </div>
                      </Reveal>
                    </div>
                  </SectionGrid>
                </SiteContainer>
              </SectionShell>
            )}

            <SectionShell
              id={`origin-${s.numeral.toLowerCase()}`}
              testId={`about-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
              size="md"
              border
            >
              <SiteContainer>
                <SectionGrid gapY="gap-y-8">

                  <div className="col-span-12 md:col-span-3">
                    <Reveal>
                      <p className="text-micro tracking-widest uppercase text-ink-muted">
                        {s.numeral}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{s.label}
                      </p>
                    </Reveal>
                  </div>

                  <div className="col-span-12 md:col-span-9">
                    <Reveal delay={0.05}>
                      <h2
                        className="font-display text-display font-normal text-ink leading-[1.18] tracking-tight max-w-prose-wide"
                      >
                        {s.title}
                      </h2>
                    </Reveal>

                    <Reveal delay={0.12}>
                      <div className="mt-8 md:mt-10 max-w-reading">
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

      {/* ── Editorial chronology — a record of emergence ── */}
      <SectionShell
        id="origin-record"
        testId="about-record"
        size="md"
        border
      >
        <SiteContainer>
          <SectionGrid>

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  A record
                </p>
                <p className="mt-2 text-small text-ink-faint">
                  of emergence
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9">
              <Reveal delay={0.04}>
                <p className="text-body text-ink-soft max-w-reading mb-10 md:mb-12">
                  An institutional record is not a timeline of achievements.
                  It is a record of what was done and when — held plainly,
                  without the distortion of retrospective meaning.
                </p>
              </Reveal>

              <ol
                aria-label="Institutional record of emergence"
                className="divide-y divide-ink/8 border-y border-ink/8"
              >
                {ORIGIN_RECORD.map((record, i) => (
                  <Reveal key={record.year} delay={0.03 + i * 0.04} as="li">
                    <div className="py-6 md:py-7 flex items-baseline gap-8 md:gap-12">
                      <time
                        dateTime={record.year}
                        className="text-small text-ink-faint num-tab shrink-0 w-10"
                      >
                        {record.year}
                      </time>
                      <p className="text-body text-ink-soft leading-relaxed">
                        {record.entry}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Institutional closing — the foundational statement ── */}
      <SectionShell testId="about-closing" size="lg" border>
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
                  {ORIGIN_CLOSING}
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <EditorialDivider kind="ornament" className="mt-12 md:mt-14" />
              </Reveal>

              {/* Quiet institutional CTAs — no product buttons */}
              <Reveal delay={0.16}>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
                  <Link
                    href="/philosophy"
                    data-testid="about-cta-philosophy"
                    className="inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
                  >
                    <span aria-hidden className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                    <span>Read the philosophy</span>
                  </Link>
                  <Link
                    href="/granthalaya"
                    data-testid="about-cta-granthalaya"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Granthālaya
                  </Link>
                  <Link
                    href="/archive"
                    data-testid="about-cta-archive"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Archive
                  </Link>
                  <a
                    href="/#intake"
                    data-testid="about-cta-intake"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    Write to us, quietly
                  </a>
                </div>
              </Reveal>
            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Civilizational continuity — cross-institutional links ── */}
      <SectionShell testId="about-continuity" size="md" border>
        <SiteContainer>
          <SectionGrid>

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Continue reading
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9">
              <div className="divide-y divide-ink/8 border-y border-ink/8">

                {/* Philosophy */}
                <Reveal>
                  <Link
                    href="/philosophy"
                    className="block py-8 group"
                    data-testid="about-link-philosophy"
                  >
                    <p className="text-micro tracking-widest uppercase text-ink-faint mb-3">
                      Philosophy
                    </p>
                    <h3 className="font-display text-title font-normal text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle leading-[1.2] tracking-tight">
                      Awareness, integrated into ordinary life.
                    </h3>
                    <p className="mt-3 text-body text-ink-soft max-w-reading leading-relaxed">
                      The working ideas behind Tattvashila — the three doctrinal
                      positions and the philosophical framework that informs all
                      institutional work.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-3 text-small text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle">
                      Read the philosophy
                      <span aria-hidden className="block w-6 h-px bg-current transition-[width] duration-700 ease-gentle group-hover:w-10" />
                    </span>
                  </Link>
                </Reveal>

                {/* Granthālaya */}
                <Reveal delay={0.04}>
                  <Link
                    href="/granthalaya"
                    className="block py-8 group"
                    data-testid="about-link-granthalaya"
                  >
                    <p className="text-micro tracking-widest uppercase text-ink-faint mb-3">
                      Granthālaya &nbsp;·&nbsp; ग्रन्थालय
                    </p>
                    <h3 className="font-display text-title font-normal text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle leading-[1.2] tracking-tight">
                      The canonical institutional manuscript space.
                    </h3>
                    <p className="mt-3 text-body text-ink-soft max-w-reading leading-relaxed">
                      Where the institutional working ideas will eventually be
                      held at manuscript scale — in Tattvaprashna and the
                      Tattvagrantha series.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-3 text-small text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle">
                      Granthālaya
                      <span aria-hidden className="block w-6 h-px bg-current transition-[width] duration-700 ease-gentle group-hover:w-10" />
                    </span>
                  </Link>
                </Reveal>

              </div>
            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

    </PageLayout>
  );
}
