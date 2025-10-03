/*
 // StoryRecord
 id:string
 title:string
 source?:string
 central_imbalance:string
 beats:json[]
 notes:string
 characters:json[]
 structure:class "quest, transformation, trickster, trickster_variation, death_rebirth, voyage_return, perpetual_motion, revelation, riddle, kishotenketsu, call_response"
 */

export type StoryRecord = {
  id: string;
  title: string;
  source?: string;
  central_imbalance: string;
  beats: Beat[];
  notes: string;

  characters: {
    name: string;
    role?:
      | "protagonist"
      | "antagonist"
      | "helper"
      | "hindrance"
      | "narrator"
      | string;
  }[];
  structure:
    | "quest"
    | "transformation"
    | "trickster"
    | "trickster_variation"
    | "death_rebirth"
    | "voyage_return"
    | "perpetual_motion"
    | "revelation"
    | "riddle"
    | "kishotenketsu"
    | "call_response";
};

/*
 * // BEAT
 * idx:number
 * symbol:class "r , m , ↽ , ⇀ , ⇌ , u , t"
 * label: string
 * summary: string
 */

export type Beat = {
  idx: number;
  symbol: "r" | "m" | "↽" | "⇀" | "⇌" | "u" | "t"; // ascii fallback: 'R','M','L','R','X','U','T'
  label: string;
  summary: string;
};

export type SymbolRule = {
  symbolEvents: string;
  symbolIcon: Symbol;
  description: string;
};

export const symbolRules: SymbolRule[] = [
  {
    symbolEvents: "Openings/Closings",
    symbolIcon: "r",
    description: `
The mark of recursion or re-entry is used to symbolise openings and closings of stories.
These typically set up and resolve cognitive dissonances in space-time (e.g., ‘Once upon
a time’, which treats time as a bounded region of space on which something can be placed,
rather than something flowing, moving and constantly in motion; and ‘they lived happily ever
after’, which treats the extent of characters’ lives as indefinite rather than definite).`,
  },
  {
    symbolEvents: "Initial/final situations",
    symbolIcon: "m",
    description: `
The mark is used to symbolise a ‘who, when, and where’: a character in a particular point in
space and time at the start and end of a story. `,
  },
  {
    symbolEvents: "Empty space",
    symbolIcon: "n",
    description: `
The only structure in which a blank space appears, indicating the absence of a mark, is
the Open-Ended Linear Koan structure. Here, I focus on the comparatively static aspect
of the symbol, and link it to a transcendent, awe-inspired ‘WOW!’ state.`,
  },
  {
    symbolEvents: "Backward step",
    symbolIcon: "<",
    description: `
The backward barb symbolises an event which poses a problem for a character or hinders them
from resolving it. In this context, meetings are interpreted as backward steps.`,
  },
  {
    symbolEvents: "Forward step",
    symbolIcon: ">",
    description: `
The forward barb symbolises an event which helps a character resolve the problem they face, or
propels them towards realising their destiny.`,
  },
  {
    symbolEvents: "Events involving cognitive dissonance",
    symbolIcon: "t",
    description: `
As will be described, the double barb symbolises an event which involves a ‘mistake’
of some kind – specifically, an Aristotelian categorical cognitive dissonance
often in the form of defeated expectation in the quality of the interaction
between two characters.11 This could be: (i) an active intention to dupe
(Trickster step and its resolution in a Transformational Twist), (ii) a comic outcome
(Comic step, based on a simile- based category mistake and its resolution in a Transformational
Twist), or (iii) a surprising outcome (Trickster Awe step, based
on an interjection-like perception of dissonance between categorematic and
syncategorematic qualities of being (Huh?!) and the resolution of that perceived
sense of dissonance (Ah!) in a Transformational Twist). The double barb typically appears
either singly ( ⇌ ), not ( ⇌ ⇌ ), or as a pair framing a backward step ( ⇌ ↽ ⇌ ).`,
  },
];

console.log(JSON.stringify(symbolRules));
