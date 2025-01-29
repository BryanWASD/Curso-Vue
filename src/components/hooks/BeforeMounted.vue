<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue';

    onBeforeMount(() => {
        console.log('This is a beforeMount method',)
    })

    onMounted(() => {
        console.log('This is mounted')
    })
</script>

<template>
    <div>
        
    </div>
</template>

<style lang="css" scoped>

</style>