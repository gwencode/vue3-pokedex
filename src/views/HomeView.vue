<script setup>
import { ref, watch } from 'vue'
import HomeBanner from '@/components/HomeBanner.vue'
import PokemonCard from '@/components/PokemonCard.vue'

import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()
if (pokemonStore.pokemonList.length === 0) {
  pokemonStore.fetchPokemons([], 1, 12);
}

const generation = ref(pokemonStore.generation);

watch(generation, (newGeneration) => {
  console.log(newGeneration);
  pokemonStore.filterGeneration(newGeneration);
});

const sort = ref(pokemonStore.sort);

watch(sort, (newSort) => {
  console.log(newSort);
  pokemonStore.sortPokemons(newSort);
});

</script>

<template>
  <HomeBanner />
  <main>
    <section class="d-flex justify-content-between align-items-start">
      <div style="width: 25%">
      <v-combobox
        label="Select a Generation"
        :items="pokemonStore.generations"
        v-model="generation"
      ></v-combobox>
      </div>

      <div style="width: 25%" class="input-group-number">
        <input type="number" class="form-control input-number" id="pokemonNumberInput"
          min="1" max="1010"
        placeholder="Search by number">
        <button class="btn" id="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>

      <div style="width: 25%">
        <v-combobox
        label="Sort Pokemons by"
        :items="pokemonStore.sorts"
        v-model="sort"
      ></v-combobox>
    </div>
  </section>

    <h1>{{ pokemonStore.generation }}</h1>
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

h1 {
  text-align: center;
  color: #30A7D7;
}

.input-group-number {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #EEEEEE; */
}

.input-number {
	width: 75%;
}

#btn-search {
  width: 20%;
  height: 100%;
  background-color: #EEEEEE;
  border: none;
}
</style>
