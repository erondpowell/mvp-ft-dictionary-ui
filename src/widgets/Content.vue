<script setup>
import { ref } from 'vue'

import Card from '../components/Card.vue';
import ContentTopBar from './ContentTopBar.vue';

import '../styles/vars.css'
import  { Dictionary }  from '../stores/store.js';

const validationMsg = Dictionary.validationMsg;
const presentTermIsValid = Dictionary.presentTermIsValid;
const biteInfo = Dictionary.biteInfo;
const meanings = ref(0);

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
        <br>
          <div v-for="meaning in biteInfo.meanings" class="content">
            <div v-for="detail in meaning.details">
              <h4 class="inline">Part of Speech</h4>
              <br/>
              <p v-for="pos in detail.pos" class="inline">{{ pos + " " }}</p>
              <h4>Explanation</h4>
              <p>{{ detail.explanation }}</p>
              <h4>Connotation</h4>
              <p>{{ detail.connotation }}</p>
            </div>
            <h4>Examples</h4>
            <div v-for="example in meaning.examples">{{ example.sentence }}</div>
          </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>

.content-grid-container {
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
  /* height: 600px; */
  width: 100%;
}

.content {
  font-size: 20px;
  margin: 0px 0px 50px 0px;
}

.inline {
  display: inline;
}

</style>