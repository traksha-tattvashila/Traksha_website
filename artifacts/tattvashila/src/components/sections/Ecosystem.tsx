import { Link } from "wouter";
import Reveal from "../Reveal";
import { SiteContainer, SectionShell, SectionGrid } from "../../layouts";
import { CHAMBERS } from "../../content/chambers";

export default function Ecosystem() {
  return (
    <SectionShell id="ecosystem" testId="section-ecosystem">
      <SiteContainer>
        <SectionGrid>
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                III &nbsp;·&nbsp; The work
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-normal text-ink leading-[1.15] max-w-prose-wide">
                One foundation. Several dimensions, each opening in its own time.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-body text-ink-soft max-w-reading">
                Tattvashila is a long body of work, exploring distinct
                dimensions of an ordinary life. A few of those dimensions are
                named below. Others will arrive as they are ready &mdash; not
                before.
              </p>
            </Reveal>

            <ul
              className="mt-12 md:mt-16 divide-y divide-ink/10 border-y border-ink/10"
              data-testid="ecosystem-chambers"
            >
              {CHAMBERS.map((c, i) => (
                <Reveal key={c.name} delay={0.04 + i * 0.03} as="li">
                  <article
                    className="grid grid-cols-12 gap-x-6 py-7 md:py-9 group"
                    data-testid={`chamber-${c.name.toLowerCase()}`}
                  >
                    <div className="col-span-12 md:col-span-4 mb-3 md:mb-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <h3 className="font-display text-2xl md:text-3xl font-normal text-ink group-hover:text-river-soft transition-colors duration-500 ease-gentle">
                          {c.name}
                        </h3>
                        <span className="font-deva text-base text-ink-faint">
                          {c.deva}
                        </span>
                      </div>
                    </div>
                    <p className="col-span-12 md:col-span-6 text-body text-ink-soft self-center">
                      {c.essence}
                    </p>
                    <div className="col-span-12 md:col-span-2 self-center mt-2 md:mt-0 md:text-right">
                      <span className="text-micro tracking-widest uppercase text-ink-faint">
                        {c.status}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>

            {/* A genuine invitation toward the manuscript library */}
            <Reveal delay={0.16}>
              <div className="mt-12 md:mt-14 pt-8 border-t border-ink/10 max-w-reading">
                <p className="text-body text-ink-soft">
                  The institution&rsquo;s manuscripts are gathered in the{" "}
                  <Link
                    href="/granthalaya"
                    className="text-ink-muted hover:text-ink quiet-link transition-colors"
                  >
                    Granthālaya
                  </Link>
                  {" "}&mdash; its library of long-composed texts, held until they are ready.
                </p>
                <Link
                  href="/granthalaya"
                  data-testid="home-enter-granthalaya"
                  className="group mt-5 inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle"
                >
                  <span
                    aria-hidden
                    className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                  />
                  <span>Enter the Granthālaya</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-10 text-small text-ink-faint max-w-reading">
                Currently &mdash;{" "}
                <Link href="/notes" className="text-ink-muted hover:text-ink quiet-link transition-colors">
                  Quiet Notes
                </Link>
                {" "}and the early Traksha system are being built. The other dimensions will unfold carefully, in their own time.
              </p>
            </Reveal>
          </div>
        </SectionGrid>
      </SiteContainer>
    </SectionShell>
  );
}
