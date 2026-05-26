export interface HomePrinciple {
  numeral: string;
  title: string;
  body: string;
}

export interface PhilosophySection {
  numeral: string;
  label: string;
  title: string;
  paragraphs: string[];
}

export const HOME_PRINCIPLES: HomePrinciple[] = [
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

export const PHILOSOPHY_SECTIONS: PhilosophySection[] = [
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

export const PHILOSOPHY_CLOSING =
  "Awareness, responsibility, discipline, conscious participation — carried into the same ordinary life you are already living. Nothing more, nothing less.";
