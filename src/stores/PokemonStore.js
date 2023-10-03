import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('PokemonStore', {
  // Data
  state: () => ({
    pokemonList: [],
    pokemonIndex: 1,
    pokemonDetails: {},
    nextPokemon: {},
    previousPokemon: {},
  }),

  // Computed
  getters: {
    shortPokemonList: (state) => {
      return state.pokemonList.slice(0, 12)
    }
  },

  // Methods
  actions: {
    async fetchPokemons(number) {
      for (let i = this.pokemonIndex; i <= this.pokemonIndex + number - 1 ; i++) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i)
        .then(response => response.json())
        const pokemon = {
          id: response.id,
          name: response.forms[0].name,
          types: response.types.map(type => type.type.name),
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
      this.pokemonIndex += number;
      console.log(this.pokemonIndex)
    },
    async fetchDetails(id) {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then(response => response.json())
      // console.log(response);
      this.pokemonDetails.id = response.id;
      this.pokemonDetails.name = response.forms[0].name;
      this.pokemonDetails.height = response.height;
      this.pokemonDetails.weight = response.weight;
      this.pokemonDetails.type = response.types.map(type => type.type.name);
      const stats = response.stats.map(stat => {
        return {
          name: stat.stat.name,
          value: stat.base_stat
        }
      });
      this.pokemonDetails.stats = stats;
      if (this.pokemonDetails.id < 10) {
        this.pokemonDetails.picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/00" + this.pokemonDetails.id + ".png"
      } else if (this.pokemonDetails.id < 100) {
        this.pokemonDetails.picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/0" + this.pokemonDetails.id + ".png"
      } else {
        this.pokemonDetails.picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + this.pokemonDetails.id + ".png"
      }
      // console.log(this.pokemonDetails)
    },
    async nextPokemonDetails(id) {
      const nextId = (id === 1010) ? 1 : parseInt(id, 10) + 1;
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + nextId)
      .then(response => response.json())
      this.nextPokemon.id = response.id;
      this.nextPokemon.name = response.forms[0].name;
    },
    async previousPokemonDetails(id) {
      const previousId = (id === 1) ? 1010 : parseInt(id, 10) - 1;
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + previousId)
      .then(response => response.json())
      this.previousPokemon.id = response.id;
      this.previousPokemon.name = response.forms[0].name;
    }
  }
})
