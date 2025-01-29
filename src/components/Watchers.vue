<script setup lang="ts">
import { reactive, watch } from 'vue';
import ChildSlot from './ChildSlot.vue';

const watchers = reactive({
    counter: 0,
})

watch(
  () => watchers.counter,
  (num, last) => {
    if (num > 10 && num > last) {
      alert('Max');
      watchers.counter = 0;
    }
  }
);

</script>

<template>
    <div>
        <h2>{{ watchers.counter }}</h2>
        <button v-on:click="watchers.counter = watchers.counter + 1">+</button>&nbsp;
        <button v-on:click="watchers.counter = watchers.counter - 1">-</button>
        <ChildSlot data=""/>
    </div>
</template>

<style lang="css" scoped>

</style>