import Reveal from "../Reveal";

const PRINCIPLES = [
  {
    numeral: "I",
    title: "Awareness, plainly.",
    body: "Not a spiritual state — a working faculty. The ability to notice what is actually happening before reacting to it.",
  },
  {
    numeral: "II",
    title: "Responsibility, before identity.",
    body: "The willingness to stand behind your own life — your decisions, your effects, your unfinished work — without flinching or performance.",
  },
  {
    numeral: "III",
    title: "Discipline, chosen.",
    body: "The small, repeated structure that holds a life together. Not imposed from outside — chosen, and gradually made invisible.",
  },
  {
    numeral: "IV",
    title: "Conscious participation.",
    body: "Practised within the life you already have: at the desk, in the conversation, in the difficult meeting. Not apart from the world.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      data-testid="section-philosophy"
      className="relative py-14 md:py-20 border-t border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-start">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                II &nbsp;·&nbsp; The ideas
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-normal text-ink leading-[1.15] max-w-prose-wide">
                Four ideas, carried into ordinary life.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-body text-ink-soft max-w-reading">
                These are not instructions. They are orientations &mdash; working ideas
                for people who want their inner life to be as functional as the rest of it.
              </p>
            </Reveal>

            <ol
              className="mt-12 md:mt-16 divide-y divide-ink/10 border-y border-ink/15"
              data-testid="philosophy-principles"
            >
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.numeral} delay={0.04 + i * 0.03} as="li">
                  <div className="grid grid-cols-12 gap-x-6 py-7 md:py-9">
                    <div className="col-span-12 md:col-span-2 mb-2 md:mb-0">
                      <span className="text-micro tracking-widest uppercase text-ink-faint num-tab">
                        {p.numeral}
                      </span>
                    </div>
                    <div className="col-span-12 md:col-span-10">
                      <h3 className="font-display text-xl md:text-2xl font-normal text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-body text-ink-soft max-w-reading">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.25}>
              <p className="mt-10 text-small text-ink-muted max-w-reading">
                These ideas are explored more fully in the full{" "}
                <a href="/philosophy" data-testid="homepage-philosophy-link" className="text-ink hover:text-river quiet-link transition-colors">
                  Philosophy
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
