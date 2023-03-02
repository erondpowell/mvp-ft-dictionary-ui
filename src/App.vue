<script setup>

import "./styles/vars.css";
import "./styles/fonts.css";

import Content from './widgets/Content.vue';
import { Dictionary } from "./stores/store.js";

const dictionary = Dictionary;

</script>
<template>
  <div class="container">
    <div class="sidebar-left">
    </div>
    <main class="main-content">
      <Content />
    </main>
    <div class="sidebar-right">
    </div> 
  </div>
</template>
<style scoped>

.container {
  display: grid;
  grid-template-columns: 2fr 8fr 2fr; /* sidebar-left | main-content | sidebar-right */
  grid-template-rows: 1fr; /* last row fill all extra space */
  grid-row-gap: 0px;
  grid-column-gap: 20px;
  min-height: 100vh;
}

.sidebar-left {
  grid-column: 1;
}

.main-content {
  grid-column: 2;
  margin: 0 0 30px 0;
}

.sidebar-right {
  grid-column: 3;
}

</style>