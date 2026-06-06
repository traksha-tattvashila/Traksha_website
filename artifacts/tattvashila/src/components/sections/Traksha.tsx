import Reveal from "../Reveal";
import { SiteContainer, SectionShell, SectionGrid } from "../../layouts";
import { TRAKSHA_FUNCTIONS } from "../../content/traksha";

export default function Traksha() {
  return (
    <SectionShell id="traksha" testId="section-traksha">
      <SiteContainer>
        <SectionGrid>
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                IV &nbsp;·&nbsp; Traksha
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <div className="flex items-baseline gap-3 flex-wrap max-w-prose-wide">
                <h2 className="font-display text-display font-normal text-ink leading-[1.15]">
                  The institution&rsquo;s implementation layer.
                </h2>
                <span className="font-deva text-base text-ink-faint">त्रक्षा</span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-body text-ink-soft max-w-reading">
                Traksha is not a product or a separate venture. It is the
                institution&rsquo;s technology backbone &mdash; the implementation
                layer through which every practical function operates, inside one
                canonical institution. The functions below are delivered through
                Traksha, opening as they are ready.
              </p>
            </Reveal>

            <ul
              className="mt-12 md:mt-16 divide-y divide-ink/10 border-y border-ink/10"
              data-testid="traksha-functions"
            >
              {TRAKSHA_FUNCTIONS.map((f, i) => (
                <Reveal key={f.name} delay={0.04 + i * 0.03} as="li">
                  <article
                    className="grid grid-cols-12 gap-x-6 py-7 md:py-9 group"
                    data-testid={`traksha-${f.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="col-span-12 md:col-span-4 mb-3 md:mb-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <h3 className="font-display text-2xl md:text-3xl font-normal text-ink group-hover:text-river-soft transition-colors duration-500 ease-gentle">
                          {f.name}
                        </h3>
                        {f.deva && (
                          <span className="font-deva text-base text-ink-faint">
                            {f.deva}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="col-span-12 md:col-span-6 text-body text-ink-soft self-center">
                      {f.essence}
                    </p>
                    <div className="col-span-12 md:col-span-2 self-center mt-2 md:mt-0 md:text-right">
                      <span className="text-micro tracking-widest uppercase text-ink-faint">
                        {f.status}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </SectionGrid>
      </SiteContainer>
    </SectionShell>
  );
}
