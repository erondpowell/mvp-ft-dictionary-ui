<script setup>
import { ref } from 'vue';

// import { term, notFound, biteContent } from '../stores/store.js'
// Refactor for new data model.

import { Dictionary } from '../stores/store.js';
import FTButton from '../components/FTButton.vue';
import LanguageSelector from '../components/LanguageSelector.vue';

const dictionary = Dictionary;
const formInput = ref('');

let getTerm = () => {
    dictionary.lookup(formInput.value);
    console.log('GET biteInfo:', dictionary.biteInfo)
}

</script>
<template>
    <div class="top-bar">
        <div class="language-selector">
            <LanguageSelector />
        </div>
        <h2 class="dict-title">FreeTalk Dictionary</h2>
        <div class="search-bar">
                <form>
                    <input id="name" type="text" class="search-bar-input" v-model="formInput">
                    <FTButton label="Search" class="search-bar-action-button" :eventHandler="getTerm"/>
                </form>
        </div>
    </div>
</template>

<style scoped>

.top-bar {
  padding: var(--padding-2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.language-selector {
    align-self: flex-end;
}

.dict-title {
  font-family: "Brandon Grotesque", sans-serif;
  font-weight: 500;
  color: var(--black);
  padding: 0px 0px 0px 0px;
}

.search-bar-input {
    width: 250px;
    height: inherit;
    border: 2px solid var(--border);
    border-radius: var(--b-r-2);
    padding: 5px;
}

.search-bar-action-button {
    padding: 5px;
    background-color: var(--background);
    border: 2px solid var(--border);
    border-radius: var(--b-r-2);
}

.search-bar-action-button:hover {
    background-color: var(--border);
}

.search-bar-action-button:active {
    background-color: var(--border);
}

@media (max-width: 620px) {
    .search-bar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .search-bar-input {
        width: 100%;
    }

.search-bar-action-button {
        width: 100%;
    }
}

</style>