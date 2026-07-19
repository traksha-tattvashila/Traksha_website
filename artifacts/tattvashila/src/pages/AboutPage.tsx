import Reveal from "../components/Reveal";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { ABOUT_EYEBROW, ABOUT_HEADING, ABOUT_PARAGRAPHS } from "../content/about";

export default function AboutPage() {
  usePageMeta(PAGE_META.about);

  return (
    <PageLayout testId="about-page">

      {/* ── About header ── */}
      <header data-testid="about-hero" className="relative pt-28 md:pt-36 pb-0">
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  {ABOUT_EYEBROW}
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 pb-12 md:pb-16">
              <Reveal delay={0.05}>
                <h1
                  data-testid="about-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.1] tracking-tight max-w-prose-wide"
                >
                  {ABOUT_HEADING}
                </h1>
              </Reveal>
            </div>

          </SectionGrid>
        </SiteContainer>
      </header>

      {/* ── Body ── */}
      <SectionShell testId="about-body" size="md" border>
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9 max-w-reading">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.07}>
                  {p.label && (
                    <p className={`text-micro tracking-widest uppercase text-ink-muted mb-3${i > 0 ? " mt-10" : ""}`}>
                      {p.label}
                    </p>
                  )}
                  <p
                    className={`text-body leading-[1.85] text-ink-soft${
                      i < ABOUT_PARAGRAPHS.length - 1 ? " mb-[1.7em]" : ""
                    }`}
                  >
                    {p.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Stay in correspondence CTA ── */}
      <SectionShell testId="about-cta" size="md" border>
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9">
              <Reveal>
                <a
                  href="/#intake"
                  data-testid="about-intake-cta"
                  className="inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
                >
                  <span
                    aria-hidden
                    className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                  />
                  <span>Stay in correspondence</span>
                </a>
              </Reveal>
            </div>
          </SectionGrid>
        </SiteContainer>
      </SectionShell>

    </PageLayout>
  );
}
