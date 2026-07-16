import { Link, useParams } from "wouter";
import Reveal from "../components/Reveal";
import { EditorialQuote } from "../components/editorial";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildTitle, buildCanonicalUrl } from "../content/metadata";
import { getGranthaBySlug } from "../content/granthalaya";
import NotFound from "./not-found";

/**
 * Grantha — Detail.
 * One page per work, fully data-driven. It explains what the grantha is, why it
 * exists, where it stands in the series, and how it relates to the works to
 * come. Only when a readable manuscript exists does it offer entry into it;
 * otherwise it states, quietly, the work's place in composition.
 */
export default function GranthaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const grantha = getGranthaBySlug(slug);

  usePageMeta(
    grantha
      ? {
          title: buildTitle(`${grantha.title} — ${grantha.devanagari}`),
          description: grantha.subtitle,
          ogTitle: buildTitle(`${grantha.title} — ${grantha.devanagari}`),
          ogDescription: grantha.titleDisplay,
          ogType: "website",
          canonicalUrl: buildCanonicalUrl(`/granthalaya/${grantha.slug}`),
        }
      : {
          title: buildTitle("Not found — Granthālaya"),
          description: "This grantha does not exist.",
          canonicalUrl: buildCanonicalUrl("/granthalaya/catalogue"),
        },
  );

  if (!grantha) return <NotFound />;

  return (
    <PageLayout testId="grantha-detail-page">

      {/* ── Header ── */}
      <header className="relative pt-28 md:pt-36 pb-0">
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            {/* Left — numeral, type, Devanagari, composition */}
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  {grantha.numeral}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{grantha.typeLabel}
                </p>
                <p className="mt-3 font-deva text-[1.4rem] text-ink-soft font-normal leading-relaxed">
                  {grantha.devanagari}
                </p>
                <p className="mt-1 text-small text-ink-faint italic">
                  {grantha.sanskritMeaning}
                </p>
              </Reveal>

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

            {/* Right — title + doctrinal position */}
            <div className="col-span-12 md:col-span-9 pb-4 md:pb-6">
              <Reveal delay={0.04}>
                <h1 className="font-display text-hero font-normal text-ink leading-[1.1] tracking-tight max-w-prose-wide">
                  {grantha.titleDisplay}
                </h1>
              </Reveal>

              {grantha.doctrinalPosition && (
                <Reveal delay={0.10}>
                  <EditorialQuote className="mt-8 md:mt-10">
                    {grantha.doctrinalPosition}
                  </EditorialQuote>
                </Reveal>
              )}
            </div>

          </SectionGrid>
        </SiteContainer>
      </header>

      {/* ── Detail movements ── */}
      <SectionShell testId="grantha-detail-body" size="md">
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9">
              {grantha.detailSections.map((section, i) => (
                <Reveal key={section.label} delay={0.04 + i * 0.04}>
                  <section
                    className={`max-w-reading ${i > 0 ? "mt-12 md:mt-16" : ""}`}
                    data-testid={`detail-section-${i}`}
                  >
                    <p className="text-micro tracking-widest uppercase text-ink-faint mb-5">
                      {section.label}
                    </p>
                    {section.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className={`text-body leading-[1.85] text-ink-soft ${idx > 0 ? "mt-[1.7em]" : ""}`}
                      >
                        {p}
                      </p>
                    ))}
                  </section>
                </Reveal>
              ))}

              {/* ── Way forward ── */}
              <Reveal delay={0.2}>
                <div className="mt-14 md:mt-20 pt-8 border-t border-ink/8">
                  {grantha.hasManuscript ? (
                    <Link
                      href={`/granthalaya/${grantha.slug}/enter`}
                      data-testid="detail-enter-manuscript"
                      className="group inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle"
                    >
                      <span
                        aria-hidden
                        className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                      />
                      <span>Enter the manuscript</span>
                    </Link>
                  ) : (
                    <p
                      className="text-small text-ink-faint italic"
                      data-testid="detail-no-manuscript"
                    >
                      This manuscript is {grantha.compositionState.toLowerCase()}.
                      It will be placed in the Granthālaya when it is ready.
                    </p>
                  )}

                  <div className="mt-8">
                    <Link
                      href="/granthalaya/catalogue"
                      className="inline-flex items-center gap-3 text-small text-ink-faint hover:text-ink-muted transition-colors duration-700 ease-gentle"
                    >
                      <span aria-hidden>←</span>
                      <span>Return to the catalogue</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </SectionGrid>
        </SiteContainer>
      </SectionShell>

    </PageLayout>
  );
}
