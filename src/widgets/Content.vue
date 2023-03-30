<script setup>

import Card from '../components/Card.vue';
import ContentTopBar from './ContentTopBar.vue';

import '../styles/vars.css'
import  { Dictionary }  from '../stores/store.js';

const dictionary = Dictionary;

</script>
<template>
  <div class="content-grid-container">
    <ContentTopBar class="row1"/>
    <div class="row2">
      <Card v-show="!dictionary.isPresentTermValid" class="content-area">
        <p>
          {{ dictionary.biteInfo.msg }}
        </p>
      </Card>
      <Card v-show="dictionary.isPresentTermValid">
        <h1>{{ dictionary.biteInfo.term }}</h1>
        <p>{{ dictionary.biteInfo.pos }}</p>
        <p>{{ dictionary.biteInfo.explanation }}</p>
        <p>{{ dictionary.biteInfo.connotation }}</p>
        <p v-for="item of dictionary.biteInfo.examples">
          {{ item }}
        </p>
      </Card> 
    </div>
  </div>
</template>

<style scoped>

.content-grid-container {
  display: grid;
  grid-template-rows: 200px auto;
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
  height: 600px;
  max-height: 100%;
  width: 100%;
}
</style>