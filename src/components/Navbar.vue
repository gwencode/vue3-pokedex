<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar-margin"></div>
  <nav class="navbar navbar-dark navbar-expand-lg navbar-lewagon fixed-top">
    <div class="navbar-links">
      <router-link :to="`/`" class="navbar-brand">Home</router-link>
      <h1>Vue 3 Pokedex</h1>
      <router-link :to="`/pokemon/5`" class="navbar-brand">About</router-link>
    </div>
  </nav>

</template>

<style scoped>
h1 {
  color: #30A7D7;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  padding: 0 8px;
}

.navbar-lewagon {
  background: #EEEEEE;
}

.navbar-links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
}

@media (min-width: 576px) {
  .navbar-links {
    padding: 0 16px;
  }
}

@media (min-width: 768px) {
  .navbar-links {
    padding: 0 32px;
  }
}

.navbar-brand {
  color: black;

  &:hover {
    color: darkgray;
  }
}

.navbar-margin {
  margin-bottom: 56px;
}
</style>
