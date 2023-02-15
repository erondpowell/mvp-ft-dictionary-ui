<script setup>

import Card from '../components/Card.vue';
import ContentTopBar from './ContentTopBar.vue';
import ContentBite from './ContentBite.vue';
import Pill from '../components/Pill.vue';
import Media from '../components/Media.vue';

import '../styles/vars.css'

// import  { notFound, term, biteContent }  from '../stores/store.js';

// let {word, explanation, pos, examples  } = term;

</script>

<template>
  <div class="content-grid-container">
    <ContentTopBar class="row1"/>
    <ContentBite class="row2">
      <Card>
        <p>
          Please search for a word!
        </p>
      </Card>
    <!--
      <Card v-show="!biteContent" class="content-area">
        <p>
          Please search for a word!
        </p>
      </Card>
      <Card v-show="biteContent" class="content-area">
        <div>
          <div class="title">
            <h2>{{ word }}</h2>
            <Pill :val="pos" />
          </div>
          <p>{{ explanation }}</p>
        </div>
        <div>
          <h3>Examples</h3>
          <div v-for="ex in examples" class="example-flex-container">
              <img v-if="ex.imageUrl" :src="ex.imageUrl" class="media-box">
              <div v-else class="placeholder media-box">Image Unavailable</div>
              <p>{{ ex.sentence }}</p>
          </div>
        </div>
      </Card> 
    -->
    </ContentBite>
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
  height: 100%;
  width: 100%;
}

.title {
  display: flex;
  align-items:center;
  justify-content: space-between;
}

.content-area {
  display: grid;
  grid-template-rows: 2fr 8fr;
  display: grid;
  align-items: start;  /* vert align */
}

.example-flex-container {
  display: flex;
  margin: 50px 0px;
}

.example-flex-container p {
  display: flex;
  margin: 0px 30px;
  padding: 15px;
}

.media-box {
    width: 40%;
    border: 2px solid var(--border-color);
    border-radius: var(--b-r-3);
}

.placeholder {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text-muted);
    background-color: var(--foreground-muted);
}

</style>