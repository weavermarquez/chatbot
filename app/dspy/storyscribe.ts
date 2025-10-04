import { ai, ax, s, agent } from "@ax-llm/ax";
import { axGlobals } from "@ax-llm/ax";
import type { AxAI, AxGen, AxSignature, AxAgent, AxFunction } from "@ax-llm/ax";
import type {
  StoryStructure,
  Symbol,
  Beat,
  CharacterJourney,
} from "~/dspy/story";
import { symbolRules } from "~/dspy/story";
// import { testCases } from "~/dspy/storyexamples";
import testCases from "./stories.json";

import { tabScribe, tabBeats } from "~/db/schema/schema";
import { db } from "~/lib/drizzle";

const llm = ai({
  name: "openai",
  config: { model: "gpt-4o" },
  options: { debug: true },
  apiKey: process.env.OPENAI_APIKEY!,
});

const storyGenerator = ax(`
  characterName:string "The main character or entity the story is about.",
  characterStartingState:string "A description of the character and their starting state.",
  centralImbalance:string "The problem around which the story revolves.",
  additionalNotes?:string "Any additional details .",
  storyStructure:string "Quest, Transformation, and so on..."
->
  storyBeats:json[] "Story beats: the outlines are the events; annotated with appropriate symbol and structure."
`);

storyGenerator.setDescription(
  "The goal is to be creative, here.".concat(JSON.stringify(symbolRules)),
);

const storyExamples = testCases.map(
  ({ title, structure, central_imbalance, characters, beats }) => {
    return {
      characterName: characters.at(0)?.name,
      characterStartingState: beats.at(1)?.summary,
      centralImbalance: central_imbalance,
      storyStructure: structure,
      addtionalNotes: title,
      //
      storyBeats: beats,
    };
  },
);

storyGenerator.setExamples(storyExamples);

export async function createScribe(formDetails: {
  characterName: string;
  characterStartingState: string;
  centralImbalance: string;
  storyStructure: string;
  additionalNotes: string;
}) {
  const result = await storyGenerator.forward(llm, formDetails);

  const newScribe: typeof tabScribe.$inferInsert = {
    title: "TEST_TITLE",
    character_name: formDetails.characterName,
    starting_state: formDetails.characterStartingState,
    central_imbalance: formDetails.centralImbalance,
    additional_notes: formDetails.additionalNotes,
    story_structure: formDetails.storyStructure,
  };

  const returnedEntry = await db
    .insert(tabScribe)
    .values(newScribe)
    .returning({ id: tabScribe.id });

  console.log("successfully inserted Scribe, ID:", returnedEntry);
  const newId = returnedEntry.at(0)?.id;

  await db.insert(tabBeats).values(
    result.storyBeats.map(
      (beat: {
        idx: number;
        symbol: string;
        label: string;
        summary: string;
      }) => {
        return {
          idx: beat.idx,
          scribeId: newId,
          symbol: beat.symbol,
          label: beat.label,
          summary: beat.summary,
        };
      },
    ),
  );

  return newId;
}
