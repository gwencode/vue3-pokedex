<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="my-container">
    <Navbar />
    <Suspense>
      <router-view></router-view>
      <template v-slot:fallback>Loading Pokemon data...</template>
    </Suspense>
    <Footer />
  </div>
</template>

<style>
#app {
  background-color: #eeeeee;
}

.my-container {
  margin: 0 auto;
  background-color: white;
}

main {
  padding: 8px;
  min-height: 100vh;
}

@media (min-width: 576px) {
  main {
    padding: 16px;
  }
}

@media (min-width: 768px) {
  main {
    padding: 16px 32px;
  }
}

.link-no-deco {
  text-decoration: none;
}

.big-blue-button {
  text-align: center;
  padding: 16px 0;
}

.big-blue-button button {
  background-color: #30a7d7;
  color: white;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
