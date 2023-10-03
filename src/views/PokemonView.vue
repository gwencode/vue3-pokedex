<script setup>
import { usePokemonStore } from '@/stores/PokemonStore'
import TabsPokemons from '@/components/TabsPokemons.vue'
import PokemonInfo from '@/components/PokemonInfo.vue'
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
  <TabsPokemons :previousPokemon="pokemonStore.previousPokemon"
  :nextPokemon="pokemonStore.nextPokemon"
  />
  <section>
    <PokemonInfo :pokemon="pokemonStore.pokemonDetails" />
  </section>
</template>

<style scoped>

</style>
