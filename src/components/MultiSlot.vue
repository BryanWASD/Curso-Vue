<script setup lang="ts">

</script>

<template>
    <div id="product-card">
        <header>
            <slot name="header"></slot>
        </header>
        <section>
            <slot name="section"></slot>
        </section>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style lang="css" scoped>
#product-card{
    width: 400px;
    padding: 22px;
    text-align: center;
    border: 1px solid blanchedalmond;
    background-color: cadetblue;

}
</style>