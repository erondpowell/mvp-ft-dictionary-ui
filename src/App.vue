<script setup>
import "./styles/vars.css";
import "./styles/fonts.css";
import "./styles/base.css";

import Content from './content/Content.vue';
</script>

<template>
  <div class="container">
    <nav class="navbar gutter title">
      <slot>
        <h1>FreeTalk<span class="fun">.fun</span></h1>
      </slot>
    </nav>
    <div class="sidebar-left title"></div>
    <main class="main-content content">
      <Content />
    </main>
    <aside class="sidebar-right title">
    </aside>
  </div>
</template>

<style scoped>

.container {
  display: grid;
  grid-template-columns: 1fr 8fr 3fr; /* sidebar-left | main-content | sidebar-right */
  grid-template-rows: 60px 1fr; /* last row fill all extra space */
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
  padding: var(--padding-2);
  background-color: var(--background-black);
}

.main-content {
  grid-column: 2;
  /* border: 2px solid var(--border-color); */
  padding: var(--content-padding);
  background-color: var(--background);
  box-shadow: 0 0 2px 1px var(--black);
  border-radius: var(--border-3);
}

.sidebar-right {
  grid-column: 3;
  /* border: 2px solid var(--border-color); */
  padding: var(--padding-2);
  background-color: var(--background-black);
}

.fun {
  font-family: "sensei";
  font-weight: 400;
  font-size: 16pt;
  color: var(--black);
}

h1 {
  font-family: "norwester", sans-serif;
  font-weight: 500;
  /* font-style: normal; */
  color: var(--black);
}


</style>
