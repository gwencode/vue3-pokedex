<script setup>
import HomeBanner from '@/components/HomeBanner.vue'
import PokemonCard from '@/components/PokemonCard.vue'

import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()
if (pokemonStore.pokemonList.length === 0) {
  pokemonStore.fetchPokemons(1, 12);
}
</script>

<template>
  <HomeBanner />
  <main>
    <PokemonCard
    v-for="pokemon in pokemonStore.pokemonList"
    :key="`pokemon-${pokemon.id}`"
    :pokemon="pokemon"
  />
  </main>
</template>

<style scoped>
  main {
    padding: 16px;
  }
</style>
