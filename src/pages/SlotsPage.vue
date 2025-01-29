<script setup lang="ts">
import ChildSlot from '../components/ChildSlot.vue';
</script>

<template>
    <div>
        <h1>Slots</h1>
        <ChildSlot>
            <h1>Crso de vue</h1>
            <button>Click here</button>
            <br>
            <a href="#">Telegram</a> &nbsp;
            <img src="https://static.vecteezy.com/system/resources/previews/018/910/740/original/telegram-logo-telegram-icon-free-free-vector.jpg" alt="ola" width="20px">
        </ChildSlot>
    </div>
</template>

<style lang="css" scoped>

</style>