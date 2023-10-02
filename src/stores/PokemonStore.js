import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('PokemonStore', {
  // Data
  state: () => ({
    pokemonList: []
  }),

  // Computed
  getters: {
    shortPokemonList: (state) => {
      return state.pokemonList.slice(0, 12)
    }
  },

  // Methods
  actions: {
    async fetchPokemons(a, b) {
      for (let i = a; i <= b; i++) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i)
        .then(response => response.json())
        // console.log(response);
        const pokemon = {
          id: response.id,
          name: response.forms[0].name,
          // height: response.height,
          // weight: response.weight,
          picture: response.sprites.front_default,
          types: response.types.map(type => type.type.name),
          // stats: response.stats.map(stat => {
          //   return {
          //     name: stat.stat.name,
          //     value: stat.base_stat
          //   }
          // })
        }
        this.pokemonList.push(pokemon);
      }
      console.log(this.pokemonList)
    },
  },
})
