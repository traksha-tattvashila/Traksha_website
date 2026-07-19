import Reveal from "../components/Reveal";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import {
  CONSTITUTION_EYEBROW,
  CONSTITUTION_HEADING,
  CONSTITUTION_INTRO,
  CONSTITUTION_SECTIONS,
  CONSTITUTION_FOOTER,
} from "../content/constitution";

export default function ConstitutionPage() {
  usePageMeta(PAGE_META.constitution);

  return (
    <PageLayout testId="constitution-page">

      {/* ── Constitution header ── */}
      <header data-testid="constitution-hero" className="relative pt-28 md:pt-36 pb-0">
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  {CONSTITUTION_EYEBROW}
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 pb-12 md:pb-16">
              <Reveal delay={0.05}>
                <h1
                  data-testid="constitution-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.1] tracking-tight max-w-prose-wide"
                >
                  {CONSTITUTION_HEADING}
                </h1>
              </Reveal>
            </div>

          </SectionGrid>
        </SiteContainer>
      </header>

      {/* ── Intro + Sections ── */}
      <SectionShell testId="constitution-body" size="md" border>
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9 max-w-reading">

              {/* Intro */}
              <Reveal delay={0.05}>
                <p className="text-body leading-[1.85] text-ink-soft mb-[1.7em]">
                  {CONSTITUTION_INTRO}
                </p>
              </Reveal>

              {/* Sections */}
              {CONSTITUTION_SECTIONS.map((section, i) => (
                <Reveal key={i} delay={0.05 + (i + 1) * 0.07}>
                  <p className="text-micro tracking-widest uppercase text-ink-muted mb-3 mt-10">
                    {section.label}
                  </p>
                  <p className="text-body leading-[1.85] text-ink-soft">
                    {section.text}
                  </p>
                </Reveal>
              ))}

            </div>
          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Footer line ── */}
      <SectionShell testId="constitution-footer" size="md" border>
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9 max-w-reading">
              <Reveal>
                <p className="text-micro leading-[1.85] text-ink-muted">
                  {CONSTITUTION_FOOTER}
                </p>
              </Reveal>
            </div>
          </SectionGrid>
        </SiteContainer>
      </SectionShell>

    </PageLayout>
  );
}
