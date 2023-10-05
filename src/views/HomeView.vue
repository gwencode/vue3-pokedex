<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';
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

const router = useRouter();

const searchById = () => {
  const pokemonNumberInput = document.getElementById('pokemonNumberInput');
  const pokemonNumber = pokemonNumberInput.value;
  if (pokemonNumber < 1 || pokemonNumber > 1010) {
    alert("Please enter a Pokemon number between 1 and 1010");
    return;
  }
  pokemonStore.pokemonDetails = {};
  pokemonStore.nextPokemon = {};
  pokemonStore.previousPokemon = {};
  router.push(`pokemon/${pokemonNumber}`);
}

const searchByName = async () => {
  const pokemonNameInput = document.getElementById('pokemonNameInput');
  const pokemonName = pokemonNameInput.value.toLowerCase().trim();
  if (pokemonName === "") {
    alert("Please enter a Pokemon name");
    return;
  }
  pokemonStore.pokemonDetails = {};
  pokemonStore.nextPokemon = {};
  pokemonStore.previousPokemon = {};
  const response = await pokemonStore.fetchByName(pokemonName);
  if (response === null) {
    alert("Pokemon not found");
    return;
  } else {
    router.push(`pokemon/${response.id}`);
  }
}

</script>

<template>
  <HomeBanner />
  <main>
    <section>

      <div class="d-flex justify-content-between mb-3">

        <div style="width: 33%" >
          <label for="pokemonNumberInput" class="label-input-search">Search by number</label>
          <div class="input-group-search">
            <input type="number" class="form-control input-search" id="pokemonNumberInput"
              min="1" max="1010" @keyup.enter="searchById"
            placeholder="Number between 1 & 1010">
            <button class="btn" id="btn-search" @click="searchById">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div style="width: 33%" >
          <label for="pokemonNameInput" class="label-input-search">Search by name</label>
          <div class="input-group-search">
            <input type="text" class="form-control input-search" id="pokemonNameInput"
              min="1" max="1010" @keyup.enter="searchByName"
            placeholder="...">
            <button class="btn" id="btn-search" @click="searchByName">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

      </div>

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
  margin: 0;
}

.input-group-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #EEEEEE; */
}

.label-input-search {
 padding: 0 0.375rem 2px;
 color: darkgray;
}

.input-search {
	width: 75%;
  font-size: 0.75em;
}

#btn-search {
  width: 20%;
  height: 100%;
  background-color: #EEEEEE;
  border: none;
}
</style>
