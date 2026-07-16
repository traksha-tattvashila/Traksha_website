import { Link } from "wouter";
import Reveal from "../components/Reveal";
import QuietImage from "../components/QuietImage";
import { EditorialDivider } from "../components/editorial";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { GRANTHALAYA_INTRO } from "../content/granthalaya";
import { images } from "../system/images/registry";

/**
 * Granthālaya — Entry.
 * The threshold of the manuscript space. It says what the Granthālaya is and
 * extends a single forward invitation into the catalogue. It does not list the
 * works; that is the catalogue's office.
 */
export default function GranthalayaEntryPage() {
  usePageMeta(PAGE_META.granthalaya);

  return (
    <PageLayout testId="granthalaya-entry-page">

      {/* ── Manuscript chamber header ── */}
      <header
        data-testid="granthalaya-hero"
        className="relative pt-28 md:pt-36 pb-0"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            {/* Left — label, Devanagari, atmosphere */}
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Granthālaya
                </p>
                <p className="mt-2 font-deva text-[1.3rem] text-ink-faint font-normal leading-relaxed">
                  ग्रन्थालय
                </p>
              </Reveal>

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
                  className="font-display text-hero font-normal text-ink leading-[1.1] tracking-tight max-w-prose-wide"
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

      {/* ── Institutional note + single forward invitation ── */}
      <SectionShell testId="granthalaya-note" size="md" border>
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

              {/* The single forward movement — into the catalogue */}
              <Reveal delay={0.18}>
                <div className="mt-2">
                  <Link
                    href="/granthalaya/catalogue"
                    data-testid="granthalaya-enter-catalogue"
                    className="group inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle"
                  >
                    <span
                      aria-hidden
                      className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                    />
                    <span>Enter the catalogue</span>
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
