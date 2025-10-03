import { ai, ax, s, agent } from "@ax-llm/ax";
import { axGlobals } from "@ax-llm/ax";
import type { AxAI, AxGen, AxSignature, AxAgent, AxFunction } from "@ax-llm/ax";

import type { StoryStructure, Symbol, Beat, CharacterJourney } from "~/story";
import { symbolRules } from "~/story";
import { testCases } from "~/storyexamples";

const llm = ai({
  name: "openai",
  config: { model: "gpt-4o" },
  options: { debug: true },
  apiKey: process.env.OPENAI_APIKEY!,
});

const classifier: AxGen = ax(
  `review:string -> sentiment:class "positive, negative, neutral"`,
);

// const result = await classifier.forward(llm, {
//   review: "Like a perfectly lukewarm and tepid bowl of water.",
// });

// console.log(result.review);

const storyGenerator = ax(`
  characterName:string "The main character",
  characterDescription:string "A description of the character at the start of the story.",
  centralImbalance:string "The problem around which the story revolves." ->
  storyStructure:class "Quest, Transformation",
  storyBeats:json[] "Story beats: the outlines are the events; annotated with appropriate symbol and structure."
`);

const beatsAnalyser = ax(`
  fullStory:string "A telling of the whole story." ->
  characterName:string "The main character",
  storyStructure:class "Quest, Transformation",
  storyBeats:json[] "Story beats: the outlines are the events; annotated with appropriate symbol and structure."
`);

beatsAnalyser.setDescription(JSON.stringify(symbolRules));
storyGenerator.setDescription(
  "The goal is to be creative, here.".concat(JSON.stringify(symbolRules)),
);

const beatsExamples = testCases.map(({ fullStory, analysis }) => {
  return {
    fullStory,
    //
    characterName: analysis.characterName,
    storyStructure: analysis.storyStructure,
    storyBeats: analysis.storyBeats,
  };
});

storyGenerator.setExamples(beatsExamples);

const generatorExamples = testCases.map(({ fullStory, analysis }) => {
  return {
    characterName: analysis.characterName,
    characterDescription: analysis.storyBeats
      .at(0)
      ?.outline.concat(analysis.storyBeats.at(1)!.outline),
    centralImbalance: analysis.storyBeats.at(2)?.outline,

    //
    storyStructure: analysis.storyStructure,
    storyBeats: analysis.storyBeats,
  };
});

beatsAnalyser.setExamples(generatorExamples);

const genExample = {
  characterName: "Valerie Kim",
  characterDescription: `My name is Valerie Kim. I am a software developer, community organizer, and entrepreneur. 1 I’ve gone through the intro developer materials on Frappe, and currently writing an article comparing Microsoft Power Platform/D365 CRM with Frappe Framework.`,
  centralImbalance: `
 However, I am particularly invested in encouraging ERPNext adoption in social enterprise. Frappe Framework possesses unique qualities as a 1) free and open source software that’s 2) backed by a financially healthy and mature development co-operative, and 3) establishes a good-enough default schema for business data.

I believe these have major implications in:

    reducing barriers to entrepreneurial education,
    accelerating a small organization’s ability to access social finance,
    facilitating the self-determination of indigenous and underprivileged peoples over their data,
    enabling digital transformations at unprecedented speeds, 3
    priming the ecosystem to respond to crises at scale, 4 and
    making data federation possible for a bottom-up way to address the sectors’ data deficit.

My dream is to catalyze great advancements in the social innovation sector with wider adoption of this software.`,
  //
};

// const genexample = {
//   charactername: "lazy jack",
//   characterdescription: `jack lived with his mother in a dreary cottage at the top of a hill.
// they were very poor, but jack was so lazy he would do nothing but bask in the sun.`,
//   centralimbalance:
//     "he was so lazy that his mother warned him he is being kicked out.",
//   //
// };

const exampleStory = `
Once upon a time there was a boy whose name was Jack, and he lived with his mother in a dreary cottage. They were very poor, and the old woman earned a few pennies by spinning, but Jack was so lazy that he would do nothing except bask in the sun in the hot weather, and sit by the corner of the fire in the winter time. His mother could not make him do anything for her, until at last she warned him that if he did not begin to work for his porridge, she would turn him out of the house to get his living as best he could.

This threat finally stirred Jack, and he went out and found a job for the day working on a farm. The farmer paid him one penny, but he was not used to having money, and as he was coming home, he lost it as he passed over a stream. “You stupid boy,” said his mother, “you should have put it in your pocket.” “Next time I will,” replied Jack.

The next day Jack went out again, and found a job with a cowkeeper, who gave him a jar of milk for his day’s work. Jack took the jar and put it into the large pocket of his jacket, spilling it all, long before he got home. “Dear me!” said the old woman; “you should have carried it on your head.” “Next time I will,” replied Jack.

The following day Jack found a job with a farmer, who agreed to give him cream cheese for his work. In the evening, Jack took the cheese and went home with it on his head. By the time he got home the cheese was completely spoiled, part of it being lost, and part matted with his hair. “You good-for-nothing boy,” said his mother, “you should have carried it very carefully in your hands.” “Next time, I will,” replied Jack.

The day after this Jack again went out, and found a job with a baker, who would give him nothing for his work but a large tomcat. Jack took the cat, and began carrying it very carefully in his hands, but in a short time Tommy scratched him so much that he was forced to let it go. When he got home, his mother said to him: “You silly fellow, you should have tied it with a string, and dragged it along after you.” “Next time I will,” said Jack.

The next day Jack hired himself to a butcher, who rewarded his labours by the handsome present of a shoulder of lamb. Jack took the meat, tied it to a string, and trailed it along after him in the dirt, so that by the time he had gotten home the meat was completely spoiled. His mother this time completely lost her patience with him, for the next day was Sunday, and she had to make do with cabbage for her dinner. “You nincompoop,” said she to her son, “you should have carried it on your shoulder.” “Next time I will,” replied Jack.

On the Monday, Jack went out once more, and found a job with a cattle keeper, who gave him a donkey for his trouble. Although Jack was very strong, he found some difficulty in hoisting the donkey on his shoulders, but at last he managed it, and began walking slowly home with his prize. Now it happened that in a house along his way there lived a rich man with his only daughter, a beautiful girl, but unfortunately deaf and dumb. She had never really laughed in her life, and the doctors said she would never recover until somebody made her laugh.

Many tried without success, and at last her father, in despair, said he would offer her in marriage to the first man who could make her laugh. This young lady happened to be looking out of the window when Jack was passing with the donkey on his shoulders, with the legs sticking up in the air, and the sight was so comical and strange, that she burst out into a great fit of laughter, and immediately recovered her speech and hearing. Her father was overjoyed, and kept his promised by marrying her to Jack, who was thus made a rich gentleman. They lived in a large house, and Jack’s mother lived with them in great happiness until she died.

And that’s the story of Lazy Jack By James Halliwell Orchard Phillips. I do hope you enjoyed it. Bertie says that perhaps Jack wasn’t quite so lazy after all – but he certainly wasn’t the brightest of boys.
`;

// const result = await beatsAnalyser.forward(llm, { fullStory: exampleStory });
const result = await storyGenerator.forward(llm, { ...genExample });
console.log(result.storyStructure);
console.log(result.storyBeats);
