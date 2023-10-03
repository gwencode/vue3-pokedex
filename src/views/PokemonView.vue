<script setup>
import { capitalize } from '@/composables/useCapitalizeFonction'
import { usePokemonStore } from '@/stores/PokemonStore'
// import { findPokemon } from '@/composables/useFindPokemon'
import { useRoute } from "vue-router";

const pokemonStore = usePokemonStore()

const route = useRoute();
const id = parseInt(route.params.id, 10);

pokemonStore.fetchDetails(id)
pokemonStore.previousPokemonDetails(id)
pokemonStore.nextPokemonDetails(id)

// const pokemon = findPokemon(id)

</script>

<template>
  <!-- <TabsComponent :pokemon="pokemonStore.pokemonDetails" /> -->
  {{ pokemonStore.previousPokemon }}
  {{ pokemonStore.nextPokemon }}
  <section class="top-section">
    <h1>
      {{ capitalize(pokemonStore.pokemonDetails.name) }}
      <span id="pokemon-id">N°{{ pokemonStore.pokemonDetails.id }}</span>
    </h1>
  </section>
  <div class="about">
    <pre>{{ pokemonStore.pokemonDetails }}</pre>
  </div>
</template>

<style scoped>

.top-section {
  text-align: center;
  padding: 16px 0;
}

h1 {
  font-size: 32px;
  font-weight: bold;
}

#pokemon-id {
  color: #919191;
  font-weight: lighter;
}

/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */


</style>
