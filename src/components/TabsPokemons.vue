<script setup>
import { defineProps} from "vue";
import { capitalize } from '@/composables/useCapitalizeFonction'

defineProps({
  previousPokemon : {
      type : Object,
      required : true
  },
  nextPokemon : {
      type : Object,
      required : true
  }
})
</script>

<template>
  <div class="pokemon-tabs">
    <button class="button-tab previous">
      <h2>
        <i class="fa-solid fa-circle-arrow-left"></i>
        <span class="pokemon-id">N°{{ previousPokemon.id }}</span>
        {{ capitalize(previousPokemon.name) }}
      </h2>
    </button>
    <button class="button-tab next">
      <h2>
        {{ capitalize(nextPokemon.name) }}
        <span class="pokemon-id">N°{{ nextPokemon.id }}</span>
        <i class="fa-solid fa-circle-arrow-right"></i>
      </h2>
    </button>
  </div>
</template>

<style scoped>
.pokemon-tabs {
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
}

i {
  color: white;
}

.pokemon-id {
  color: white;
  padding: 0 8px;
}

.button-tab {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  width: 50%;
  margin: 0 4px;
}

.button-tab:hover {
  background-color: #30A7D7;
}

.previous {
  background-color: darkgray;
  color: rgb(224, 223, 223);
  border-radius: 50px 0 0 50px;
}

.next {
  background-color: darkgray;
  color: lightgray;
  border-radius: 0 50px 50px 0;
}

.round {
  border-radius: 50%;
}
</style>
