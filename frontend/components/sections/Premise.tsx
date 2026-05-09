"use client";

import Reveal from "../Reveal";

export default function Premise() {
  return (
    <section
      id="premise"
      data-testid="section-premise"
      className="relative py-32 md:py-48"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                I &nbsp;·&nbsp; The premise
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9 max-w-prose-wide">
            <Reveal delay={0.1}>
              <p className="font-display text-display font-light text-ink leading-tight">
                This is not another system that asks you to{" "}
                <span className="italic text-river">become someone else</span>.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 md:mt-16 space-y-7 text-body text-ink-soft">
                <p>
                  Tattvashila is a slow body of work concerned with one ordinary
                  question &mdash; how does a person live with awareness, and still
                  carry the weight of an ordinary life?
                </p>
                <p>
                  It does not promise transformation. It does not ask you to leave
                  what you have built. It does not stand against the modern world,
                  nor does it dress old ideas in new urgency.
                </p>
                <p className="text-ink">
                  It begins where most things end &mdash; with the assumption that
                  you are already capable, already responsible, already enough to
                  do the quiet work that matters.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
