<script setup>

import { ref } from 'vue';

const languages = ["English", "中文", "Espanol"]

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
    border-radius: 10px;
    font-size: 12px;
    padding: 3px 8px;
}

</style>