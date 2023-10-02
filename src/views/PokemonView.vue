<script setup>
import { capitalize } from '@/composables/useCapitalizeFonction'
import { usePokemonStore } from '@/stores/PokemonStore'
// import { findPokemon } from '@/composables/useFindPokemon'
import { useRoute } from "vue-router";

const pokemonStore = usePokemonStore()

const route = useRoute();
const id = parseInt(route.params.id, 10);

pokemonStore.fetchDetails(id)

// const pokemon = findPokemon(id)

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
