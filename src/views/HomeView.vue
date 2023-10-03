<script setup>
import HomeBanner from '@/components/HomeBanner.vue'
import PokemonCard from '@/components/PokemonCard.vue'

import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()
if (pokemonStore.pokemonList.length === 0) {
  pokemonStore.fetchPokemons(12);
}
</script>

<template>
  <HomeBanner />
  <main>
    <v-container style="padding: 0px">
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
    <div id="button-load">
      <v-btn elevated size="x-large" @click="pokemonStore.fetchPokemons(18)">SHOW MORE POKEMONS</v-btn>
    </div>
  </main>
</template>

<style scoped>
  main {
    padding: 16px 0;
  }

  #button-load {
    text-align: center;
    margin: 8px 0
  }

  #button-load button {
    background-color: #30A7D7;
    color: white
  }
</style>
