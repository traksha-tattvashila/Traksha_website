import Reveal from "../Reveal";
import { SiteContainer, SectionShell, SectionGrid } from "../../layouts";

const TRAKSHA_PREVIEW = [
  {
    label: "What it is",
    text: "The institutional technology backbone of Tattvashila — not a product, not a separate venture, and not the identity of the institution itself.",
  },
  {
    label: "Why it exists",
    text: "To let practical institutional functions operate with continuity, care, and structure inside one canonical institution.",
  },
  {
    label: "Its role",
    text: "Future systems are expressed through Traksha when ready, while their deeper explanations belong to future Traksha pages.",
  },
];

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
                  The institution&rsquo;s technology backbone.
                </h2>
                <span className="font-deva text-base text-ink-faint">त्रक्षा</span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-body text-ink-soft max-w-reading">
                Traksha is the modern institutional technology layer through
                which Tattvashila&rsquo;s practical functions are expressed and
                implemented. The homepage holds only this preview; subsystem
                depth belongs elsewhere, when ready.
              </p>
            </Reveal>

            <ul
              className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10"
              data-testid="traksha-preview"
            >
              {TRAKSHA_PREVIEW.map((item, i) => (
                <Reveal key={item.label} delay={0.04 + i * 0.04} as="li">
                  <article className="h-full bg-bone p-7 md:p-8">
                    <p className="text-micro tracking-widest uppercase text-ink-faint">
                      {item.label}
                    </p>
                    <p className="mt-5 text-body text-ink-soft">
                      {item.text}
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
