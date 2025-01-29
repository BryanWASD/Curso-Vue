<script setup lang="ts">
import { onBeforeUpdate, onUpdated, reactive, ref } from 'vue';

const adding = ref<HTMLElement | null>(null);


onBeforeUpdate(() => {
    console.warn('Beforeunmount', adding.value?.textContent)
})

onUpdated(() => {
    console.log('Mounted', adding.value)
})

const data = reactive({
    counter: 0,
})
</script>

<template>
    <div>
        <h1 ref="adding">Count {{ data.counter }}</h1>
        <button v-on:click="data.counter=data.counter+1">Update</button>
    </div>
</template>

<style lang="css" scoped>

</style>