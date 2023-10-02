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
    <v-container style="padding: 0px !important">
      <v-row no-gutters>
        <v-col
          v-for="pokemon in pokemonStore.pokemonList"
          :key="`pokemon-${pokemon.id}`"
          cols="12"
          sm="6" md="4"
        >
          <PokemonCard :pokemon="pokemon" />
        </v-col>
      </v-row>
    </v-container>

  </main>
</template>

<style scoped>
  main {
    padding: 16px 0;
  }
</style>
