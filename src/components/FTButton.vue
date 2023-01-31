<template>
    <button>{{ label }}</button>
</template>

<script setup >
const props = defineProps({
  label: String,
});

</script>