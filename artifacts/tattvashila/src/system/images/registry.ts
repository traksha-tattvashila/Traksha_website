import type { ImageMeta } from "./types";

import communityUnderTree from "@assets/file_0000000076307209988d741acb39836b_1779774085568.png";
import bookAndTea from "@assets/file_00000000fc3871fa8288567c8ea75de1_1779774085852.png";
import stackOfBooks from "@assets/file_00000000bfe47209906e34cdc38ff8c0_1779774085821.png";
import mountainWalk from "@assets/file_00000000809c7207b9c76b0548dbc723_1779774085735.png";
import notebookByWindow from "@assets/file_000000000934720896e694db83527790_1779774059425.png";
import vaseInterior from "@assets/file_00000000b77871fab76bde37d6d599b2_1779774085786.png";

export const images = {
  heroThreshold: {
    src: communityUnderTree,
    alt: "A small gathering seated beneath a large tree at dusk — quiet, unhurried conversation in open landscape",
    credit: "The practice of attending, together.",
    aspectHint: "4/5",
    fallbackTone: "warm",
    loading: "eager",
  },
  heroPremise: {
    src: bookAndTea,
    alt: "A Tattvashila book resting on a low wooden table beside a dark ceramic cup, dappled light across the surface",
    credit: "Held quietly, over time.",
    aspectHint: "4/5",
    fallbackTone: "warm",
    loading: "eager",
  },
  archiveBooks: {
    src: stackOfBooks,
    alt: "A stack of four linen-bound volumes — The Inner Journey, Contemplative Learning, Notes on Stillness, Dialogue with Life — in warm indirect light",
    credit: "Publications in preparation.",
    aspectHint: "4/3",
    fallbackTone: "warm",
    loading: "lazy",
  },
  journeyWalk: {
    src: mountainWalk,
    alt: "A solitary figure walking a ridgeline path at golden hour, mountains layered in haze behind, a single tree ahead",
    credit: "One path, carried steadily.",
    aspectHint: "3/2",
    fallbackTone: "warm",
    loading: "lazy",
  },
  notebookReading: {
    src: notebookByWindow,
    alt: "An open book on a wooden desk beside a ceramic vase of dried stems and a dark mug, warm morning light through a window",
    credit: "The desk as practice.",
    aspectHint: "4/3",
    fallbackTone: "warm",
    loading: "lazy",
  },
  vaseInterior: {
    src: vaseInterior,
    alt: "A clay vessel with a single branch, standing in a sun-washed plaster interior — shadow falling diagonally across the wall",
    credit: "Stillness, held in form.",
    aspectHint: "4/3",
    fallbackTone: "warm",
    loading: "lazy",
  },
} as const satisfies Record<string, ImageMeta>;

export type ImageKey = keyof typeof images;
