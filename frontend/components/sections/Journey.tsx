"use client";

import Reveal from "../Reveal";

const PHASES = [
  {
    label: "First",
    title: "Recognition",
    body: "Seeing one's life clearly &mdash; without flinching, without flattering, without fixing too quickly.",
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
      className="relative py-32 md:py-48 border-t border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                IV &nbsp;·&nbsp; Journey
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9 max-w-prose-wide">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-light text-ink leading-tight">
                Not steps.
                <br />
                <span className="italic text-river">Movements.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-body text-ink-muted max-w-reading">
                There is a path here, but it is not a ladder. It moves in returns,
                pauses and seasons. Three movements describe it loosely.
              </p>
            </Reveal>

            <div
              className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10"
              data-testid="journey-phases"
            >
              {PHASES.map((p, i) => (
                <Reveal key={p.title} delay={0.05 + i * 0.08}>
                  <article
                    className="relative pl-6 md:pl-0 md:pt-8 border-l md:border-l-0 md:border-t border-ink/15"
                    data-testid={`phase-${p.title.toLowerCase()}`}
                  >
                    <p className="text-micro tracking-widest uppercase text-river-soft num-osf">
                      {p.label}
                    </p>
                    <h3 className="mt-4 md:mt-5 font-display text-3xl font-light text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-5 text-body text-ink-soft" dangerouslySetInnerHTML={{ __html: p.body }} />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
