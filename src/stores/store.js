import { ref } from "vue";

import { dictionaryEntries } from "./dictionary.js";

export const languages = ["English", "中文", "Espanol"];

export const notFound = ref("Word Not Found");

export const biteContent = ref(null);

export const Dictionary = {
  state: {
    presentTermData: null,
    isPresentTermValid: null,
    searchHistory: [],
  },

  // isFoundMsg: function (searchInput) {
  //   return `"We could not find "${searchInput}" in the dictionary. Please try your search again!"`;
  // },

  lookup: function (searchInput) {
    searchInput = searchInput.trim().toLowerCase();

    this.presentTermData = null;
    this.isPresentTermValid = false;

    // check the dictionary
    dictionaryEntries.forEach((entry) => {
      if (entry.word === searchInput) {
        this.presentTermData = entry;
        this.isPresentTermValid = true;
      }
    });

    // Sanity checks
    // console.log(
    //   this.isPresentTermValid
    //     ? this.presentTermData
    //     : `${searchInput} is not a term in the dictionary`
    // );
  },

  // updateHistory
  // presentTerm
};
