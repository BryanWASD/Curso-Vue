<script setup lang="ts">
import { onBeforeUnmount, onUnmounted, ref } from 'vue';
const removed = ref<HTMLElement | null>(null);

onBeforeUnmount(() => {
    console.log('BeforeUnmounted', removed.value)
})

onUnmounted(() => {
    console.log('Unmounted', removed.value)
})
</script>

<template>
    <div>
        <h1 ref="removed">Life</h1>
    </div>
</template>

<style lang="css" scoped>

</style>