<script setup>
import AboutCard from '@/components/AboutCard.vue'

</script>

<template>
  <main>
    <h1>About this website</h1>
    <v-divider></v-divider>
    <p>This website was created by Gwendal Le Bris, a Fullstack Developer (<a href="https://troopl.com/gwendal-lebris" target="_blank">portfolio</a>):</p>
    <p class="fst-italic">I'm currently learning VueJS thanks to the <a href="https://frontendmasters.com/learn/vue/" target="_blank">FrontendMasters training course</a>.
    This website is a work in progress. It allows me to apply the concepts learned during this course.
    I've now completed the 1st module, "Vue 3 Fundamentals".</p>
    <p>Several technologies related to Vue are used:</p>
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

a {
  text-decoration: none;
  color: #30A7D7;
}
</style>
