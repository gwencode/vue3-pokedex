<script setup>
import { ref, watch } from 'vue'
import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()

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
  <div class="d-flex justify-content-between">
    <div style="width: 33%">
      <v-combobox
        label="Select a Generation"
        :items="pokemonStore.generations"
        v-model="generation"
        ></v-combobox>
    </div>
    <div style="width: 33%">
      <v-combobox
      label="Sort Pokemons by"
      :items="pokemonStore.sorts"
      v-model="sort"
      ></v-combobox>
    </div>
  </div>
</template>

<style scoped>

</style>
