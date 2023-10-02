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
      max-width="280"
    >
      <v-img
        :src="pokemon.picture"
        height="280px"
        class="picture-pokemon-card-background"
        cover
      ></v-img>

      <p class="pokemon-id">N°{{ pokemon.id }}</p>

      <v-card-title>
        {{ capitalize(pokemon.name) }}
      </v-card-title>

      <div class="pokemon-types">
        <v-card-subtitle v-for="element in pokemon.types"
          :key="`pokemon-${element}`" :class="element" class="element">
          {{ capitalize(element) }}
        </v-card-subtitle>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.pokemon-card {
  padding: 8px
}

.picture-pokemon-card-background {
  background-color: #F2F2F2;
}

.pokemon-id {
  color: #919191;
  font-size: 80%;
  padding: 2px 1rem 0;
}

.pokemon-types {
  display: flex;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
}

.pokemon-types .element {
  line-height: 1.5rem !important;
  font-size: 1rem !important
}

.pokemon-types .fire {
  background-color: #FDDFDF;
  color: #9B1C1C;
}

.pokemon-types .grass {
  background-color: #DEFDE0;
  color: #2E7D32;
}

.pokemon-types .electric {
  background-color: #FCF7DE;
  color: #A3750C;
}

.pokemon-types .water {
  background-color: #DEF3FD;
  color: #1A73E8;
}

.pokemon-types .ground {
  background-color: #f4e7da;
  color: #bf360c;
}

.pokemon-types .rock {
  background-color: #d5d5d4;
  color: #263238;
}

.pokemon-types .fairy {
  background-color: #fceaff;
  color: #9a0eea;
}

.pokemon-types .poison {
  background-color: #B97FC9;
  color: white;
}

.pokemon-types .bug {
  background-color: #98d7a5;
  color: #1b5e20;
}

.pokemon-types .flying {
  background-color: #97b3e6;
  color: #1a237e;
}

.pokemon-types .dragon {
  background-color: #b79fef;
  color: #311b92;
}


</style>
