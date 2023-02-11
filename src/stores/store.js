import { ref } from "vue";

export const notFound = ref("Word Not Found");

export const getTerm = {
  word: "water",
  explanation: "Water is the chemical H2O.",
  pos: "NOUN",
  examples: [
    {
      id: 1,
      sentence: "Fish live in the water.",
      imageUrl:
        "https://cdn.directus.io/docs/v9/app-guide/user-directory/user-directory-20220222A/user-directory-20220222A.webp",
    },
    {
      id: 2,
      sentence: "People drink water everyday.",
      imageUrl: null,
    },
  ],
};

export const languages = ["English", "中文", "Espanol"];
