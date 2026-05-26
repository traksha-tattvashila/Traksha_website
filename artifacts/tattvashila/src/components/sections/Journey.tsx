import Reveal from "../Reveal";
import { SiteContainer, SectionShell, SectionGrid } from "../../layouts";
import { JOURNEY_STEPS } from "../../content/journey";

export default function Journey() {
  return (
    <SectionShell id="journey" testId="section-journey" bg="bg-bone-light">
      <SiteContainer>
        <SectionGrid>
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                IV &nbsp;·&nbsp; The journey
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-normal text-ink leading-[1.15] max-w-prose-wide">
                Not a sequence. A set of orientations, carried at once.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-body text-ink-soft max-w-reading">
                These are not steps to complete. They are qualities to develop — slowly,
                inside the same ordinary circumstances you are already in.
              </p>
            </Reveal>

            <ol
              className="mt-12 md:mt-14 space-y-8 md:space-y-10"
              data-testid="journey-steps"
            >
              {JOURNEY_STEPS.map((s, i) => (
                <Reveal key={s.numeral} delay={0.05 + i * 0.04} as="li">
                  <div className="grid grid-cols-12 gap-x-6 items-start">
                    <div className="col-span-2 md:col-span-1">
                      <span className="text-micro tracking-widest uppercase text-river-soft num-tab">
                        {s.numeral}
                      </span>
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-display text-xl md:text-2xl font-normal text-ink leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-body text-ink-soft max-w-reading">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </SectionGrid>
      </SiteContainer>
    </SectionShell>
  );
}
