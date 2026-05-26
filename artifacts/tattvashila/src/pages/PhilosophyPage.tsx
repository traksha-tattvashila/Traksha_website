import Reveal from "../components/Reveal";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { PHILOSOPHY_SECTIONS, PHILOSOPHY_CLOSING } from "../content/principles";

export default function PhilosophyPage() {
  usePageMeta(PAGE_META.philosophy);

  return (
    <PageLayout testId="philosophy-page">

      <section
        data-testid="philosophy-hero"
        className="relative pt-28 md:pt-36 pb-12 md:pb-16"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Philosophy
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <h1
                  data-testid="philosophy-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.12] tracking-tight"
                >
                  Awareness, integrated into ordinary life.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 md:mt-8 text-lead text-ink-soft max-w-reading">
                  These are the working ideas behind Tattvashila. We have kept
                  them as plain as we could. They are not original to us &mdash;
                  they are observations, drawn from many traditions and from
                  ordinary modern life, brought into one place because they
                  belong together.
                </p>
              </Reveal>
            </div>
          </SectionGrid>
        </SiteContainer>
      </section>

      {PHILOSOPHY_SECTIONS.map((s) => (
        <SectionShell
          key={s.numeral}
          testId={`philosophy-section-${s.numeral.toLowerCase()}`}
          size="md"
        >
          <SiteContainer>
            <SectionGrid gapY="gap-y-8">
              <div className="col-span-12 md:col-span-3">
                <Reveal>
                  <p className="text-micro tracking-widest uppercase text-ink-muted">
                    {s.numeral} &nbsp;·&nbsp; {s.label}
                  </p>
                </Reveal>
              </div>
              <div className="col-span-12 md:col-span-9 max-w-prose-wide">
                <Reveal delay={0.05}>
                  <h2 className="font-display text-subhead font-normal text-ink leading-[1.18]">
                    {s.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-6 md:mt-7 space-y-4 text-body text-ink-soft">
                    {s.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className={idx === s.paragraphs.length - 1 ? "text-ink" : ""}
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
      ))}

      <SectionShell testId="philosophy-closing" size="lg" bg="bg-bone-light">
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  In summary
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <p className="font-display text-title text-ink leading-[1.25]">
                  {PHILOSOPHY_CLOSING}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-12 md:mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href="/about"
                    data-testid="philosophy-cta-origin"
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-ink text-bone-light text-small font-medium rounded-[2px] hover:bg-ink-soft transition-colors duration-500 ease-gentle"
                  >
                    <span>Read the origin</span>
                    <span aria-hidden className="block w-6 h-px bg-current transition-[width] duration-500 ease-gentle group-hover:w-10" />
                  </a>
                  <a
                    href="/#intake"
                    data-testid="philosophy-cta-intake"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
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
