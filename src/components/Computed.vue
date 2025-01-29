<script setup lang="ts">
import { computed, reactive } from 'vue';

const state = reactive({
  cashinhand: 200,
  balance: 200,
  discount: 300,
});

const getTotal = computed(() => {
  return (state.cashinhand * state.balance) - state.discount;
});
</script>

<template>
    <div>
        <h2>{{ getTotal }}</h2>
    </div>
</template>

<style lang="css" scoped>

</style>