import { ref } from "vue";

export const notFound = ref("Word Not Found");

export const getTerm = {
  word: "water",
  explanation: "Water is the chemical H2O.",
  pos: "noun",
  examples: [
    { id: 1, sentence: "Fish live in water." },
    { id: 2, sentence: "People drink water everyday." },
  ],
};

export const languages = ["English", "中文", "Espanol"];
