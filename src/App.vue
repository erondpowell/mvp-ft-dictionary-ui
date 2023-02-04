<script setup>
import "./styles/vars.css";
import "./styles/fonts.css";
import "./styles/base.css";

import SideBarLeft from './widgets/SideBarLeft.vue';
import Content from './widgets/Content.vue';
import SideBarRight from './widgets/SideBarRight.vue';
</script>
<template>
  <div class="container">
    <div class="sidebar-left title">
      <SideBarLeft />
    </div>
    <main class="main-content content">
      <Content />
    </main>
    <aside class="sidebar-right title">
      <SideBarRight />
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

.sidebar-left {
  grid-column: 1;
}

.main-content {
  grid-column: 2;
}

.sidebar-right {
  grid-column: 3;
}

</style>