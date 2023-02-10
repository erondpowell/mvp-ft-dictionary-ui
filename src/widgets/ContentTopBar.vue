<script setup>
import FTButton from '../components/FTButton.vue'

import LanguageSelector from '../components/LanguageSelector.vue'
import '../styles/vars.css'

</script>

<template>
    <div class="top-bar">
        <div class="language-selector">
            <LanguageSelector />
        </div>
        <h2 class="dict-title">FreeTalk Dictionary</h2>
        <div class="search-bar">
                <form>
                    <input id="name" type="text" class="search-bar-input">
                    <FTButton label="Search" class="search-bar-action-button"/>
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
  font-family: "brandon Grotesque", sans-serif;
  font-weight: 500;
  color: var(--black);
  padding: 0px 0px 0px 0px;
}

.search-bar-input {
    width: 250px;
    height: inherit;
    border-radius: 10px;
    border: 2px solid var(--texture);
    padding: 5px;
}

.search-bar-action-button {
    border-radius: 10px;
    padding: 5px;
    background-color: var(--background);
    border: 2px solid var(--texture);
}

.search-bar-action-button:hover {
    background-color: var(--texture);
}

.search-bar-action-button:active {
    background-color: var(--texture);
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