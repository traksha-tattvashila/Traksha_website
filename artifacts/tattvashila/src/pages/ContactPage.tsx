import Reveal from "../components/Reveal";
import { PageLayout, SiteContainer, SectionShell, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";
import {
  CONTACT_EYEBROW,
  CONTACT_HEADING,
  CONTACT_BODY,
  CONTACT_EMAIL_LABEL,
  CONTACT_EMAIL_ADDRESS,
  CONTACT_CLOSING,
} from "../content/contact";

export default function ContactPage() {
  usePageMeta(PAGE_META.contact);

  return (
    <PageLayout testId="contact-page">

      {/* ── Contact header ── */}
      <header data-testid="contact-hero" className="relative pt-28 md:pt-36 pb-0">
        <SiteContainer>
          <SectionGrid gapY="gap-y-8" align="start">

            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  {CONTACT_EYEBROW}
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 pb-12 md:pb-16">
              <Reveal delay={0.05}>
                <h1
                  data-testid="contact-headline"
                  className="font-display text-hero font-normal text-ink leading-[1.1] tracking-tight max-w-prose-wide"
                >
                  {CONTACT_HEADING}
                </h1>
              </Reveal>
            </div>

          </SectionGrid>
        </SiteContainer>
      </header>

      {/* ── Body ── */}
      <SectionShell testId="contact-body" size="md" border>
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9 max-w-reading">
              <Reveal delay={0.05}>
                <p className="text-body leading-[1.85] text-ink-soft mb-[1.7em]">
                  {CONTACT_BODY}
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="text-micro tracking-widest uppercase text-ink-muted mb-3">
                  {CONTACT_EMAIL_LABEL}
                </p>
                <p className="text-body leading-[1.85] text-ink-soft">
                  <a
                    href={`mailto:${CONTACT_EMAIL_ADDRESS}`}
                    className="underline underline-offset-4 decoration-ink-muted hover:text-ink hover:decoration-ink transition-colors duration-700 ease-gentle"
                  >
                    {CONTACT_EMAIL_ADDRESS}
                  </a>
                </p>
              </Reveal>
            </div>
          </SectionGrid>
        </SiteContainer>
      </SectionShell>

      {/* ── Stay in correspondence CTA ── */}
      <SectionShell testId="contact-cta" size="md" border>
        <SiteContainer>
          <SectionGrid>
            <div className="col-span-12 md:col-span-3" />

            <div className="col-span-12 md:col-span-9 max-w-reading">
              <Reveal>
                <p className="text-body leading-[1.85] text-ink-soft">
                  {CONTACT_CLOSING.split("stay in correspondence").map((part, i) =>
                    i === 0 ? (
                      <span key={i}>{part}</span>
                    ) : (
                      <span key={i}>
                        <a
                          href="/#intake"
                          className="underline underline-offset-4 decoration-ink-muted hover:text-ink hover:decoration-ink transition-colors duration-700 ease-gentle"
                        >
                          stay in correspondence
                        </a>
                        {part}
                      </span>
                    )
                  )}
                </p>
              </Reveal>
            </div>
          </SectionGrid>
        </SiteContainer>
      </SectionShell>

    </PageLayout>
  );
}
