import { Link } from "wouter";
import Reveal from "../Reveal";
import QuietImage from "../QuietImage";
import { SiteContainer, SectionShell, SectionGrid } from "../../layouts";
import { images } from "../../system/images/registry";

const { heroPremise } = images;

export default function Premise() {
  return (
    <SectionShell id="premise" testId="section-premise">
      <SiteContainer>
        <SectionGrid>
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                I &nbsp;·&nbsp; Why it exists
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 items-start">
              <div className="col-span-12 lg:col-span-7">
                <Reveal delay={0.05}>
                  <h2 className="font-display text-display font-normal text-ink leading-[1.15]">
                    Why an institution, and why now.
                  </h2>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="mt-8 md:mt-10 space-y-5 text-body text-ink-soft max-w-reading">
                    <p>
                      Tattvashila begins from a simple observation. Modern life
                      offers more information, demand and visible choice than any
                      inherited inner toolkit was built to meet &mdash; and
                      steadiness has become scarce.
                    </p>
                    <p>
                      What endures is quieter. The ability to meet a difficult
                      morning. To hold responsibility without resentment. To
                      keep showing up for work, for the people you love, for
                      yourself &mdash; with steadiness rather than performance.
                    </p>
                    <p className="text-ink">
                      Tattvashila was founded to hold that ordinary, durable
                      steadiness as an institution &mdash; to think carefully
                      over time, and to build the structures that let such
                      thinking last.
                    </p>
                    <p>
                      The full founding narrative lives in the{" "}
                      <Link
                        href="/about"
                        data-testid="homepage-origin-link"
                        className="text-ink hover:text-river quiet-link transition-colors"
                      >
                        Origin
                      </Link>
                      .
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.25} className="col-span-12 lg:col-span-5 lg:pt-4">
                <QuietImage
                  src={heroPremise.src}
                  alt={heroPremise.alt}
                  testId="premise-image"
                  aspectClass="aspect-[4/5]"
                  fallbackTone={heroPremise.fallbackTone}
                />
                <p className="mt-3 text-micro tracking-widest uppercase text-ink-faint">
                  {heroPremise.credit}
                </p>
              </Reveal>
            </div>
          </div>
        </SectionGrid>
      </SiteContainer>
    </SectionShell>
  );
}
