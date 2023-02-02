<script setup>

import Card from '../components/Card.vue'
import ContentTopBar from './ContentTopBar.vue'

import '../styles/vars.css'

</script>

<template>
  <div class="content-grid-container">
    <div class="row1">
      <ContentTopBar class="row1"/>
    </div>
    <Card class="row2">
      Card Content
     </Card>
  </div>
</template>

<style scoped>

.content-grid-container {
  display: grid;
  grid-template-rows: 2fr 8fr;
  display: grid;
  align-items: start;  /* vert align */
  justify-items: center; /* horiz align */
}

.row1 {
  grid-row: 1;
  height: 100%;
  width: 100%;
}

.row2 {
  grid-row: 2;
  max-height: 100%;
  width: 100%;
}


</style>