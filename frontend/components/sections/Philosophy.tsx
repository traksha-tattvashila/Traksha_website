"use client";

import Reveal from "../Reveal";

const TENETS = [
  {
    n: "01",
    title: "Awareness",
    body: "Not as performance, nor as escape. As a steady way of meeting what is already in front of you.",
  },
  {
    n: "02",
    title: "Responsibility",
    body: "Before status, before identity, before achievement &mdash; the willingness to answer for your own life.",
  },
  {
    n: "03",
    title: "Discipline",
    body: "The quiet structure beneath good days and difficult ones &mdash; chosen over time, not imposed in a moment.",
  },
  {
    n: "04",
    title: "Conscious participation",
    body: "Growth that integrates with your work, your relationships and your community &mdash; rather than retreating from them.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      data-testid="section-philosophy"
      className="relative py-20 md:py-28 border-t border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-start">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                II &nbsp;·&nbsp; Philosophy
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-normal text-ink leading-[1.15] max-w-prose-wide">
                Four ideas, held together with care.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-body text-ink-soft max-w-reading">
                None of these are new. They are placed here together because
                modern life tends to keep them apart &mdash; awareness in one
                room, responsibility in another, discipline somewhere else
                entirely.
              </p>
            </Reveal>

            <ol
              className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12"
              data-testid="philosophy-tenets"
            >
              {TENETS.map((t, i) => (
                <Reveal key={t.title} delay={0.05 + i * 0.04} as="li">
                  <article
                    className="border-t border-ink/15 pt-6"
                    data-testid={`tenet-${t.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-micro tracking-widest text-river-soft num-tab">
                        {t.n}
                      </span>
                      <h3 className="font-display text-2xl md:text-[1.6rem] font-normal text-ink">
                        {t.title}
                      </h3>
                    </div>
                    <p
                      className="mt-3 text-body text-ink-soft"
                      dangerouslySetInnerHTML={{ __html: t.body }}
                    />
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
