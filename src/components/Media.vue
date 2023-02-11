<script setup>

import { reactive } from 'vue'

const props = defineProps({
    image: String,
});

const size = reactive({
    height: props.height,
    width: props.width
})

</script>
<template>
    <div class="media-box">
        <img v-if="image" :src="image">
        <div v-else class="placeholder">Image unavailable</div>
    </div>
</template>
<style scoped>

.media-box {
    max-height: 100%;
    max-width: 100%;
    border: 2px solid var(--border-color);
    border-radius: var(--b-r-3);
}

.placeholder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text-muted);
    background-color: var(--foreground-muted);
}

</style>