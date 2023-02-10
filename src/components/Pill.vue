<script setup>

const props = defineProps({
  pos: String
})

</script>
<template>
    <div class="pill">
        <p class="content">
            {{ pos }}
        </p>
    </div>
</template>
<style scoped>

.pill {
    border: 2px solid var(--secondary);
    border-radius: var(--border-3);
    display: flex;
    align-items: center; 
    justify-content: center;
}

.content {
    padding: 0px 3px;
    font-size: 20px;
    font-weight: 700;
}

</style>