<script setup >

const props = defineProps({
  label: String,
  eventHandler: Function,
});


</script>

<template>
    <button @click.prevent="eventHandler">{{ label }}</button>
</template>

<style scoped>



</style>
