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
                TRAKSHA
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-normal text-ink leading-[1.15] max-w-prose-wide">
                The working systems behind Tattvashila.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-body text-ink-soft max-w-reading">
                Traksha is Tattvashila&rsquo;s operating layer — the systems
                that hold identity, structure, and participation together. It
                is built slowly, and only what is real is shown here.
              </p>
            </Reveal>

            <ul
              className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10"
              data-testid="traksha-preview"
            >
              {TRAKSHA_FUNCTIONS.map((fn, i) => (
                <Reveal key={fn.name} delay={0.04 + i * 0.04} as="li">
                  <article className="h-full bg-bone p-7 md:p-8">
                    <p className="text-micro tracking-widest uppercase text-ink-faint">
                      {fn.status}
                    </p>
                    <p className="mt-3 text-body font-medium text-ink">
                      {fn.name}
                    </p>
                    <p className="mt-3 text-body text-ink-soft">
                      {fn.essence}
                    </p>
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
