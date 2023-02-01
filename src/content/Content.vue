<script setup>
import FTButton from '../components/FTButton.vue'

import '../styles/vars.css'
</script>

<template>
  <div class="content-grid-container">
    <div class="row1">
      <div class="top-bar">
        <h2 class="dict-title">The Freetalk Dictionary</h2>
        <form>
          <input id="name" type="text">
          <FTButton label="wow" />
        </form>
        <div class="options-panel">
          <form>
            <select type="select">
              <option value="Chinese">Chinese</option>
              <option value="Spanish">Spanish</option>
            </select>
          </form>
        </div>
      </div>
    </div>
    <div class="row2">
      <div class="card">
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-grid-container {
  display: grid;
  grid-template-rows: 1fr 8fr;
  display: grid;
  align-items: start;  /* vert align */
  justify-items: center; /* horiz align */
  height: 100%;
  width: 100%;
}

.row1 {
  grid-row: 1;
  height: 100%;
  width: 100%;
}

.dict-title {
  font-size: 36px;
}

.row2 {
  grid-row: 2;
  height: 100%;
  width: 100%;
}

.top-bar {
  padding: var(--padding-3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card {
  width: 100%;
  height: 100%;
  background-color: var(--background);
  border-radius: var(--border-3);
  padding: var(--padding-3);
  border-radius: 20px;
  border: 2px solid #e6e7e9;
}

</style>