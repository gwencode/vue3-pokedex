<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { capitalize } from '@/composables/useCapitalizeFonction'

defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <router-link :to="`/pokemon/${pokemon.id}`" class="link-no-deco">
    <div class="pokemon-card">
      <v-card class="mx-auto" max-width="200px">
        <v-img
          :src="pokemon.picture"
          height="200px"
          class="picture-pokemon-card-background"
          cover
        ></v-img>

        <p class="pokemon-id">N°{{ pokemon.id }}</p>

        <v-card-title>
          {{ capitalize(pokemon.name) }}
        </v-card-title>

        <div class="pokemon-types">
          <v-card-subtitle
            v-for="element in pokemon.types"
            :key="`pokemon-${element}`"
            :class="element"
            class="element"
          >
            {{ capitalize(element) }}
          </v-card-subtitle>
        </div>
      </v-card>
    </div>
  </router-link>
</template>

<style scoped>
.pokemon-card {
  padding: 8px;
}

.picture-pokemon-card-background {
  background-color: #f2f2f2;
}

.pokemon-id {
  color: #919191;
  font-size: 80%;
  padding: 2px 1rem 0;
  margin: 0;
}
</style>
