<script setup>
import "./styles/vars.css";
import "./styles/fonts.css";
import "./styles/base.css";

import Content from './widgets/Content.vue';
import Logo from './components/Logo.vue';
</script>
<template>
  <div class="container">
    <div class="sidebar-left title">
      <Logo />
    </div>
    <main class="main-content content">
      <Content />
    </main>
    <aside class="sidebar-right title">
      <ContentTopBar />
    </aside>
  </div>
</template>
<style scoped>

.container {
  display: grid;
  grid-template-columns: 2fr 8fr 2fr; /* sidebar-left | main-content | sidebar-right */
  grid-template-rows: 1fr; /* last row fill all extra space */
  grid-row-gap: 0px;
  grid-column-gap: 20px;
  height: 100vh;
  width: 100vw;
}

.navbar {
  grid-column: 1 / 4; /* spans all columns */
  padding: 10px;
  display: grid;
  align-items: center;  /* vert align */
  justify-items: start; /* horiz align */
}

.sidebar-left {
  grid-column: 1;
  /* border: 2px solid var(--border-color); */
  padding: var(--padding-3);
}

.main-content {
  grid-column: 2;
  /* border: 2px solid var(--border-color); */
  padding: var(--content-padding);
  box-shadow: 0 0 2px 1px var(--black);
  border-radius: var(--border-3);
}

.sidebar-right {
  grid-column: 3;
  padding: var(--padding-3);
}


</style>
