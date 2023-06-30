<script setup>
import { ref } from "vue"

const count = ref(0)

function previous() {
  console.log(count.value--)
}

function next() {
  console.log(count.value++)
}

</script>
<template>
  <div class="card card-grid">
    <!-- <a class="material-symbols-outlined col1" @click="previous">arrow_back_ios</a> -->
    <div class="col2">
      <slot></slot>
    </div>
    <!-- <a class="material-symbols-outlined col3" @click="next">arrow_forward_ios</a> -->
  </div>
</template>
<style scoped>

/* 
.card-grid {
  display: grid;
  grid-template-columns: 15px auto 15px;
  display: grid;
  align-items: center;
  justify-items: center;
}

.col1 {
  grid-row: 1;
  height: 100%;
  width: 100%;
  border: 2px solid red;
}
.col2 {
  grid-row: 1;
  height: 100%;
  width: 100%;
  border: 2px solid red;
}
.col3 {
  grid-row: 1;
  height: 100%;
  width: 100%;
  border: 2px solid red;
} 
*/

.card {
  width: 100%;
  min-height: 600px;
  height: min-content;
  background-color: var(--foreground);
  padding: var(--padding-3);
  border: 2px solid var(--border-color);
  border-radius: var(--b-r-3);
}

</style>