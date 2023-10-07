<script setup>
import AboutCard from '@/components/AboutCard.vue'

</script>

<template>
  <main>
    <h1>About this website</h1>
    <v-divider></v-divider>
    <p>This website is a Pokedex fully made with VueJS. Several technologies related to Vue are used.</p>
    <div class="row">
      <AboutCard
        title="Vue.js (version 3)"
        link="https://vuejs.org/"
        description="Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex."
        logo="https://kinsta.com/wp-content/uploads/2022/06/vue-logo.png"
      />
    </div>
  </main>


</template>

<style scoped>

h1 {
  text-align: center;
  color: #30A7D7;
  margin: 0;
}

</style>
