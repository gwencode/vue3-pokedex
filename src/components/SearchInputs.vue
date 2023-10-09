<script setup>
import { useRouter } from 'vue-router'
import { usePokemonStore } from '@/stores/PokemonStore'

const router = useRouter()
const pokemonStore = usePokemonStore()

const searchById = () => {
  const pokemonNumberInput = document.getElementById('pokemonNumberInput')
  const pokemonNumber = pokemonNumberInput.value
  if (pokemonNumber < 1 || pokemonNumber > 1010) {
    alert('Please enter a Pokemon number between 1 and 1010')
    return
  }
  pokemonStore.pokemonDetails = {}
  pokemonStore.nextPokemon = {}
  pokemonStore.previousPokemon = {}
  router.push(`pokemon/${pokemonNumber}`)
}

const searchByName = async () => {
  const pokemonNameInput = document.getElementById('pokemonNameInput')
  const pokemonName = pokemonNameInput.value.toLowerCase().trim()
  if (pokemonName === '' || Number.isInteger(parseInt(pokemonName))) {
    alert('Please enter a Pokemon name')
    return
  }
  pokemonStore.pokemonDetails = {}
  pokemonStore.nextPokemon = {}
  pokemonStore.previousPokemon = {}
  const response = await pokemonStore.fetchByName(pokemonName)
  if (response === null) {
    alert('Pokemon not found')
    return
  } else {
    router.push(`pokemon/${response.id}`)
  }
}
</script>

<template>
  <div class="row justify-content-between mb-3">
    <div class="mx-auto col-10 col-sm-6 col-md-5 col-lg-4">
      <label for="pokemonNumberInput" class="label-input-search">Search by number</label>
      <div class="input-group-search">
        <input
          type="number"
          class="form-control input-search"
          id="pokemonNumberInput"
          min="1"
          max="1010"
          @keyup.enter="searchById"
          placeholder="Number between 1 & 1010"
        />
        <button class="btn" id="btn-search" @click="searchById">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>

    <div class="mx-auto col-10 col-sm-6 col-md-5 col-lg-4">
      <label for="pokemonNameInput" class="label-input-search">Search by name</label>
      <div class="input-group-search">
        <input
          type="text"
          class="form-control input-search"
          id="pokemonNameInput"
          min="1"
          max="1010"
          @keyup.enter="searchByName"
          placeholder="Ex: Pikachu"
        />
        <button class="btn" id="btn-search" @click="searchByName">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-group-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #EEEEEE; */
}

.label-input-search {
  padding: 0 0.375rem 2px;
  color: darkgray;
}

.input-search {
  width: 75%;
  font-size: 0.75em;
}

#btn-search {
  width: 20%;
  height: 100%;
  background-color: #eeeeee;
  border: none;
}
</style>
