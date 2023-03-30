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

    let getWord = async () => {
      this.biteInfo = { msg: "Loading.... Please wait." };

      try {
        const response = await fetch(
          "http://0.0.0.0:8055/flows/trigger/202296a7-eccf-4514-936c-4e4d27eafb77",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ searchInput }),
          }
        );
        if (!response.ok) {
          this.biteInfo = {
            msg: `It looks like there was a problem searching for '${searchInput}'. Please try again!`,
          };
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        this.biteInfo = data;

        if (this.biteInfo.msg) {
          this.isPresentTermValid = false;
        } else {
          this.isPresentTermValid = true;
        }
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };

    getWord();
  },
});
