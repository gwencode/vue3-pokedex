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
        if (pokemon.id < 10) {
          pokemon.picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/00" + pokemon.id + ".png"
        } else if (pokemon.id < 100) {
          pokemon.picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/0" + pokemon.id + ".png"
        } else {
          pokemon.picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokemon.id + ".png"
        }

        this.pokemonList.push(pokemon);
      }
    },
  },
})
