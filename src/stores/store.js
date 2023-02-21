import { reactive } from "vue";

import { dictionaryEntries } from "./dictionary.js";

export const languages = ["English", "中文", "Espanol"];

export const Dictionary = reactive({
  biteInfo: { msg: "Please search for a word." },
  isPresentTermValid: false,
  searchHistory: [],

  lookup: function (searchInput) {
    searchInput = searchInput.trim().toLowerCase();

    if (searchInput === "") {
      return;
    }

    this.biteInfo = null;
    this.isPresentTermValid = false;

    // check the dictionary
    for (let entry of dictionaryEntries) {
      if (entry.word === searchInput) {
        this.biteInfo = entry;
        this.isPresentTermValid = true;
        this.searchHistory.push(this.biteInfo);
        console.log("array:", this.searchHistory);
        break;
      }
    }

    if (this.isPresentTermValid === false) {
      this.biteInfo = {
        msg: `It looks like '${searchInput}' is not in the dictionary`,
      };
    }

    console.log(this.biteInfo);

    // Sanity checks
    // console.log(
    //   this.isPresentTermValid
    //     ? this.biteInfo
    //     : `${searchInput} is not a term in the dictionary`
    // );
    // console.log("term data", this.biteInfo);
    // console.log("validator", this.isPresentTermValid);
  },

  // updateHistory
  // presentTerm
});
