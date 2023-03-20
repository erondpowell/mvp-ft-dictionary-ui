<script setup>
import { ref } from 'vue';

import { Dictionary } from '../stores/store.js';
import FTButton from '../components/FTButton.vue';

const dictionary = Dictionary;
const formInput = ref('');

let getTerm = () => {
    dictionary.lookup(formInput.value);
    // console.log('GET biteInfo:', dictionary.biteInfo);
}

</script>
<template>
    <div class="top-bar">
        <h2 class="dict-title">FreeTalk Dictionary</h2>
        <form class="search-bar">
            <input id="name" type="text" class="search-bar-input" v-model="formInput">
            <FTButton label="Search" class="search-bar-action-button" :eventHandler="getTerm"/>
        </form>
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

.dict-title {
  font-family: "Brandon Grotesque", sans-serif;
  font-weight: 500;
  color: var(--black);
  margin: 40px 0px 0px 0px;
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
    margin: 0px 0px 0px 5px;
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
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .search-bar-input {
        width: 80%;
    }

    .search-bar-action-button {
            align-self: center;
    }
}

</style>