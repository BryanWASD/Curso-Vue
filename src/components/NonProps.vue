<script setup lang="ts">
defineProps({
    info: String,
})
</script>

<template>
    <div>
    <h1>Non props</h1>
    <h2>{{ info }}</h2>
    <div>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p v-bind="$attrs">Lorem ipsum dolor sit amet</p>
    </div>
    </div>
</template>

<style lang="css" scoped>

</style>