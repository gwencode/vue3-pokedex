<script setup>
import HomeBanner from '@/components/HomeBanner.vue'
import PokemonCard from '@/components/PokemonCard.vue'

import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()
if (pokemonStore.pokemonList.length === 0) {
  pokemonStore.fetchPokemons([], 1, 12);
}
</script>

<template>
  <HomeBanner />
  <main>
    <button class="btn btn-primary" @click="pokemonStore.fetchPokemons([], 1, 12)">Generation 1 (Kanto)</button>
    <button class="btn btn-primary" @click="pokemonStore.fetchPokemons([], 152, 12)">Generation 2 (Johto)</button>
    <button class="btn btn-primary" @click="pokemonStore.fetchPokemons([], 252, 12)">Generation 3 (Hoenn)</button>
    <button class="btn btn-primary" @click="pokemonStore.fetchPokemons([], 387, 12)">Generation 4 (Sinnoh)</button>
    <button class="btn btn-primary" @click="pokemonStore.fetchPokemons([], 494, 12)">Generation 5 (Unys)</button>
    <button class="btn btn-primary" @click="pokemonStore.fetchPokemons([], 650, 12)">Generation 6 (Kalos)</button>
    <button class="btn btn-primary" @click="pokemonStore.fetchPokemons([], 722, 12)">Generation 7 (Alola)</button>
    <button class="btn btn-primary" @click="pokemonStore.fetchPokemons([], 810, 12)">Generation 8 (Galar & Hisui)</button>
    <button class="btn btn-primary" @click="pokemonStore.fetchPokemons([], 906, 12)">Generation 9 (Paldea)</button>
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
    <div class="big-blue-button">
      <v-btn elevated size="x-large" @click="pokemonStore.fetchPokemons(pokemonStore.pokemonList, pokemonStore.pokemonIndex, 18)">SHOW MORE POKEMONS</v-btn>
    </div>
  </main>
</template>

<style scoped>
  main {
    padding: 16px 0;
  }
</style>
