export interface JourneyStep {
  numeral: string;
  title: string;
  body: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    numeral: "01",
    title: "Begin with awareness.",
    body: "Notice what is actually happening in your day, before you react to it. Not as a practice apart from life — but inside it.",
  },
  {
    numeral: "02",
    title: "Take responsibility.",
    body: "Stand behind your decisions, your effects, your unfinished things. Not as a burden — as the thing that makes a life feel lighter.",
  },
  {
    numeral: "03",
    title: "Build small structure.",
    body: "Choose a few disciplines — sleep, attention, how you speak to people close to you — and hold them. Over time they become invisible and carry everything else.",
  },
  {
    numeral: "04",
    title: "Participate consciously.",
    body: "Bring steadiness to the same ordinary life you already have. Nothing dramatic. The change is in the quality of your presence inside it.",
  },
];
