<script setup>
import { ref, watch } from 'vue'
import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()

const generation = ref(pokemonStore.generation);

watch(generation, (newGeneration) => {
  pokemonStore.filterGeneration(newGeneration);
});

const sort = ref(pokemonStore.sort);

watch(sort, (newSort) => {
  pokemonStore.sortPokemons(newSort);
});

</script>

<template>
  <div class="d-flex justify-content-between">
    <div style="width: 33%">
      <v-select
        label="Select a Generation"
        :items="pokemonStore.generations"
        v-model="generation"
        variant="solo-filled"
        hide-details
        ></v-select>
    </div>
    <div style="width: 33%">
      <v-select
      label="Sort Pokemons by"
      :items="pokemonStore.sorts"
      v-model="sort"
      variant="solo-filled"
      hide-details
      ></v-select>
    </div>
  </div>
</template>

<style scoped>

</style>
