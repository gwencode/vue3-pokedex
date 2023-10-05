<script setup>
import { ref, watch } from 'vue'
import HomeBanner from '@/components/HomeBanner.vue'
import PokemonCard from '@/components/PokemonCard.vue'

import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()
if (pokemonStore.pokemonList.length === 0) {
  pokemonStore.fetchPokemons([], 1, 12);
}

const generation = ref(pokemonStore.Generation);

watch(generation, (newGeneration) => {
  console.log(newGeneration);
  switch (newGeneration) {
    case "Generation 1 (Kanto)":
      pokemonStore.Generation = "Generation 1 (Kanto)";
      pokemonStore.fetchPokemons([], 1, 12);
      break;
    case "Generation 2 (Johto)":
      pokemonStore.Generation = "Generation 2 (Johto)";
      pokemonStore.fetchPokemons([], 152, 12);
      break;
    case "Generation 3 (Hoenn)":
      pokemonStore.Generation = "Generation 3 (Hoenn)";
      pokemonStore.fetchPokemons([], 252, 12);
      break;
    case "Generation 4 (Sinnoh)":
      pokemonStore.Generation = "Generation 4 (Sinnoh)";
      pokemonStore.fetchPokemons([], 387, 12);
      break;
    case "Generation 5 (Unys)":
      pokemonStore.Generation = "Generation 5 (Unys)";
      pokemonStore.fetchPokemons([], 494, 12);
      break;
    case "Generation 6 (Kalos)":
      pokemonStore.Generation = "Generation 6 (Kalos)";
      pokemonStore.fetchPokemons([], 650, 12);
      break;
    case "Generation 7 (Alola)":
      pokemonStore.Generation = "Generation 7 (Alola)";
      pokemonStore.fetchPokemons([], 722, 12);
      break;
    case "Generation 8 (Galar & Hisui)":
      pokemonStore.Generation = "Generation 8 (Galar & Hisui)";
      pokemonStore.fetchPokemons([], 810, 12);
      break;
    case "Generation 9 (Paldea)":
      pokemonStore.Generation = "Generation 9 (Paldea)";
      pokemonStore.fetchPokemons([], 906, 12);
      break;
      default:
        pokemonStore.Generation = "Generation 1 (Kanto)";
        pokemonStore.fetchPokemons([], 1, 12);
  }
});

</script>

<template>
  <HomeBanner />
  <main>
    <!-- <p>Message is: {{ generation }}</p>
    <input v-model="generation" placeholder="edit me" /> -->
    <v-combobox
      label="Select a Generation"
      :items="pokemonStore.Generations"
      v-model="generation"
    ></v-combobox>

    <h1>{{ pokemonStore.Generation }}</h1>

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
