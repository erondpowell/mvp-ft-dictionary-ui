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

.dict-title {
  font-family: Brandon Grotesque, sans-serif;
  font-weight: 500;
  color: var(--black);
  padding: 0px 0px 20px 0px;
}

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

.search-bar {
    height: 40px;
    background-color: blue;
}

.search-bar-input {
    font-size: 12px;
    width: 250px;
    border-radius: 10px;
    border: 2px solid var(--texture);
}

.search-bar-action-button {
    background-color: var(--background);
    border-radius: 10px;
    border: 2px solid var(--texture);
}

.search-bar-action-button:hover {
    background-color: var(--texture);
}

.search-bar-action-button:active {
    background-color: var(--texture);
}

</style>