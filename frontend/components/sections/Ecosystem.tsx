"use client";

import Reveal from "../Reveal";

const CHAMBERS = [
  {
    name: "Tattvapeetha",
    deva: "तत्त्वपीठा",
    essence:
      "A progressive ground for human development &mdash; the inner work that precedes everything else.",
    status: "Becoming available",
  },
  {
    name: "Traksha",
    deva: "त्रक्षा",
    essence:
      "A quiet daily practice &mdash; small instruments for awareness, integrated into the rhythms of ordinary life.",
    status: "In preparation",
  },
  {
    name: "Vanatattva",
    deva: "वनतत्त्वा",
    essence:
      "A considered space for men&rsquo;s wellness &mdash; physical, emotional, relational. Without bravado.",
    status: "On the horizon",
  },
  {
    name: "Shreetattva",
    deva: "श्रीतत्त्वा",
    essence:
      "A considered space for women&rsquo;s wellness &mdash; embodied, honest, unadorned by trend.",
    status: "On the horizon",
  },
  {
    name: "Raksha",
    deva: "रक्षा",
    essence:
      "Care for what is fragile &mdash; safety, dignity and quiet protection across the years of a life.",
    status: "On the horizon",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      data-testid="section-ecosystem"
      className="relative py-20 md:py-28 border-t border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-start">
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
              className="mt-12 md:mt-16 divide-y divide-ink/10 border-y border-ink/15"
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
                        <h3 className="font-display text-2xl md:text-3xl font-normal text-ink group-hover:text-river transition-colors duration-500 ease-gentle">
                          {c.name}
                        </h3>
                        <span className="font-deva text-base text-ink-faint">
                          {c.deva}
                        </span>
                      </div>
                    </div>
                    <p
                      className="col-span-12 md:col-span-6 text-body text-ink-soft self-center"
                      dangerouslySetInnerHTML={{ __html: c.essence }}
                    />
                    <div className="col-span-12 md:col-span-2 self-center mt-2 md:mt-0 md:text-right">
                      <span className="text-micro tracking-widest uppercase text-ink-faint">
                        {c.status}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <p className="mt-10 text-small text-ink-faint max-w-reading">
                Other dimensions are being thought through. The whole will reveal itself slowly.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
