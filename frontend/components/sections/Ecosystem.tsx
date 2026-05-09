"use client";

import Reveal from "../Reveal";

const CHAMBERS = [
  {
    name: "Tattvapeetha",
    deva: "तत्त्वपीठ",
    essence: "A progressive ground for human development &mdash; the inner work that precedes everything else.",
    status: "Becoming available",
  },
  {
    name: "Traksha",
    deva: "त्राक्ष",
    essence: "The core platform &mdash; quiet tools for daily awareness, integrated into the rhythms of ordinary life.",
    status: "In preparation",
  },
  {
    name: "Vanatattva",
    deva: "वनतत्त्व",
    essence: "A considered space for men's wellness &mdash; physical, emotional, relational. Without bravado.",
    status: "On the horizon",
  },
  {
    name: "Shreetattva",
    deva: "श्रीतत्त्व",
    essence: "A considered space for women's wellness &mdash; embodied, honest, unadorned by trend.",
    status: "On the horizon",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      data-testid="section-ecosystem"
      className="relative py-32 md:py-48 border-t border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                III &nbsp;·&nbsp; Ecosystem
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-light text-ink leading-tight max-w-prose-wide">
                One foundation. <span className="italic text-river">Four chambers.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-body text-ink-muted max-w-reading">
                Tattvashila is the parent &mdash; a philosophy and a place.
                What follows are distinct rooms within it. Each will open in its own time.
              </p>
            </Reveal>

            <ul
              className="mt-20 md:mt-28 divide-y divide-ink/10 border-y border-ink/10"
              data-testid="ecosystem-chambers"
            >
              {CHAMBERS.map((c, i) => (
                <Reveal key={c.name} delay={0.05 + i * 0.04} as="li">
                  <article
                    className="grid grid-cols-12 gap-x-6 py-10 md:py-14 group"
                    data-testid={`chamber-${c.name.toLowerCase()}`}
                  >
                    <div className="col-span-12 md:col-span-4 mb-6 md:mb-0">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-display text-3xl md:text-4xl font-light text-ink group-hover:text-river transition-colors duration-700 ease-gentle">
                          {c.name}
                        </h3>
                        <span className="font-deva text-base md:text-lg text-ink-faint">
                          {c.deva}
                        </span>
                      </div>
                    </div>
                    <p
                      className="col-span-12 md:col-span-6 text-body text-ink-soft self-center"
                      dangerouslySetInnerHTML={{ __html: c.essence }}
                    />
                    <div className="col-span-12 md:col-span-2 self-center mt-4 md:mt-0 md:text-right">
                      <span className="text-micro tracking-widest uppercase text-ink-faint">
                        {c.status}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
