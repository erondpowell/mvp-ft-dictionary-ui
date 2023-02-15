<script setup>

const props = defineProps({
    val: String
})

</script>
<template>
    <div class="pill">
        <p class="content">
            {{ val }}
        </p>
    </div>
</template>
<style scoped>

.pill {
    border: 2px solid var(--secondary);
    border-radius: var(--b-r-3);
    display: flex;
    align-items: center; 
    justify-content: center;
}

.content {
    padding: 2px 6px;
    font-size: 20px;
    font-weight: 700;
}

</style>