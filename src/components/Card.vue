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
  background-color: var(--background);
  border-radius: var(--border-3);
  padding: var(--padding-3);
  border-radius: 20px;
  border: 2px solid #e6e7e9;
}

</style>