import { ref } from "vue";

import { directus } from "../services/directus.js";

// export const languages = ["English", "中文", "Espanol"];

export const Dictionary = {
  biteInfo: ref({
    term: "",
    meanings: [
      {
        details: [
          {
            pos: "",
            explanation: "",
            connotation: "",
          },
        ],
        examples: [{ sentence: "" }],
      },
    ],
  }),

  presentTermIsValid: ref(false),
  validationMsg: ref("Please search for a word."),

  // lookup function logic
  lookup: async function (searchInput) {
    searchInput = searchInput.trim().toLowerCase();

    if (searchInput === "") {
      this.presentTermIsValid.value = false;
      this.validationMsg.value = "Please search for a word.";
      return;
    }

    let getWord = async () => {
      this.presentTermIsValid.value = false;
      this.validationMsg.value = "Looking for an explanation.... Please wait.";
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
          this.validationMsg.value = `It looks like there was a problem searching for '${searchInput}'. Please try again!`;
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        // Check if data is termInfo or an invalid msg.
        if (data.msg) {
          this.validationMsg.value = data.msg;
          // this.presentTermIsValid = false;
          // this.biteInfo = null;
        } else {
          this.biteInfo.value = data;
          this.presentTermIsValid.value = true;
        }
        console.log(JSON.stringify(this.biteInfo.value));
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };
    getWord();
  },
};
