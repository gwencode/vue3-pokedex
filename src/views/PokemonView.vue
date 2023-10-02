<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const id = parseInt(route.params.id, 10);
</script>

<template>
  <div class="about">
    <h1>This is a Pokemon details page {{ id }} </h1>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
