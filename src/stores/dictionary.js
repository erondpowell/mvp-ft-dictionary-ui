import { reactive } from "vue";

export const dictionaryEntries = [
  {
    word: "water",
    explanation: "Water is the chemical H2O.",
    pos: "NOUN",
    examples: [
      {
        id: 1,
        sentence: "Fish live in the water.",
        imageUrl: null,
      },
      {
        id: 2,
        sentence: "People drink water everyday.",
        imageUrl: null,
      },
    ],
  },
  {
    word: "fire",
    explanation: "fire is hot.",
    pos: "NOUN",
    examples: [
      {
        id: 1,
        sentence: "I like to cook fish over fire.",
        imageUrl:
          "https://cdn.directus.io/docs/v9/app-guide/user-directory/user-directory-20220222A/user-directory-20220222A.webp",
      },
      {
        id: 2,
        sentence:
          "Fire can keep you warm and safe. Or it can burn you to death.",
        imageUrl: null,
      },
    ],
  },
  {
    word: "earth",
    explanation:
      "Earth is land, dirt, or places with no water. 'Earth' is also the name of the world we live on.",
    pos: "NOUN",
    examples: [
      {
        id: 1,
        sentence: "The Earth is only covered by about 30% earth",
        imageUrl:
          "https://cdn.directus.io/docs/v9/app-guide/user-directory/user-directory-20220222A/user-directory-20220222A.webp",
      },
      {
        id: 2,
        sentence: "It is important to be close to the earth.",
        imageUrl: null,
      },
    ],
  },
];
