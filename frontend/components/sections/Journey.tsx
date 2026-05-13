"use client";

import Reveal from "../Reveal";
import QuietImage from "../QuietImage";

const JOURNEY_IMG =
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1400&q=80";

const PHASES = [
  {
    label: "First",
    title: "Recognition",
    body: "Seeing your life clearly &mdash; without flinching, without flattering, without rushing to fix.",
  },
  {
    label: "Second",
    title: "Integration",
    body: "Bringing awareness into ordinary hours: work, relationship, body, attention. Slowly, the seam closes.",
  },
  {
    label: "Third",
    title: "Continuity",
    body: "Living from this ground without needing to declare it. The work becomes a way, not a project.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      data-testid="section-journey"
      className="relative py-14 md:py-20 border-t border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-start">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                IV &nbsp;·&nbsp; The journey
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 items-start">
              <div className="col-span-12 lg:col-span-7">
                <Reveal delay={0.05}>
                  <h2 className="font-display text-display font-normal text-ink leading-[1.15]">
                    There is a path here, but it isn&rsquo;t a ladder.
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="mt-5 text-body text-ink-soft max-w-reading">
                    The work moves in returns, pauses and seasons rather than
                    levels. Three movements describe it loosely &mdash; not as
                    stages to complete, but as ways of being you&rsquo;ll
                    return to many times.
                  </p>
                </Reveal>

                <ol
                  className="mt-10 md:mt-14 space-y-8 md:space-y-10"
                  data-testid="journey-phases"
                >
                  {PHASES.map((p, i) => (
                    <Reveal key={p.title} delay={0.05 + i * 0.04} as="li">
                      <article
                        className="grid grid-cols-[auto,1fr] gap-x-6 md:gap-x-8 border-t border-ink/15 pt-5"
                        data-testid={`phase-${p.title.toLowerCase()}`}
                      >
                        <span className="text-micro tracking-widest uppercase text-river-soft num-osf pt-1 min-w-[4.5rem]">
                          {p.label}
                        </span>
                        <div>
                          <h3 className="font-display text-2xl md:text-[1.6rem] font-normal text-ink">
                            {p.title}
                          </h3>
                          <p
                            className="mt-2 text-body text-ink-soft"
                            dangerouslySetInnerHTML={{ __html: p.body }}
                          />
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </ol>

                <Reveal delay={0.3}>
                  <p className="mt-10 text-small text-ink-muted max-w-reading">
                    Read about the work as it is being done in the{" "}
                    <a href="/notes" data-testid="homepage-notes-link" className="text-ink hover:text-river quiet-link transition-colors">
                      Quiet Notes
                    </a>
                    .
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.2} className="col-span-12 lg:col-span-5 lg:pt-2">
                <QuietImage
                  src={JOURNEY_IMG}
                  alt="An open notebook beside a quiet cup of coffee — a small daily ritual"
                  testId="journey-image"
                  aspectClass="aspect-[4/5]"
                  fallbackTone="warm"
                />
                <p className="mt-3 text-micro tracking-widest uppercase text-ink-faint">
                  Returning, again and again, to the same simple things.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
