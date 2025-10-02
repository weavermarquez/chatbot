export type StoryStructure = "quest" | "transformation"; // many more
export type Symbol = "r" | "m" | "<" | ">" | "u" | "t";
export type Beat = {
  step: number;
  symbol: Symbol;
  structure: string;
  outline: string;
  note?: string;
};

/*
 * Ax Types
 *
 * // BEAT
 * step:number
 * symbol:class "r, m, <, >, u, t"
 * structure: string
 * outline:string
 * note?:string
 *
 * // CHARACTER
 * character:string
 * sequence:
 * storyStructure:class "quest, transformation"
 * beats:json[]
 *
 *
 *
 * reasoning!:string
 *
 *
 * // CONSTRAINTS
 *
 */

export type Character = {
  name: string;
  storystructure: StoryStructure;
  beats: Array<Beat>;
};

export const turnipGrandfather = {
  name: "the grandfather",
  sequence: {
    type: "quest",
    beats: [
      {
        step: 1,
        symbol: "r",
        structure: "opening",
        outline: "implied",
      },
      {
        step: 2,
        symbol: "m",
        structure: "initial situation",
        outline: "Grandfather planted a turnip.",
      },
      {
        step: 3,
        symbol: "<",
        structure: "problem",
        outline:
          "When the time came to harvest the turnip, he couldn't pull it up.",
      },
      {
        step: 4,
        symbol: ">",
        structure: "journey",
        outline: "He called for help.",
      },
      {
        step: 5,
        symbol: "<",
        structure: "meeting with...",
        outline: "A character came over ...",
      },
      {
        step: 6,
        symbol: ">",
        structure: "... friend/helper",
        outline:
          "... and tried to help him harvest it, but the attempt failed.",
        note: "Loop back to step 3 in a series featuring grandmother, granddaughter, a dog, five beetles.",
      },
      {
        step: 7,
        symbol: "<",
        structure: "meeting with...",
        outline:
          "The fifth beetle, adding its strength to the cumulative build-up...",
      },
      {
        step: 8,
        symbol: ">",
        structure: "... enemy/hindrance",
        outline: "... helped them pull up the turnip...",
      },
      {
        step: 9,
        symbol: "m",
        structure: "Final situation (outcome/resolution)",
        outline: "... enabling the grandfather to harvest it.",
      },
      {
        step: 10,
        symbol: "r",
        structure: "Closing",
        outline: "implied",
      },
    ],
  },
};
