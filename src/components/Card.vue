<script setup>

</script>
<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>

.card {
  width: 100%;
  height: 100%;
  background-color: var(--foreground);
  padding: var(--padding-3);
  border: 2px solid var(--border-color);
  border-radius: var(--b-r-3);
}

</style>