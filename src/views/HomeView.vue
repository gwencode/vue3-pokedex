<script setup>
import HomeBanner from '@/components/HomeBanner.vue'
import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()
if (pokemonStore.pokemonList.length === 0) {
  pokemonStore.fetchPokemons(1, 12);
}
</script>

<template>
  <HomeBanner />
  <main>
    <pre>{{ pokemonStore.pokemonList }}</pre>
  </main>
</template>
