import { reactive } from "vue";

import { dictionaryEntries } from "./dictionary.js";

export const languages = ["English", "中文", "Espanol"];

// export const notFound = ref("Word Not Found");

export const Dictionary = reactive({
  presentTermData: {},
  isPresentTermValid: false,
  searchHistory: [],

  lookup: function (searchInput) {
    searchInput = searchInput.trim().toLowerCase();

    this.presentTermData = null;
    this.isPresentTermValid = false;

    // check the dictionary
    for (let entry of dictionaryEntries) {
      if (entry.word === searchInput) {
        this.presentTermData = entry;
        this.isPresentTermValid = true;
        break;
      }
    }

    if (this.isPresentTermValid === false) {
      this.presentTermData = `It looks like ${searchInput} is not in the dictionary`;
      console.log(this.presentTermData);
    }

    // Sanity checks
    // console.log(
    //   this.isPresentTermValid
    //     ? this.presentTermData
    //     : `${searchInput} is not a term in the dictionary`
    // );
    // console.log("term data", this.presentTermData);
    // console.log("validator", this.isPresentTermValid);
  },

  // updateHistory
  // presentTerm
});
