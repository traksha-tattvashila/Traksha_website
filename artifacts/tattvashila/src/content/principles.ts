export interface HomePrinciple {
  numeral: string;
  title: string;
  body: string;
}

export interface PhilosophySection {
  numeral: string;
  label: string;
  devanagari?: string;
  traditionalRoot?: string;
  title: string;
  doctrinalNote?: string;
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
    title: "Modern life is full. Inner life often isn\u2019t.",
    paragraphs: [
      "The average modern day is densely scheduled, well-informed and emotionally demanding. Most of us know more, do more and feel more in a single year than our grandparents did across a decade.",
      "What hasn\u2019t grown at the same pace is our inner steadiness \u2014 the ordinary capacity to be with our own life without constant reaction, performance or escape.",
      "This isn\u2019t a moral failing or a generational weakness. It is an imbalance, and a recent one. The tools most of us inherited weren\u2019t built for the speed, density and exposure of contemporary life.",
    ],
  },
  {
    numeral: "II",
    label: "Awareness",
    devanagari: "\u0938\u093e\u0915\u094d\u0937\u0940",
    traditionalRoot: "s\u0101k\u1e63\u012b",
    title: "Awareness, plainly.",
    doctrinalNote: "Not a spiritual state. A working faculty.",
    paragraphs: [
      "We don\u2019t use the word in a religious or therapeutic sense. By awareness we mean a working ability \u2014 to notice what\u2019s actually happening, before reacting to it.",
      "What you\u2019re feeling. What\u2019s being asked of you. What you\u2019re avoiding. What you\u2019re carrying that isn\u2019t yours. What\u2019s worth keeping. What\u2019s worth setting down.",
      "In the classical Bharatiya vocabulary, the nearest term is s\u0101k\u1e63\u012b \u2014 the witness. Not a passive watcher, but an active orientation: prior to opinion, prior to desire, prior to the story one tells about what is happening. It is the faculty most systematically trained in sustained contemplative practice, and most systematically eroded by the density of modern experience.",
      "It is the basic condition for living one\u2019s own life rather than someone else\u2019s idea of it. Without it, even good circumstances can begin to feel borrowed.",
    ],
  },
  {
    numeral: "III",
    label: "Responsibility",
    devanagari: "\u0915\u0930\u094d\u0924\u0935\u094d\u092f",
    traditionalRoot: "kartavya",
    title: "Responsibility, before identity.",
    doctrinalNote: "Stand behind your life \u2014 not your idea of it.",
    paragraphs: [
      "Most modern frameworks for self-improvement begin with identity \u2014 who you are, what you stand for, what kind of person to become. We start one step earlier.",
      "The reason is simple. Identity, however carefully constructed, can become a costume \u2014 a set of positions and self-descriptions that float above the actual texture of one\u2019s choices. Responsibility reaches beneath that layer. It asks: regardless of who you believe yourself to be, what are the actual effects of your presence in the world?",
      "Responsibility, in the sense we mean it, is the willingness to stand behind your own life \u2014 your decisions, your effects on others, your unfinished work \u2014 without flinching and without performance.",
      "It is not a burden. Done honestly, it is the thing that makes a life feel lighter, not heavier \u2014 because nothing important is being avoided in the background.",
    ],
  },
  {
    numeral: "IV",
    label: "Discipline",
    devanagari: "\u0938\u093e\u0927\u0928\u093e",
    traditionalRoot: "s\u0101dhan\u0101",
    title: "Discipline, chosen rather than imposed.",
    doctrinalNote: "Structure freely chosen is the condition for inner freedom.",
    paragraphs: [
      "Modern life often confuses discipline with strain \u2014 pushing harder, achieving more, optimising further. We mean something quieter.",
      "In the older vocabulary, the nearest concept is s\u0101dhan\u0101 \u2014 the instrument, the practice. Not the achievement, but the repeated act of returning. A s\u0101dhan\u0101 is not performed for results. It is performed because it is the right structural condition for the kind of life one wants to be capable of living.",
      "Discipline here is the small, repeated structure that holds a life together: when you sleep, what you read, who you spend time with, how you treat your body, how you speak to the people closest to you.",
      "It is chosen, not enforced. Done well, it becomes almost invisible \u2014 an inner architecture that lets the rest of life rest on it.",
    ],
  },
  {
    numeral: "V",
    label: "Conscious participation",
    title: "Awareness, in the world \u2014 not apart from it.",
    paragraphs: [
      "Many traditions, including some Bharatiya ones, have historically asked people to step away from ordinary life \u2014 work, relationship, ambition \u2014 to find inner steadiness. That route is not available, and was never the only path, for most lives.",
      "Tattvashila is built around the opposite assumption. Awareness, responsibility and discipline are practised within the life you already have: at the desk, in the conversation, in the school run, in the difficult meeting.",
      "What changes, over time, is not your circumstances. It is the steadiness you bring to them \u2014 and, slowly, the kind of person those circumstances are met by.",
    ],
  },
  {
    numeral: "VI",
    label: "Why this, now",
    title: "Why this matters at this point in time.",
    paragraphs: [
      "We don\u2019t think modern life is broken, and we don\u2019t believe earlier lives were simpler in any meaningful way. People have always struggled to live consciously inside their own time.",
      "What is new is the volume \u2014 of information, demand, distraction and visible choice. The ordinary inner toolkit, the one most of us were handed, cannot meet that volume on its own.",
      "Tattvashila is one careful attempt to address that gap. Not a system to follow, not an identity to adopt. A set of working ideas to carry, and gradually grow into.",
    ],
  },
];

export const PHILOSOPHY_CLOSING =
  "Awareness, responsibility, discipline, conscious participation \u2014 carried into the same ordinary life you are already living. Nothing more, nothing less.";
