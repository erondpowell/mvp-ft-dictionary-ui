<script setup>
import FTButton from '../components/FTButton.vue'

import '../styles/vars.css'

</script>
<template>
    <div class="top-bar">
        <div class="options-panel">
            <form>
                <label>Language</label>
                <select type="select">
                <option value="Chinese">English</option>
                <option value="Chinese">中文</option>
                <option value="Spanish">Espanol</option>
                </select>
            </form>
        </div>
        <div>
            <h2 class="dict-title">The FreeTalk Dictionary</h2>
            <div class="input-area">
                <form>
                    <input id="name" type="text" class="input-search-bar">
                    <FTButton label="Search" class="action-button"/>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

.dict-title {
  font-size: 36px;
  font-family: Brandon Grotesque;
  font-weight: 500;
  color: var(--black);
  padding: 0px 0px 20px 0px;
}

.fun {
    font-family: sensei;
}

.top-bar {
  padding: var(--padding-2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.options-panel {
    align-self: flex-end;
}

label {
    margin: 0px 10px
}

select {
    border-radius: 10px;
    font-size: 12px;
    padding: 3px 8px;
}

.input-area {
    width: 100%;
    box-sizing: border-box;
}

.input-search-bar {
    width: 250px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid var(--texture)
}

.action-button {
    background-color: var(--background);
    border-radius: 10px;
    border: 2px solid var(--texture);
    margin: 0px 0px 0px 10px;
    padding: 5px 10px;
    height: 40px;
}

.action-button:hover {
    background-color: var(--texture);
}

.action-button:active {
    background-color: var(--texture);

}

</style>