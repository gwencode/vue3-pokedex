<script setup>
import { defineProps } from 'vue'
import { capitalize } from '@/composables/useCapitalizeFonction'

import PokemonStats from '@/components/PokemonStats.vue'

defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

const pokemonGeneration = (pokemon) => {
  if (pokemon.id <= 151) {
    return 'Generation 1 (Kanto)'
  } else if (pokemon.id <= 251) {
    return 'Generation 2 (Johto)'
  } else if (pokemon.id <= 386) {
    return 'Generation 3 (Hoenn)'
  } else if (pokemon.id <= 493) {
    return 'Generation 4 (Sinnoh)'
  } else if (pokemon.id <= 649) {
    return 'Generation 5 (Unova)'
  } else if (pokemon.id <= 721) {
    return 'Generation 6 (Kalos)'
  } else if (pokemon.id <= 809) {
    return 'Generation 7 (Alola)'
  } else if (pokemon.id <= 905) {
    return 'Generation 8 (Galar & Hisui)'
  } else {
    return 'Generation 9 (Paldea)'
  }
}
</script>

<template>
  <section id="pokemon-name">
    <h1>
      {{ capitalize(pokemon.name) }}
      <span id="pokemon-id">N°{{ pokemon.id }}</span>
    </h1>
    <h5>{{ pokemonGeneration(pokemon) }}</h5>
  </section>

  <section id="pokemon-details" class="row">
    <div
      class="pb-3 mx-auto col-10 col-sm-7 col-md-6 col-lg-4 order-1 order-lg-2 justify-content-center"
    >
      <img :src="pokemon.picture" alt="" />
    </div>

    <section class="pb-3 col-12 col-md-6 col-lg-4 order-3 order-md-2 order-lg-3" id="pokemon-stats">
      <h3>Stats</h3>
      <PokemonStats :stats="pokemon.stats" />
    </section>

    <div
      id="pokemon-info"
      class="pb-3 col-12 col-md-6 col-lg-4 order-2 order-md-3 order-lg-1 mx-auto"
    >
      <section id="pokemon-sizes" class="pb-2">
        <h3>Sizes</h3>
        <div
          class="d-flex justify-content-around gap-0 gam-sm-3 gap-lg-0 flex-column flex-sm-row flex-lg-column"
        >
          <p>
            <i class="fa-solid fa-ruler"></i>Height: <strong>{{ pokemon.height / 10 }} m</strong>
          </p>
          <p>
            <i class="fa-solid fa-weight-hanging"></i>Weight:
            <strong>{{ pokemon.weight / 10 }} kg</strong>
          </p>
        </div>
      </section>

      <section id="pokemon-elements">
        <h3>Types</h3>
        <div class="pokemon-types d-flex justify-content-center gap-3">
          <v-card-subtitle
            v-for="element in pokemon.type"
            :key="`pokemon-${element}`"
            :class="element"
            class="element big-element"
          >
            {{ capitalize(element) }}
          </v-card-subtitle>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
#pokemon-name {
  text-align: center;
  padding: 16px 0;
}

h1 {
  font-size: 32px;
  font-weight: bold;
}

h3 {
  color: #30a7d7;
  margin-bottom: 1rem;
}

h5 {
  color: #30a7d7;
  font-weight: lighter;
}

p {
  font-size: 20px;
}

#pokemon-id {
  color: #919191;
  font-weight: lighter;
}

#pokemon-details {
  display: flex;
}

img {
  width: 100%;
  background-color: #f2f2f2;
}

#pokemon-info,
#pokemon-stats {
  text-align: center;
}

i {
  color: #30a7d7;
  margin-right: 8px;
}

.big-element {
  height: 34px;
  font-size: 20px;
  display: flex;
  align-items: center;
}
</style>
