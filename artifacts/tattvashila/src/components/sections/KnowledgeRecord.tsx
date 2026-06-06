import { Link } from "wouter";
import Reveal from "../Reveal";
import { SiteContainer, SectionShell, SectionGrid } from "../../layouts";

interface RecordWing {
  name: string;
  deva?: string;
  href: string;
  essence: string;
}

const WINGS: RecordWing[] = [
  {
    name: "Granthālaya",
    deva: "ग्रन्थालय",
    href: "/granthalaya",
    essence:
      "The institutional manuscript library — long-composed texts, held patiently and released when ready.",
  },
  {
    name: "Notes",
    href: "/notes",
    essence:
      "Short-form reflections, written rarely — only when there is something honest worth saying.",
  },
  {
    name: "Archive",
    href: "/archive",
    essence:
      "The institutional record — a complete account of what has been published, held slowly by design.",
  },
];

export default function KnowledgeRecord() {
  return (
    <SectionShell id="knowledge-record" testId="section-knowledge-record">
      <SiteContainer>
        <SectionGrid>
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                III &nbsp;·&nbsp; Knowledge &amp; Record
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-normal text-ink leading-[1.15] max-w-prose-wide">
                What the institution has thought, written, and preserved.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-body text-ink-soft max-w-reading">
                The institution&rsquo;s memory and record. The Granthālaya is one
                wing of this layer &mdash; a manuscript library, not the identity
                of Tattvashila itself.
              </p>
            </Reveal>

            <ul
              className="mt-12 md:mt-16 divide-y divide-ink/10 border-y border-ink/10"
              data-testid="knowledge-record-wings"
            >
              {WINGS.map((w, i) => (
                <Reveal key={w.name} delay={0.04 + i * 0.03} as="li">
                  <Link
                    href={w.href}
                    data-testid={`record-${w.name.toLowerCase()}`}
                    className="grid grid-cols-12 gap-x-6 py-7 md:py-9 group"
                  >
                    <div className="col-span-12 md:col-span-4 mb-3 md:mb-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <h3 className="font-display text-2xl md:text-3xl font-normal text-ink group-hover:text-river-soft transition-colors duration-500 ease-gentle">
                          {w.name}
                        </h3>
                        {w.deva && (
                          <span className="font-deva text-base text-ink-faint">
                            {w.deva}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="col-span-12 md:col-span-8 text-body text-ink-soft self-center">
                      {w.essence}
                    </p>
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
