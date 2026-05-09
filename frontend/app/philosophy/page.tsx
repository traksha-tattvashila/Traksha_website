import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Closing from "@/components/sections/Closing";

export const metadata: Metadata = {
  title: "Philosophy — Tattvashila",
  description:
    "The working ideas behind Tattvashila — awareness, responsibility, discipline and conscious participation, plainly explained.",
};

interface IdeaSection {
  numeral: string;
  label: string;
  title: string;
  paragraphs: string[];
}

const SECTIONS: IdeaSection[] = [
  {
    numeral: "I",
    label: "The condition",
    title: "Modern life is full. Inner life often isn't.",
    paragraphs: [
      "The average modern day is densely scheduled, well-informed and emotionally demanding. Most of us know more, do more and feel more in a single year than our grandparents did across a decade.",
      "What hasn't grown at the same pace is our inner steadiness — the ordinary capacity to be with our own life without constant reaction, performance or escape.",
      "This isn't a moral failing or a generational weakness. It is an imbalance, and a recent one. The tools most of us inherited weren't built for the speed, density and exposure of contemporary life.",
    ],
  },
  {
    numeral: "II",
    label: "Awareness",
    title: "Awareness, plainly.",
    paragraphs: [
      "We don't use the word in a religious or therapeutic sense. By awareness we mean a working ability — to notice what's actually happening, before reacting to it.",
      "What you're feeling. What's being asked of you. What you're avoiding. What you're carrying that isn't yours. What's worth keeping. What's worth setting down.",
      "It is the basic condition for living one's own life rather than someone else's idea of it. Without it, even good circumstances can begin to feel borrowed.",
    ],
  },
  {
    numeral: "III",
    label: "Responsibility",
    title: "Responsibility, before identity.",
    paragraphs: [
      "Most modern frameworks for self-improvement begin with identity — who you are, what you stand for, what kind of person to become. We start one step earlier.",
      "Responsibility, in the sense we mean it, is the willingness to stand behind your own life — your decisions, your effects on others, your unfinished work — without flinching and without performance.",
      "It is not a burden. Done honestly, it is the thing that makes a life feel lighter, not heavier — because nothing important is being avoided in the background.",
    ],
  },
  {
    numeral: "IV",
    label: "Discipline",
    title: "Discipline, chosen rather than imposed.",
    paragraphs: [
      "Modern life often confuses discipline with strain — pushing harder, achieving more, optimising further. We mean something quieter.",
      "Discipline here is the small, repeated structure that holds a life together: when you sleep, what you read, who you spend time with, how you treat your body, how you speak to the people closest to you.",
      "It is chosen, not enforced. Done well, it becomes almost invisible — an inner architecture that lets the rest of life rest on it.",
    ],
  },
  {
    numeral: "V",
    label: "Conscious participation",
    title: "Awareness, in the world — not apart from it.",
    paragraphs: [
      "Many traditions, including some Bharatiya ones, have historically asked people to step away from ordinary life — work, relationship, ambition — to find inner steadiness. That route is not available, and was never the only path, for most lives.",
      "Tattvashila is built around the opposite assumption. Awareness, responsibility and discipline are practised within the life you already have: at the desk, in the conversation, in the school run, in the difficult meeting.",
      "What changes, over time, is not your circumstances. It is the steadiness you bring to them — and, slowly, the kind of person those circumstances are met by.",
    ],
  },
  {
    numeral: "VI",
    label: "Why this, now",
    title: "Why this matters at this point in time.",
    paragraphs: [
      "We don't think modern life is broken, and we don't believe earlier lives were simpler in any meaningful way. People have always struggled to live consciously inside their own time.",
      "What is new is the volume — of information, demand, distraction and visible choice. The ordinary inner toolkit, the one most of us were handed, cannot meet that volume on its own.",
      "Tattvashila is one careful attempt to address that gap. Not a system to follow, not an identity to adopt. A set of working ideas to carry, and gradually grow into.",
    ],
  },
];

export default function PhilosophyPage() {
  return (
    <main data-testid="philosophy-page" className="relative min-h-screen bg-bone text-ink">
      <Nav />

      {/* Opening */}
      <section
        data-testid="philosophy-hero"
        className="relative pt-28 md:pt-36 pb-12 md:pb-16"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-12">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Philosophy
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <h1
                  data-testid="philosophy-headline"
                  className="font-display font-normal text-ink leading-[1.12] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4.4vw, 3.25rem)" }}
                >
                  Awareness, integrated into ordinary life.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 md:mt-8 text-lead text-ink-soft max-w-reading">
                  These are the working ideas behind Tattvashila. We have kept
                  them as plain as we could. They are not original to us &mdash;
                  they are observations, drawn from many traditions and from
                  ordinary modern life, brought into one place because they
                  belong together.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Six idea sections */}
      {SECTIONS.map((s) => (
        <section
          key={s.numeral}
          data-testid={`philosophy-section-${s.numeral.toLowerCase()}`}
          className="relative py-16 md:py-24 border-t border-ink/10"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-12 items-start">
              <div className="col-span-12 md:col-span-3">
                <Reveal>
                  <p className="text-micro tracking-widest uppercase text-ink-muted">
                    {s.numeral} &nbsp;·&nbsp; {s.label}
                  </p>
                </Reveal>
              </div>
              <div className="col-span-12 md:col-span-9 max-w-prose-wide">
                <Reveal delay={0.05}>
                  <h2 className="font-display font-normal text-ink leading-[1.18]"
                      style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}>
                    {s.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-6 md:mt-7 space-y-4 text-body text-ink-soft">
                    {s.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className={idx === s.paragraphs.length - 1 ? "text-ink" : ""}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Closing thought + CTAs */}
      <section
        data-testid="philosophy-closing"
        className="relative py-20 md:py-28 border-t border-ink/10 bg-bone-light"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-start">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  In summary
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <p className="font-display text-ink leading-[1.25]"
                   style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)" }}>
                  Awareness, responsibility, discipline, conscious participation
                  &mdash; carried into the same ordinary life you are already
                  living. Nothing more, nothing less.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-12 md:mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href="/about"
                    data-testid="philosophy-cta-origin"
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-ink text-bone-light text-small font-medium rounded-[2px] hover:bg-river transition-colors duration-500 ease-gentle"
                  >
                    <span>Read the origin</span>
                    <span aria-hidden className="block w-6 h-px bg-current transition-[width] duration-500 ease-gentle group-hover:w-10" />
                  </a>
                  <a
                    href="/#intake"
                    data-testid="philosophy-cta-intake"
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                  >
                    Stay in touch
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
