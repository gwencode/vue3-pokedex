<script setup>
import { defineProps} from "vue";
import { capitalize } from '@/composables/usePokemonFonction'

defineProps({
  pokemon : {
      type : Object,
      required : true
    }
})

</script>

<template>
  <div class="pokemon-card">
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        :src="pokemon.picture"
        height="200px"
        cover
      ></v-img>

      <v-card-title>
        {{ capitalize(pokemon.name) }}
      </v-card-title>

      <v-card-subtitle>
        {{ pokemon.types }}
      </v-card-subtitle>

    </v-card>
  </div>
</template>

<style scoped>
.pokemon-card {
  padding: 8px
}
</style>
