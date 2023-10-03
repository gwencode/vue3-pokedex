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
        <v-icon start icon="mdi-arrow-left"></v-icon>
        <span class="pokemon-id">N°{{ previousPokemon.id }}</span>
        {{ capitalize(previousPokemon.name) }}
      </h2>
    </button>
    <button class="button-tab next">
      <h2>
        {{ capitalize(nextPokemon.name) }}
        <span class="pokemon-id">N°{{ nextPokemon.id }}</span>
        &raquo;
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

.pokemon-id {
  color: white;
}

.button-tab {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  width: 50%;
  margin: 0 4px;
}

.button-tab:hover {
  background-color: #ddd;
  color: black;
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
