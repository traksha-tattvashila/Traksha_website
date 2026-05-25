import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Closing from "@/components/sections/Closing";

export const metadata: Metadata = {
  title: "Origin — Tattvashila",
  description:
    "How Tattvashila came to be — quietly, from observation rather than ambition.",
};

export default function AboutPage() {
  return (
    <main data-testid="about-page" className="relative min-h-screen bg-bone text-ink">
      <Nav />

      {/* Title */}
      <section
        data-testid="about-hero"
        className="relative pt-28 md:pt-36 pb-12 md:pb-16"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-12">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Origin
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <h1
                  data-testid="about-headline"
                  className="font-display font-normal text-ink leading-[1.12] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4.4vw, 3.25rem)" }}
                >
                  This did not begin as an idea. It began as a series of quiet observations.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 md:mt-8 text-lead text-ink-soft max-w-reading">
                  Tattvashila is not a movement, a startup, or a personal vision. It is a
                  long body of work, put together carefully, in response to something many of us
                  recognise privately but rarely name in public.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What was observed */}
      <section
        data-testid="about-observation"
        className="relative py-20 md:py-28 border-t border-ink/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-start">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  I &nbsp;·&nbsp; What was observed
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <h2 className="font-display text-display font-normal text-ink leading-[1.18]">
                  A pattern that keeps appearing.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 md:mt-10 space-y-5 text-body text-ink-soft">
                  <p>
                    Across professions, ages and circumstances, a similar quietness keeps showing
                    up &mdash; in capable, responsible adults who are managing work, family,
                    health and relationships well enough on the outside.
                  </p>
                  <p>
                    They are not unhappy. They are not unsuccessful. They are simply running on
                    a kind of momentum that no one taught them how to interrupt &mdash; and slowly
                    losing the ability to feel their own life from the inside.
                  </p>
                  <p className="text-ink">
                    That is the condition Tattvashila was put together to address. Not through
                    motivation or escape, but through something older and steadier &mdash;
                    awareness, responsibility and the daily disciplines that hold a life together.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why this approach */}
      <section
        data-testid="about-why"
        className="relative py-20 md:py-28 border-t border-ink/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-start">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  II &nbsp;·&nbsp; Why this, why now
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <h2 className="font-display text-display font-normal text-ink leading-[1.18]">
                  Modern life is not broken. The inner architecture most of us were given for it is.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 md:mt-10 space-y-5 text-body text-ink-soft">
                  <p>
                    The demands placed on a single life today &mdash; economic, emotional,
                    informational, relational &mdash; have quietly outpaced the tools most of us
                    inherited from family, schooling or culture.
                  </p>
                  <p>
                    Tattvashila is one careful response to that gap. We are not asking anyone to
                    leave the life they&rsquo;ve built. We are asking, gently, whether the life that
                    has been built can be lived from a steadier place inside the person living it.
                  </p>
                  <p>
                    Bharatiya thought has spent a long time on this question. So have many other
                    traditions. We borrow from these where they help, plainly &mdash; without
                    ceremony, costume or claim.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Who is building this */}
      <section
        data-testid="about-makers"
        className="relative py-20 md:py-28 border-t border-ink/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-start">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  III &nbsp;·&nbsp; Who is building this
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <h2 className="font-display text-display font-normal text-ink leading-[1.18]">
                  A small group of people, working slowly.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 md:mt-10 space-y-5 text-body text-ink-soft">
                  <p>
                    Tattvashila is being held primarily by{" "}
                    <span className="text-ink">Vikramaditya Mitra</span>,
                    working with a small group of contributors across different
                    fields &mdash; quietly, without a marketing rhythm, and
                    without an interest in scale for its own sake.
                  </p>
                  <p>
                    There is no founder figure to follow, no lineage to inherit,
                    no movement being recruited for. We have deliberately kept
                    the project free of personality, the language plain, and the
                    work itself the only thing a reader is asked to meet.
                  </p>
                  <p className="text-ink">
                    The name appears here as a matter of accountability, not
                    authority. Other contributors and any further detail will be
                    introduced only when the work itself makes that useful
                    &mdash; not before, and not for marketing.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability / how to reach */}
      <section
        data-testid="about-accountability"
        className="relative py-20 md:py-28 border-t border-ink/10 bg-bone-light"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-start">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  IV &nbsp;·&nbsp; A note on accountability
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <h2 className="font-display text-display font-normal text-ink leading-[1.18]">
                  We would rather be questioned than admired.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 md:mt-10 space-y-5 text-body text-ink-soft">
                  <p>
                    A body of work like this can drift, over time, into the very things it was
                    built to avoid &mdash; performance, certainty, soft authority. We have written
                    the philosophy specifically to make that drift visible to ourselves and to
                    anyone watching.
                  </p>
                  <p>
                    If something here begins to feel like marketing, mysticism or moral pressure,
                    it is a failure on our side &mdash; not a deepening. We&rsquo;d like to hear
                    about it.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-12 md:mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href="/#intake"
                    data-testid="about-cta-intake"
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-ink text-bone-light text-small font-medium rounded-[2px] hover:bg-ink-soft transition-colors duration-500 ease-gentle"
                  >
                    <span>Write to us, quietly</span>
                    <span aria-hidden className="block w-6 h-px bg-current transition-[width] duration-500 ease-gentle group-hover:w-10" />
                  </a>
                  <a
                    href="/#philosophy"
                    data-testid="about-cta-philosophy"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                  >
                    Read the philosophy
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Closing />
    </main>
  );
}
