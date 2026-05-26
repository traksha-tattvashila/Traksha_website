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
                I &nbsp;·&nbsp; The premise
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 items-start">
              <div className="col-span-12 lg:col-span-7">
                <Reveal delay={0.05}>
                  <h2 className="font-display text-display font-normal text-ink leading-[1.15]">
                    This is not another system that asks you to become someone else.
                  </h2>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="mt-8 md:mt-10 space-y-5 text-body text-ink-soft max-w-reading">
                    <p>
                      Tattvashila begins from a simple observation. Most modern
                      systems for growth ask you to overhaul your life, declare
                      a new identity, or step outside the world you&rsquo;ve built.
                      Few of them last.
                    </p>
                    <p>
                      What endures is quieter. The ability to meet a difficult
                      morning. To hold responsibility without resentment. To
                      keep showing up for work, for the people you love, for
                      yourself &mdash; with steadiness rather than performance.
                    </p>
                    <p className="text-ink">
                      Tattvashila is a body of work concerned with that
                      ordinary, durable steadiness &mdash; how it&rsquo;s built,
                      how it&rsquo;s kept, and why it matters more now than it
                      did a generation ago.
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
