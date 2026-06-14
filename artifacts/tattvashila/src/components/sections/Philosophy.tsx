import { Link } from "wouter";
import Reveal from "../Reveal";
import { SiteContainer, SectionShell, SectionGrid } from "../../layouts";

interface FoundationPath {
  label: string;
  href: string;
  eyebrow: string;
  description: string;
}

const FOUNDATION_PATHS: FoundationPath[] = [
  {
    label: "Philosophy",
    href: "/philosophy",
    eyebrow: "What it believes",
    description:
      "The institution's doctrine — its working ideas, settled positions, and the orientations carried into ordinary life.",
  },
  {
    label: "Origin",
    href: "/about",
    eyebrow: "Why it began",
    description:
      "The institution's provenance — the founding narrative and the conditions Tattvashila was built in response to.",
  },
];

export default function Philosophy() {
  return (
    <SectionShell id="philosophy" testId="section-philosophy">
      <SiteContainer>
        <SectionGrid>
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                II &nbsp;·&nbsp; Foundation
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-normal text-ink leading-[1.15] max-w-prose-wide">
                The ground beneath the institution.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-body text-ink-soft max-w-reading">
                Foundation holds what Tattvashila believes and why it began.
                Philosophy and Origin are equal entrances into that ground: one
                names the doctrine, the other preserves the provenance.
              </p>
            </Reveal>

            <ul
              className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10"
              data-testid="foundation-paths"
            >
              {FOUNDATION_PATHS.map((path, i) => (
                <Reveal key={path.label} delay={0.04 + i * 0.04} as="li">
                  <Link
                    href={path.href}
                    data-testid={`foundation-${path.label.toLowerCase()}-link`}
                    className="group block h-full bg-bone p-7 md:p-8 transition-colors duration-500 ease-gentle hover:bg-bone-light"
                  >
                    <p className="text-micro tracking-widest uppercase text-ink-faint">
                      {path.eyebrow}
                    </p>
                    <h3 className="mt-5 font-display text-2xl md:text-3xl font-normal text-ink group-hover:text-river-soft transition-colors duration-500 ease-gentle">
                      {path.label}
                    </h3>
                    <p className="mt-4 text-body text-ink-soft max-w-reading">
                      {path.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-3 text-small font-medium text-ink">
                      <span>Enter {path.label}</span>
                      <span aria-hidden className="block w-7 h-px bg-current transition-[width] duration-500 ease-gentle group-hover:w-11" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </SectionGrid>
      </SiteContainer>
    </SectionShell>
  );
}
