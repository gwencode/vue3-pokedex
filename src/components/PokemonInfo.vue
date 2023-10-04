<script setup>
import { defineProps} from "vue";
import { capitalize } from '@/composables/useCapitalizeFonction'

import PokemonStats from '@/components/PokemonStats.vue'

defineProps({
  pokemon : {
    type : Object,
    required : true
  }
})
</script>

<template>

  <section id="pokemon-name">
    <h1>
      {{ capitalize(pokemon.name) }}
      <span id="pokemon-id">N°{{ pokemon.id }}</span>
    </h1>
  </section>

  <section id="pokemon-details" class="row">

    <div class="col-12 col-md-6">
      <img :src="pokemon.picture" alt="">
    </div>

    <div id="pokemon-info" class="col-12 col-md-6">

      <section class="py-3" id="pokemon-sizes">
        <h2>Sizes</h2>
        <div class="d-flex justify-content-center gap-3">
          <p><i class="fa-solid fa-ruler"></i>Height: <strong>{{ pokemon.height / 10 }} m</strong></p>
          <p><i class="fa-solid fa-weight-hanging"></i>Weight: <strong>{{ pokemon.weight / 10 }} kg</strong></p>
        </div>
      </section>

      <section class="py-3" id="pokemon-elements">
        <h2>Types</h2>
        <div class="pokemon-types d-flex justify-content-center gap-3">
          <v-card-subtitle v-for="element in pokemon.type"
            :key="`pokemon-${element}`" :class="element" class="element big-element">
            {{ capitalize(element) }}
          </v-card-subtitle>
        </div>
      </section>

      <section class="py-3" id="pokemon-stats">
        <h2>Stats</h2>
        <PokemonStats :stats="pokemon.stats"/>
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


h2 {
  color: #30A7D7;
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
  background-color: #F2F2F2;
}

#pokemon-info {
  text-align: center;
}

i {
  color: #30A7D7;
  margin-right: 8px;
}

.big-element {
  height: 34px;
  font-size: 20px;
  display: flex;
  align-items: center;
}

</style>
