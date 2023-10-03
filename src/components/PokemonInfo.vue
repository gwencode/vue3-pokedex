<script setup>
  import { defineProps} from "vue";
  import { capitalize } from '@/composables/useCapitalizeFonction'

  defineProps({
    pokemon : {
        type : Object,
        required : true
    }
  })
  </script>

<template>
  <div id="pokemon-name">
    <h1>
      {{ capitalize(pokemon.name) }}
      <span id="pokemon-id">N°{{ pokemon.id }}</span>
    </h1>
  </div>
  <img :src="pokemon.picture" alt="">
  <p>Height: {{ pokemon.height }}</p>
  <p>Weight: {{ pokemon.weight }}</p>
  <h3>Types</h3>
  <ul>
    <li v-for="element in pokemon.type" :key="element">
      {{ element }}
    </li>
  </ul>
  <h3>Stats</h3>
  <ul>
    <li v-for="stat in pokemon.stats" :key="stat.name">
      {{ stat.name }}: {{ stat.value }}
    </li>
  </ul>
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

#pokemon-id {
  color: #919191;
  font-weight: lighter;
}

</style>
