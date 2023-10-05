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
  pokemonStore.filterGeneration(newGeneration);
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
      style="width: 25%"
    ></v-combobox>

    <h1>{{ pokemonStore.Generation }}</h1>
    <v-divider></v-divider>

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

h1 {
  text-align: center;
  color: #30A7D7;
}
</style>
