import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()
const pokemonList = pokemonStore.pokemonList

export const findPokemon = (id) => {
  return pokemonList.filter(pokemon => pokemon.id === id)
}
