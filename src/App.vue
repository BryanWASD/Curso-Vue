<script setup lang="ts">
import Hooks from './pages/hooks/Hooks.vue';
import { RouterView, RouterLink } from 'vue-router'

</script>

<template>
  <Hooks />
  <RouterLink to="/">Home</RouterLink><br>
  <RouterLink to="/login">Login</RouterLink><br>
  <RouterLink to="/signup">SignUp</RouterLink>
</template>

<style scoped>

</style>
