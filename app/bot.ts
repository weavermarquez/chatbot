import { ai, ax } from "@ax-llm/ax";
import type { StoryStructure, Symbol, Beat, Character } from "~/story";
import { turnipGrandfather } from "~/story";

const llm = ai({
  name: "openai",
  config: { model: "gpt-4o" },
  apiKey: process.env.OPENAI_APIKEY!,
});

export async function fubar() {
  const gen = ax('topic:string -> article:string "500 word article"');

  // Enable streaming
  const mystream = await gen.forward(
    llm,
    {
      topic: "The future of TypeScript",
    },
    { stream: true },
  );

  // Process chunks as they arrive
  for await (const chunk of mystream) {
    if (chunk.article) {
      process.stdout.write(chunk.article); // Real-time output
    }
  }
}

fubar();

export async function foo() {
  // const userDetails = {
  //   characterName: "wallo the lynx",
  //   centralImbalance: "finding a home in the forest",
  // };
  const userDetails = {
    characterName: "Nasir-el-Din Hodja",
    startingCondition: "Nasir-el-Din Hodja lay under a walnut tree to rest.",
    centralImbalance:
      "While his body was at rest, his mind was troubled. He couldn't understand why Allah, in his infinite wisdom had paired a big, strong tree and small, light walnuts.",
  };

  const storyteller = ax(`
    questExampleStory: json "An example of the Quest story structure",
    userDetails:json "A new character and the central imbalance around which the story is considered to progresses or is hindered" ->
    newStoryString:string "New story beats; each beat separated by annotations of step, symbol, structure, and outline."
  `);

  const stream = await storyteller.streamingForward(llm, {
    questExampleStory: turnipGrandfather,
    userDetails,
  });

  for await (const chunk of stream) {
    if (chunk.storyString) {
      process.stdout.write({ ...chunk.storyString });
    }
  }
}
// foo();

// async function converse(userDetails: {
//   characterName: string;
//   centralImbalance: string;
// }) {
//   const result = await mutateStory.forward(llm, {

//   return result.newStory;
// }

// const modelResponse = await converse(userDetails);

// return modelResponse;
// }

// foo().then((modelResponse) => {
//   console.log("mutating the turnip w walerie", modelResponse);
//   modelResponse.sequence.beats.map((beat) => console.log("\nbeat:", beat));
// });
