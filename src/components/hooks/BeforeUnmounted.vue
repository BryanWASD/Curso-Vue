<script setup lang="ts">
import { reactive } from 'vue';
import LifeciclyeChild from './LifeciclyeChild.vue';

const data = reactive({
    counter: 0,
    show: true,
})
</script>

<template>
    <div>
        <h1>Component</h1>
        <button v-on:click="data.show=!data.show">Togglebar</button>
        <LifeciclyeChild v-if="data.show" />
    </div>
</template>

<style lang="css" scoped>

</style>