<script setup>

import Card from '../components/Card.vue';
import ContentTopBar from './ContentTopBar.vue';
import ContentBite from './ContentBite.vue';

import '../styles/vars.css'

import  { notFound, getTerm }  from '../stores/store.js';

let {word, explanation, pos, examples } = getTerm;

</script>

<template>
  <div class="content-grid-container">
    <ContentTopBar class="row1"/>
    <ContentBite class="row2">
      <Card>
        <div class="title">
          <h2>{{ word }}</h2>
          <p>{{ pos }}</p>
        </div>
        <p>{{ explanation }}</p>
        <p v-for="ex in examples">{{ ex.sentence }}</p>
      </Card>
    </ContentBite>
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
  height: 100%;
  width: 100%;
}

.title {
  display: flex;
  align-items:center;
}

</style>