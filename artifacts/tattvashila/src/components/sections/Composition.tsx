import { Link } from "wouter";
import Reveal from "../Reveal";
import { SiteContainer, SectionShell, SectionGrid } from "../../layouts";

export default function Composition() {
  return (
    <SectionShell id="composition" testId="section-composition" bg="bg-bone-light">
      <SiteContainer>
        <SectionGrid>
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                V &nbsp;·&nbsp; In composition
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-normal text-ink leading-[1.15] max-w-prose-wide">
                What is being built.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-5 space-y-5 text-body text-ink-soft max-w-reading">
                <p>
                  The institution grows slowly, and only as its work reaches
                  readiness. Manuscripts are being composed for the{" "}
                  <Link
                    href="/granthalaya"
                    className="text-ink hover:text-river quiet-link transition-colors duration-700 ease-gentle"
                  >
                    Granthālaya
                  </Link>
                  ; reflections appear in the{" "}
                  <Link
                    href="/notes"
                    className="text-ink hover:text-river quiet-link transition-colors duration-700 ease-gentle"
                  >
                    Notes
                  </Link>
                  ; and the practical functions of the institution are being built
                  through Traksha, its implementation layer.
                </p>
                <p>
                  Each part opens in its own time &mdash; held until it is ready,
                  not before.
                </p>
              </div>
            </Reveal>
          </div>
        </SectionGrid>
      </SiteContainer>
    </SectionShell>
  );
}
