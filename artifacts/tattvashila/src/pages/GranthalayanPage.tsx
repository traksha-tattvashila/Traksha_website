import { Link } from "wouter";
import Reveal from "../components/Reveal";
import QuietImage from "../components/QuietImage";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import { getPublishedGranths, getForthcomingGranths } from "../lib/granth";
import { images } from "../system/images/registry";

const WORKS_IN_PREPARATION = [
  {
    slug: "tattvaprashna",
    title: "Tattvaprashna",
    devanagari: "तत्त्वप्रश्न",
    subtitle: "The foundational pre-grantha",
    description:
      "A set of considered questions that establish the philosophical ground before systematic composition begins. Tattvaprashna does not argue — it inquires. It clears the field.",
    status: "In preparation",
  },
  {
    slug: "tattvagrantha",
    title: "Tattvagrantha",
    devanagari: "तत्त्वग्रन्थ",
    subtitle: "The principal institutional manuscript series",
    description:
      "The central text of Tattvashila. A sustained, systematic manuscript on awareness, responsibility, and the integration of inner life with ordinary existence. It is being composed carefully, without a schedule.",
    status: "In composition",
  },
  {
    slug: "commentaries",
    title: "Commentaries",
    devanagari: "टीका",
    subtitle: "Careful readings of primary source texts",
    description:
      "Commentaries engage directly with classical texts across philosophical traditions — read closely, not ceremonially. They are not summaries, but active encounters with existing thought.",
    status: "Not yet begun",
  },
  {
    slug: "institutional-manuscripts",
    title: "Institutional Manuscripts",
    devanagari: "संस्थागत ग्रन्थ",
    subtitle: "Foundational positional texts of Tattvashila",
    description:
      "Formal institutional texts that define the philosophical positions, methodological commitments, and civilizational orientation of Tattvashila as an institution.",
    status: "Forthcoming",
  },
] as const;

export default function GranthalayanPage() {
  usePageMeta(PAGE_META.granthalaya);

  return (
    <PageLayout testId="granthalaya-page">

      {/* ── Header ── */}
      <header
        data-testid="granthalaya-hero"
        className="relative pt-28 md:pt-36 pb-0"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Granthālaya
                </p>
              </Reveal>
              <Reveal delay={0.04}>
                <p className="mt-2 font-display text-xl text-ink-faint font-normal">
                  ग्रन्थालय
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 md:mt-12 hidden md:block">
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

            <div className="col-span-12 md:col-span-9 pb-12 md:pb-16">
              <Reveal delay={0.04}>
                <h1
                  data-testid="granthalaya-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.1] tracking-tight max-w-prose-wide"
                >
                  The canonical institutional manuscript space.
                </h1>
              </Reveal>

              <Reveal delay={0.10}>
                <p className="mt-6 md:mt-8 text-lead text-ink-soft max-w-reading">
                  Granthālaya is not a blog category. It is the institutional
                  manuscript library of Tattvashila — a place where texts are
                  composed carefully, held patiently, and released when ready.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-5 text-body text-ink-soft max-w-reading">
                  The works gathered here are long in composition. They are not
                  articles. They are manuscripts — sustained, systematic,
                  institutionally committed.
                </p>
              </Reveal>
            </div>

          </SectionGrid>
        </SiteContainer>
      </header>

      {/* ── Works in preparation ── */}
      <SectionShell testId="granthalaya-works" size="sm" border>
        <SiteContainer>
          <SectionGrid>

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  What is being composed
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9">
              <ol
                aria-label="Works in the Granthālaya"
                className="divide-y divide-ink/8"
              >
                {WORKS_IN_PREPARATION.map((work, i) => (
                  <Reveal key={work.slug} delay={0.04 + i * 0.06} as="li">
                    <article
                      data-testid={`granthalaya-work-${work.slug}`}
                      className="granthalaya-work py-10 md:py-12"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-4">
                        <h2 className="font-display text-display font-normal text-ink tracking-tight leading-tight">
                          {work.title}
                        </h2>
                        <span className="font-display text-xl text-ink-faint font-normal">
                          {work.devanagari}
                        </span>
                      </div>

                      <p className="text-small text-ink-muted mb-4 tracking-wide">
                        {work.subtitle}
                      </p>

                      <p className="text-body text-ink-soft max-w-reading leading-relaxed">
                        {work.description}
                      </p>

                      <p className="mt-5 text-micro tracking-widest uppercase text-ink-faint">
                        Status: {work.status}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </ol>
            </div>

          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Institutional note ── */}
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
                  <p className="mt-4 text-micro tracking-widest uppercase text-ink-faint">
                    {images.vaseInterior.credit}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 md:mt-12 max-w-reading note-body">
                  <p>
                    Tattvashila does not publish to maintain presence. Each
                    manuscript in the Granthālaya will take whatever time it
                    requires. There is no schedule. There is only the text.
                  </p>
                  <p>
                    When a manuscript is ready, it will appear here. Not
                    before.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    href="/archive"
                    className="inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
                  >
                    <span aria-hidden className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                    <span>Publication archive</span>
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
