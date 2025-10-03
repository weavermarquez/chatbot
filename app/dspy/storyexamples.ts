import type {
  StoryStructure,
  Symbol,
  Beat,
  CharacterJourney,
} from "~/dspy/story";

// Un-annotated Test Cases of bare-bones stories.
export const storyStrings: string[] = [
  `
Three pigs (Dennis, Biddy and Rex) lived together with their
mother. The house was overcrowded, so the mother decided
to send the three eldest pigs out to ‘find their fortunes for
themselves’. On their journey, they had to shelter from the rain,
but this allowed them to meet people with a cart of straw, a
cart full of slats of wood, and a lorry with a load of bricks. The
men each agreed to give some of their materials to the pigs to
build houses with. Biddy built a house of straw; Dennis, one of
wooden slats; Rex, one of bricks. A hungry wolf came to call on
Biddy and, failing to trick Biddy into letting him in, blew her
house in. Biddy escaped and ran to Dennis’s house. The wolf
followed and, failing to trick either pig into letting him in, blew
Dennis’s house in. Both pigs escaped and ran to Rex’s house.
The wolf followed and, failing to blow the brick house in, was
about to get in through the chimney, but the pigs had some
straw to put on the fire which blazed up and burnt the wolf to
death, … allowing the pigs to cook him and eat him for supper.
The pigs lived together safely there until eventually they ended
up being taken ‘to the old people’s houses’ where they died.`,
  `
Grandfather planted a turnip. When the time came to harvest it, he couldn’t pull it up. He called for help.
A character came over and tried to help him harvest it, but the attempt failed.
The fifth beetle, adding its strength to the cumulative build-up
helped them pull up the turnip enabling the grandfather to harvest it.`,
  `
Once upon a time, Nasr-el-Din Hodja lay under a walnut tree to rest.
While his body was at rest, his mind was troubled. He couldn’t understand why Allah, in His infinite wisdom had paired a big, strong tree and small, light walnuts.
Hodja had an idea – he thought that it would be far better for large pumpkins to grow on sturdy trees, and small walnuts on the slender stems of creeping plants.
Sleep came to him before he could follow this train of thought further.
A walnut fell on him from the tree and woke him up.
He realised that if the world had been constructed according to his scheme, he would have been killed.
He then realised that there was a good reason why things were the way they were rather than the way he thought they should
And he never questioned the wisdom of Allah ever again. `,
  `
Once when I [Cornix] was walking slowly as I used to do along
the crest of the sands by the shore the sea-god [Neptune] saw
me and grew hot. When his flattering words and entreaties
proved a waste of time, he tried force, and chased after me. I
ran, leaving the solid shore behind, tiring myself out uselessly
in the soft sand. Then I called out to gods and men. No mortal
heard my voice, but the virgin goddess [Minerva] feels pity
for a virgin and she helped me. I was stretching out my arms
to the sky: those arms began to darken with soft plumage. I
tried to lift my cloak from my shoulders but it had turned to
feathers with roots deep in my skin. I tried to beat my naked
breast with my hands but found I had neither hands nor naked
breast.
I ran, and now the sand did not clog my feet as before but I
lifted from the ground, and soon sailed high into the air. So I
became an innocent servant of Minerva.`,
];

export const characterJourneys: CharacterJourney[] = [
  {
    storyTitle: "The Three Little Pigs",
    characterName: "Dennis, Biddy, and Rex",
    storyStructure: "Quest",
    storyBeats: [
      {
        step: 1,
        symbol: "r",
        structure: "Opening",
        outline:
          "There once was a pigs' house where they were getting thick on the ground.",
      },
      {
        step: 2,
        symbol: "m",
        structure: "Main characters and their Initial situation",
        outline: `Mother pig with pigs ‘getting thick on the ground’; Biddy,
Dennis, Rex, in the way of ‘a younger family’ (‘Dennis had trod
on one of the wee piglets by mistake’); wolf, hungry (condition implied).`,
      },
      {
        step: 3,
        symbol: "<",
        structure: "",
        outline: `They need to ‘find their fortunes’ but also find shelter from the
wind, snow, and rain. To learn to become independent little piggies and fend for themselves.`,
      },
      {
        step: 4,
        symbol: ">",
        structure: "Fortunately",
        outline: "They were able to set out to try to 'find their fortunes'",
      },
      {
        step: 5,
        symbol: "<",
        structure: "Unfortunately",
        outline: "The weather was stormy and their 'trotters were sore!'",
      },
      {
        step: 6,
        symbol: ">",
        structure: "Fortunately",
        outline:
          "They were able to rest by the roadside, under the shade of a wood.",
      },
      {
        step: 7,
        symbol: "<",
        structure: "Unfortunately",
        outline:
          "Biddy couldn't build herself a house unless she had something to build it with.",
      },
      {
        step: 8,
        symbol: ">",
        structure: "Fortunately",
        outline:
          "The man agreed to give her some of the straw he was carrying.",
      },
      {
        step: 9,
        symbol: "<",
        structure: "Unfortunately",
        outline: "A wolf came knocking at each of the pigs' doors.",
      },
      {
        step: 10,
        symbol: ">",
        structure: "Fortunately",
        outline:
          "Biddy and Dennis managed to escape from the wolf, and - together with Rex - managed to defeat him.",
      },
      {
        step: 11,
        symbol: "m",
        structure: "Final state",
        outline:
          "The pigs were satisfied with the wolf for supper and lived safely there...",
      },
      {
        step: 12,
        symbol: "r",
        structure: "Closing",
        outline: `... until eventually they ended up being taken ‘to the old
        people’s houses’ where they died.`,
      },
    ],
  },
  {
    storyTitle: "The Gigantic Turnip",
    characterName: "The Grandfather",
    storyStructure: "Quest",
    storyBeats: [
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
  {
    storyTitle: "The Story of Nasr-el-Din Hodja and the Walnut Tree",
    characterName: "Nasr-el-Din Hodja",
    storyStructure: "Quest",
    storyBeats: [
      {
        step: 1,
        symbol: "r",
        structure: "Opening",
        outline: "Once upon a time...",
      },
      {
        step: 2,
        symbol: "m",
        structure: "Initial situation",
        outline: "Nasr-el-Din Hodja lay under a walnut tree to rest.",
      },
      {
        step: 3,
        symbol: "<",
        structure: "Unfortunately",
        outline: `While his body was at rest, his mind was
troubled. He couldn’t understand why Allah,
in His infinite wisdom had paired a big,
strong tree and small, light walnuts.`,
      },
      {
        step: 4,
        symbol: ">",
        structure: "Fortunately",
        outline: `Hodja had an idea – he thought that it would
be far better for large pumpkins to grow
on sturdy trees, and small walnuts on the
slender stems of creeping plants.`,
      },
      {
        step: 5,
        symbol: "<",
        structure: "Unfortunately",
        outline: `Sleep came to him before he could follow this train of thought further.`,
      },
      {
        step: 6,
        symbol: ">",
        structure: "Fortunately",
        outline: `A walnut fell on him from the tree and woke him up.`,
      },
      {
        step: 7,
        symbol: "<",
        structure: "Unfortunately",
        outline: `He realised that if the world had been constructed according
        to his scheme, he would have been killed.,`,
      },
      {
        step: 8,
        symbol: ">",
        structure: "Fortunately",
        outline: `He then realised that there was a good reason why things
        were the way they were rather than the way he thought they should be.`,
      },
      {
        step: 9,
        symbol: "m",
        structure: "Final situation",
        outline: "And he never questioned the wisdom of Allah...",
      },
      {
        step: 10,
        symbol: "r",
        structure: "Closing",
        outline: "... ever again.",
      },
    ],
  },
  {
    storyTitle: "The Story of Cornix, from Ovid's Metamorphoses",
    characterName: "Cornix",
    perspective: "Interspersed",
    storyStructure: "Quest",
    storyBeats: [
      {
        step: 1,
        symbol: "r",
        structure: "Opening",
        outline: "Implied",
      },
      {
        step: 2,
        symbol: "m",
        structure: "Initial Situation",
        outline: "Cornix, Neptune, and Minerval later.",
      },
      {
        step: 3,
        symbol: "<",
        structure: "Problem (Neptune)",
        outline: "Neptune sees Cornix.",
      },
      {
        step: 4,
        symbol: ">",
        structure: "Journey (Neptune)",
        outline: "Neptune approaches Cornix.",
      },
      {
        step: 5,
        symbol: "<",
        structure: "Problem (Cornix); Meeting with... (Neptune)",
        outline: "They meet face to face.",
      },
      {
        step: 6,
        symbol: ">",
        structure: "Journey (Cornix); ... friend/helper (Neptune)",
        outline:
          "She uses her powers of resistance; he uses his powers of seduction.",
      },
      {
        step: 7,
        symbol: "<",
        structure: "Meeting with... (Cornix, Neptune)",
        outline: "He tries to use force.",
      },
      {
        step: 8,
        symbol: ">",
        structure: "... friend/helper (Cornix); ... enemy/hindrance (Neptune)",
        outline: "She runs away, crying for help; he chases after her.",
      },
      {
        step: 9,
        symbol: "<",
        structure: "Problem (Minerva)",
        outline: "Minerva hears Cornix's cry.",
      },
      {
        step: 10,
        symbol: ">",
        structure: "Outcome/resolution (Minerva)",
        outline: "Minerva intervenes.",
      },
      {
        step: 11,
        symbol: "<",
        structure: "Meeting with... (Cornix)",
        outline: "Minerva's intervention reaches Cornix.",
      },
      {
        step: 12,
        symbol: ">",
        structure: "... Enemy/hindrance (Cornix)",
        outline: "Cornix is transformed.",
      },
      {
        step: 13,
        symbol: "m",
        structure: "Final situation (outcome/resolution)",
        outline: `Cornix becomes Minerva's servant; for Neptune and Minerva,
        business continues as usual.`,
      },
      {
        step: 14,
        symbol: "r",
        structure: "Closing",
        outline: "implied",
      },
    ],
  },
  {
    storyTitle: "The Story of Cornix, from Ovid's Metamorphoses",
    characterName: "Cornix",
    perspective: "Minerva",
    storyStructure: "Transformation",
    storyBeats: [
      {
        step: 1,
        symbol: "r",
        structure: "Opening",
        outline: "Once upon a time...",
      },
      {
        step: 2,
        symbol: "m",
        structure: "Opening Situation",
        outline: "... Cornix...",
      },
      {
        step: 3,
        symbol: "<",
        structure: "Problem",
        outline: "... was chased by Neptune ...",
      },
      {
        step: 4,
        symbol: ">",
        structure: "Resolution",
        outline: "... but was saved by Minerva...",
      },
      {
        step: 5,
        symbol: "m",
        structure: "Ending situation",
        outline:
          "... who transformed Cornix into a white crow. Cornix lived like that...",
      },
      {
        step: 6,
        symbol: "r",
        structure: "Closing",
        outline: "... from then on.",
      },
    ],
  },
];

export const testCases = [
  {
    // Three little pigs
    fullStory: storyStrings[0],
    analysis: characterJourneys[0],
  },
  {
    // Turnip
    fullStory: storyStrings[1],
    analysis: characterJourneys[1],
  },
  {
    // Nasr-el-Din Hodja and the Walnut Tree
    fullStory: storyStrings[2],
    analysis: characterJourneys[2],
  },
  {
    // Cornix (Quest)
    fullStory: storyStrings[3],
    analysis: characterJourneys[3],
  },

  {
    // Cornix (Transformation)
    fullStory: storyStrings[3],
    analysis: characterJourneys[4],
  },
];
