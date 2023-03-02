<script setup>

// DO NOT USE THIS COMPONENT
// @TODO PLEASE SEE TICKET FRE-95

import { ref } from 'vue';

import { languages } from '../stores/store.js';

</script>
<template>
    <div>
        <form>
                <label>Language</label>
                <select type="select">
                <option v-for="language in languages" :value="language" >{{language}}</option>
                </select>
            </form>
    </div>
</template>
<style scoped>

label {
    margin: 0px 10px;
    font-size: 16px;
}

select {
    border: 2px solid var(--border-color);
    border-radius: var(--b-r-3);
    font-size: 12px;
    padding: 3px 8px;
}

</style>