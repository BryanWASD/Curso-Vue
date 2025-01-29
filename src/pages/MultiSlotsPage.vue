<script setup lang="ts">
import MultiSlot from '../components/MultiSlot.vue';
</script>

<template>
    <div>
        <MultiSlot>
        <template v-slot:header>
                <h2>Title</h2>
        </template>
        <template v-slot:section>
                <p>Product name</p>
        </template>
        <template v-slot:main>
                <p>Price</p>
        </template>
        <template v-slot:footer>
                <button>Buy now</button>
        </template>
        </MultiSlot>
        <br>
        <MultiSlot>
        <template v-slot:header>
                <h2>Title</h2>
        </template>
        <template v-slot:section>
                <p>Product name</p>
        </template>
        <template v-slot:main>
                <p>Price</p>
        </template>
        <template v-slot:footer>
                <button>Buy now</button>
        </template>
        </MultiSlot>
    </div>
</template>

<style lang="css" scoped>

</style>