<script setup>
import { defineProps } from 'vue'
import { capitalize } from '@/composables/useCapitalizeFonction'

defineProps({
  previousPokemon: {
    type: Object,
    required: true
  },
  nextPokemon: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="pokemon-tabs">
    <router-link
      :to="`/pokemon/${previousPokemon.id}`"
      @click="$emit('update-id', previousPokemon.id)"
      class="link-no-deco"
    >
      <button class="button-tab previous">
        <h5>
          <i class="fa-solid fa-circle-arrow-left"></i>
          <span class="pokemon-id">N°{{ previousPokemon.id }}</span>
        </h5>
        <h5>
          {{ capitalize(previousPokemon.name) }}
        </h5>
      </button>
    </router-link>
    <router-link
      :to="`/pokemon/${nextPokemon.id}`"
      @click="$emit('update-id', nextPokemon.id)"
      class="link-no-deco"
    >
      <button class="button-tab next">
        <h5>
          <span class="pokemon-id">N°{{ nextPokemon.id }}</span>
          <i class="fa-solid fa-circle-arrow-right"></i>
        </h5>
        <h5>
          {{ capitalize(nextPokemon.name) }}
        </h5>
      </button>
    </router-link>
  </div>
</template>

<style scoped>
.pokemon-tabs {
  padding: 24px 8px 0;
  display: flex;
  justify-content: space-between;
}

a {
  width: 50%;
  margin: 0 4px;
}

@media (max-width: 400px) {
  .pokemon-tabs {
    padding: 32px 8px 0;
  }
  h5 {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  h2 {
    font-size: 20px;
  }
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
  width: 100%;
  height: 100%;
}

.button-tab:hover {
  background-color: #30a7d7;
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
