"use client";

import Reveal from "../Reveal";

const TENETS = [
  {
    n: "i.",
    title: "Awareness",
    body: "Not as performance, nor as escape. As a steady way of meeting what is already here.",
  },
  {
    n: "ii.",
    title: "Responsibility",
    body: "Before status, before identity, before achievement. The willingness to answer for one's own life.",
  },
  {
    n: "iii.",
    title: "Discipline",
    body: "The quiet structure beneath good days and difficult ones &mdash; chosen, not imposed.",
  },
  {
    n: "iv.",
    title: "Conscious participation",
    body: "Growth that integrates with society and relationship, rather than retreating from them.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      data-testid="section-philosophy"
      className="relative py-32 md:py-48 border-t border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                II &nbsp;·&nbsp; Philosophy
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9 max-w-prose-wide">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-light text-ink leading-tight">
                Four ideas held with care.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-body text-ink-muted max-w-reading">
                None of these are new. They are placed here together because
                modern life tends to keep them apart.
              </p>
            </Reveal>

            <ol className="mt-20 md:mt-28 space-y-16 md:space-y-20" data-testid="philosophy-tenets">
              {TENETS.map((t, i) => (
                <Reveal key={t.title} delay={0.05 + i * 0.05} as="li">
                  <div
                    className="grid grid-cols-12 gap-x-6"
                    data-testid={`tenet-${t.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="col-span-2 md:col-span-1 font-display italic text-river text-lead num-osf">
                      {t.n}
                    </span>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-display text-2xl md:text-3xl font-light text-ink">
                        {t.title}
                      </h3>
                      <p
                        className="mt-4 text-body text-ink-soft max-w-reading"
                        dangerouslySetInnerHTML={{ __html: t.body }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
