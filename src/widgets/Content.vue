<script setup>
import { ref } from 'vue'

import Card from '../components/Card.vue';
import ContentTopBar from './ContentTopBar.vue';

import '../styles/vars.css'
import  { Dictionary }  from '../stores/store.js';

const validationMsg = Dictionary.validationMsg;
const presentTermIsValid = Dictionary.presentTermIsValid;
const biteInfo = Dictionary.biteInfo;

</script>
<template>
  <div class="content-grid-container">
    <ContentTopBar class="row1"/>
    <div class="row2">
      <Card v-show="!presentTermIsValid" class="content-area">
        <p>
          {{ validationMsg }}
        </p>
      </Card>
      <Card v-show="presentTermIsValid">
        <h1>{{biteInfo.term}}</h1>
        <div v-for="meaning in biteInfo.meanings">
          <div v-for="detail in meaning.details">
            <p>{{ detail.pos[0] }}</p>
            <p>{{ detail.explanation }}</p>
            <p>{{ detail.connotation }}</p>
          </div>
          <div v-for="example in meaning.examples">{{ example.sentence }}</div>
        </div>
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