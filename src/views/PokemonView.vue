<script setup>
import { ref, watch } from 'vue'
import { usePokemonStore } from '@/stores/PokemonStore'
import TabsPokemons from '@/components/TabsPokemons.vue'
import PokemonInfo from '@/components/PokemonInfo.vue'
// import { findPokemon } from '@/composables/useFindPokemon'
import { useRoute } from "vue-router";

const pokemonStore = usePokemonStore()

const route = useRoute();

const id = ref(parseInt(route.params.id, 10));

// Utiliser un watcher pour déclencher les fonctions lorsque id change
watch(id, (newId) => {
  pokemonStore.fetchDetails(newId);
  pokemonStore.previousPokemonDetails(newId);
  pokemonStore.nextPokemonDetails(newId);
});

// Appeler les fonctions une première fois lors de la création du composant
pokemonStore.fetchDetails(id.value);
pokemonStore.previousPokemonDetails(id.value);
pokemonStore.nextPokemonDetails(id.value);

const updateId = (newId) => {
  id.value = newId;
}

</script>

<template>
  <TabsPokemons
    :previousPokemon="pokemonStore.previousPokemon"
    :nextPokemon="pokemonStore.nextPokemon"
    @update-id="updateId"
  />
  <main>
    <PokemonInfo :pokemon="pokemonStore.pokemonDetails" />
    <div class="big-blue-button">
      <router-link :to="`/`" class="link-no-deco">
        <v-btn elevated size="x-large">ALL POKEMONS</v-btn>
      </router-link>
    </div>
  </main>
</template>

<style scoped>

</style>
