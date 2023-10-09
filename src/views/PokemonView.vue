<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { usePokemonStore } from '@/stores/PokemonStore'
import TabsPokemons from '@/components/TabsPokemons.vue'
import PokemonInfo from '@/components/PokemonInfo.vue'
// import { findPokemon } from '@/composables/useFindPokemon'
import { useRoute, useRouter } from 'vue-router'

const pokemonStore = usePokemonStore()

const route = useRoute()
const router = useRouter()

const id = ref(parseInt(route.params.id, 10))

// Utiliser un watcher pour déclencher les fonctions lorsque id change
watch(id, (newId) => {
  pokemonStore.fetchDetails(newId)
  pokemonStore.previousPokemonDetails(newId)
  pokemonStore.nextPokemonDetails(newId)
})

// Appeler les fonctions une première fois lors de la création du composant
pokemonStore.fetchDetails(id.value)
pokemonStore.previousPokemonDetails(id.value)
pokemonStore.nextPokemonDetails(id.value)

const updateId = (newId) => {
  id.value = newId
}

const handleKeydown = (e) => {
  if (e.key === 'ArrowRight') {
    if (id.value === 1010) {
      router.push('/pokemon/1')
      updateId(1)
    } else {
      router.push('/pokemon/' + (id.value + 1))
      updateId(id.value + 1)
    }
  }
  if (e.key === 'ArrowLeft') {
    if (id.value === 1) {
      router.push('/pokemon/1010')
      updateId(1010)
    } else {
      router.push('/pokemon/' + (id.value - 1))
      updateId(id.value - 1)
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
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

<style scoped></style>
