import { Link } from "wouter";
import Reveal from "../components/Reveal";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { GRANTHAS } from "../content/granthalaya";

/**
 * Granthālaya — Catalogue.
 * The works of the library, in their intended order. A quiet, hairline-divided
 * register — not a grid of cards. Each row is itself the way forward into that
 * grantha's detail page. No work is a dead end.
 */
export default function GranthaCataloguePage() {
  usePageMeta(PAGE_META.catalogue);

  return (
    <PageLayout testId="granthalaya-catalogue-page">

      {/* ── Header ── */}
      <header className="relative pt-28 md:pt-36 pb-0">
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Granthālaya &nbsp;·&nbsp; Catalogue
                </p>
                <p className="mt-2 font-deva text-[1.3rem] text-ink-faint font-normal leading-relaxed">
                  अनुक्रम
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 pb-4 md:pb-6">
              <Reveal delay={0.04}>
                <h1 className="font-display text-hero font-normal text-ink leading-[1.1] tracking-tight max-w-prose-wide">
                  The works, in their intended order.
                </h1>
              </Reveal>
              <Reveal delay={0.10}>
                <p className="mt-7 md:mt-9 text-lead text-ink-soft max-w-reading leading-[1.75]">
                  Read from the beginning. Each work prepares the one that
                  follows it; each is held until it is ready.
                </p>
              </Reveal>
            </div>

          </SectionGrid>
        </SiteContainer>
      </header>

      {/* ── The register ── */}
      <SectionShell testId="catalogue-register" size="md">
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
                aria-label="Granthālaya catalogue"
                data-testid="catalogue-list"
                className="divide-y divide-ink/10 border-y border-ink/10"
              >
                {GRANTHAS.map((g, i) => (
                  <Reveal key={g.slug} delay={0.03 + i * 0.04} as="li">
                    <Link
                      href={`/granthalaya/${g.slug}`}
                      data-testid={`catalogue-row-${g.slug}`}
                      className="group grid grid-cols-12 gap-x-6 py-7 md:py-9 transition-opacity duration-500 ease-gentle"
                    >
                      {/* Numeral + title */}
                      <div className="col-span-12 md:col-span-5 mb-3 md:mb-0">
                        <div className="flex items-baseline gap-4">
                          <span className="text-small text-ink-faint num-tab shrink-0 w-5">
                            {g.numeral}
                          </span>
                          <div>
                            <h2 className="font-display text-2xl md:text-3xl font-normal text-ink group-hover:text-river-soft transition-colors duration-500 ease-gentle">
                              {g.title}
                            </h2>
                            <p className="mt-1 font-deva text-base text-ink-faint">
                              {g.devanagari}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Subtitle */}
                      <p className="col-span-12 md:col-span-4 text-body text-ink-soft self-center pl-9 md:pl-0">
                        {g.subtitle}
                      </p>

                      {/* Status + Pravesh (entry into the grantha) */}
                      <div className="col-span-12 md:col-span-3 self-center mt-3 md:mt-0 pl-9 md:pl-0 md:text-right">
                        <span className="text-micro tracking-widest uppercase text-ink-faint">
                          {g.compositionState}
                        </span>
                        <span
                          aria-hidden
                          className="mt-2 hidden md:flex items-baseline justify-end gap-2 text-small text-ink-muted opacity-50 group-hover:opacity-90 transition-opacity duration-500"
                        >
                          <span className="font-deva">प्रवेश</span>
                          <span>→</span>
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </ol>

              <Reveal delay={0.2}>
                <div className="mt-12 md:mt-14">
                  <Link
                    href="/granthalaya"
                    className="group inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle"
                  >
                    <span aria-hidden>←</span>
                    <span>Return to the Granthālaya</span>
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
