<script setup>
const props = defineProps(["content"])

import Card from '../components/Card.vue'

</script>
<template>
    <div class="carousel-card">
        {{ props.content }}
    </div>
</template>
<style scoped>

.carousel-card {
    background-color: aqua;
}

</style>