import { reactive } from "vue";

import { directus } from "../services/directus.js";

export const languages = ["English", "中文", "Espanol"];

export const Dictionary = reactive({
  biteInfo: { msg: "Please search for a word." },
  isPresentTermValid: false,
  searchHistory: [],

  lookup: async function (searchInput) {
    searchInput = searchInput.trim().toLowerCase();
    if (searchInput === "") {
      return;
    }

    // @TODO replace query param
    let getWord = await directus
      .items("dummy_data")
      .readByQuery({ search: searchInput });

    let wordDetails = getWord.data;

    console.log(wordDetails);

    if (wordDetails.length > 0) {
      this.biteInfo = wordDetails;
      this.isPresentTermValid = true;
    } else {
      this.biteInfo = {
        msg: `It looks like '${searchInput}' is not in the dictionary`,
      };
    }
  },
});
