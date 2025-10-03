// Judge LLM for story quality
const storyQualityJudge = ax(`
  prediction:string "Generated story",
  example:string "Reference example" ->
  quality:number "Story quality score (0-1)"
`);

// Judge LLM for structure adherence
const structureJudge = ax(`
  prediction:string "Generated story",
  storyStructureRules:string "Story structure theory rules",
  expectedStructure:string "Expected story structure" ->
  adherence:number "Structure adherence score (0-1)"
`);

// Multi-objective metric combining both judges
const multiMetric = async ({ prediction, example }) => {
  const quality = await storyQualityJudge.forward(ai, {
    prediction: prediction.storyBeats, // or full story text
    example: example.referenceStory,
  });

  const adherence = await structureJudge.forward(ai, {
    prediction: prediction.storyBeats,
    storyStructureRules: JSON.stringify(storyStructureRules),
    expectedStructure: example.storyStructure,
  });

  return {
    storyQuality: quality.quality,
    structureAdherence: adherence.adherence,
  };
};
