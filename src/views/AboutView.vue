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
    <p>The PokéAPI and several technologies related to Vue are used:</p>
    <div class="row">
      <AboutCard
        title="Vue.js (version 3)"
        link="https://vuejs.org/"
        description="Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex."
        logo="https://kinsta.com/wp-content/uploads/2022/06/vue-logo.png"
        button="Vue"
      />
      <AboutCard
        title="Create-Vue"
        link="https://github.com/vuejs/create-vue"
        description="The recommended way to start a Vite-powered Vue project.
          Vite is a build tool that aims to provide a faster
          and leaner development experience for modern web projects."
        logo="https://vitejs.dev/logo-with-shadow.png"
        button="Create-Vue"
      />
      <AboutCard
        title="PokéAPI"
        link="https://pokeapi.co/"
        description="The RESTful Pokémon API. All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API."
        logo="https://c1.tablecdn.com/pa/pokeapi-api.jpg"
        button="PokéAPI"
      />
      <AboutCard
        title="Vue Router"
        link="https://router.vuejs.org/"
        description="Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze."
        logo="https://scotch-res.cloudinary.com/image/upload/w_1500,q_auto:good,f_auto/media/3660/h49pHk3ORDWKylIlU7bE_maxresdefault.jpg"
        button="Vue Router"
      />
      <AboutCard
        title="Pinia"
        link="https://pinia.vuejs.org/"
        description="The intuitive store for Vue.js.
        Pinia is a store library for Vue,
        it allows you to share a state across components/pages."
        logo="https://miro.medium.com/v2/resize:fit:800/1*TOGHpRhMF0wGXhsrCga94w.png"
        button="Pinia"
      />
      <AboutCard
        title="Vuetify "
        link="https://vuetifyjs.com/en/"
        description="A Vue Component Framework.
        Vuetify is a no design skills required Open Source UI Library with beautifully handcrafted Vue Components."
        logo="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg"
        button="Vuetify"
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
