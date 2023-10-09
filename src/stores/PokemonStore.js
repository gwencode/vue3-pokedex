import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('PokemonStore', {
  // Data
  state: () => ({
    pokemonList: [],
    pokemonIndex: 1,
    pokemonDetails: {},
    nextPokemon: {},
    previousPokemon: {},
    generation: 'Generation 1 (Kanto)',
    generations: [
      'Generation 1 (Kanto)',
      'Generation 2 (Johto)',
      'Generation 3 (Hoenn)',
      'Generation 4 (Sinnoh)',
      'Generation 5 (Unys)',
      'Generation 6 (Kalos)',
      'Generation 7 (Alola)',
      'Generation 8 (Galar & Hisui)',
      'Generation 9 (Paldea)'
    ],
    sort: 'Ascending number',
    sorts: ['Ascending number', 'Descending number', 'A-Z', 'Z-A']
  }),

  // Computed
  getters: {
    shortPokemonList: (state) => {
      return state.pokemonList.slice(0, 12)
    }
  },

  // Methods
  actions: {
    async fetchPokemons(pokemonList, start_index, number) {
      // Loader Logic
      const showMoreButton = document.getElementById('show-more-button')
      const loader = document.getElementById('loader')
      if (showMoreButton && loader) {
        showMoreButton.classList.add('d-none')
        loader.classList.remove('d-none')
      }

      this.pokemonList = pokemonList
      let newList = []
      for (let i = start_index; i <= start_index + number - 1; i++) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i).then((response) =>
          response.json()
        )
        const pokemon = {
          id: response.id,
          name: response.forms[0].name,
          types: response.types.map((type) => type.type.name)
        }
        if (pokemon.id < 10) {
          pokemon.picture =
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00' + pokemon.id + '.png'
        } else if (pokemon.id < 100) {
          pokemon.picture =
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/0' + pokemon.id + '.png'
        } else {
          pokemon.picture =
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokemon.id + '.png'
        }

        newList.push(pokemon)
      }
      this.pokemonList = this.pokemonList.concat(newList)
      if (this.sort != 'Ascending number') {
        this.sortPokemons(this.sort)
      }
      this.pokemonIndex = start_index + number

      // Remove Loader
      if (showMoreButton && loader) {
        showMoreButton.classList.remove('d-none')
        loader.classList.add('d-none')
      }
    },
    async fetchDetails(id) {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id).then((response) =>
        response.json()
      )
      this.pokemonDetails.id = response.id
      this.pokemonDetails.name = response.forms[0].name
      this.pokemonDetails.height = response.height
      this.pokemonDetails.weight = response.weight
      this.pokemonDetails.type = response.types.map((type) => type.type.name)
      const stats = response.stats.map((stat) => {
        return {
          name: stat.stat.name,
          value: stat.base_stat
        }
      })
      this.pokemonDetails.stats = stats
      if (this.pokemonDetails.id < 10) {
        this.pokemonDetails.picture =
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00' +
          this.pokemonDetails.id +
          '.png'
      } else if (this.pokemonDetails.id < 100) {
        this.pokemonDetails.picture =
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/0' +
          this.pokemonDetails.id +
          '.png'
      } else {
        this.pokemonDetails.picture =
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' +
          this.pokemonDetails.id +
          '.png'
      }
    },
    async nextPokemonDetails(id) {
      const nextId = id === 1010 ? 1 : parseInt(id, 10) + 1
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + nextId).then((response) =>
        response.json()
      )
      this.nextPokemon.id = response.id
      this.nextPokemon.name = response.forms[0].name
    },
    async previousPokemonDetails(id) {
      const previousId = id === 1 ? 1010 : parseInt(id, 10) - 1
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + previousId).then(
        (response) => response.json()
      )
      this.previousPokemon.id = response.id
      this.previousPokemon.name = response.forms[0].name
    },
    filterGeneration(newGeneration) {
      switch (newGeneration) {
        case 'Generation 1 (Kanto)':
          this.generation = 'Generation 1 (Kanto)'
          this.fetchPokemons([], 1, 12)
          break
        case 'Generation 2 (Johto)':
          this.generation = 'Generation 2 (Johto)'
          this.fetchPokemons([], 152, 12)
          break
        case 'Generation 3 (Hoenn)':
          this.generation = 'Generation 3 (Hoenn)'
          this.fetchPokemons([], 252, 12)
          break
        case 'Generation 4 (Sinnoh)':
          this.generation = 'Generation 4 (Sinnoh)'
          this.fetchPokemons([], 387, 12)
          break
        case 'Generation 5 (Unys)':
          this.generation = 'Generation 5 (Unys)'
          this.fetchPokemons([], 494, 12)
          break
        case 'Generation 6 (Kalos)':
          this.generation = 'Generation 6 (Kalos)'
          this.fetchPokemons([], 650, 12)
          break
        case 'Generation 7 (Alola)':
          this.generation = 'Generation 7 (Alola)'
          this.fetchPokemons([], 722, 12)
          break
        case 'Generation 8 (Galar & Hisui)':
          this.generation = 'Generation 8 (Galar & Hisui)'
          this.fetchPokemons([], 810, 12)
          break
        case 'Generation 9 (Paldea)':
          this.generation = 'Generation 9 (Paldea)'
          this.fetchPokemons([], 906, 12)
          break
        default:
          this.generation = 'Generation 1 (Kanto)'
          this.fetchPokemons([], 1, 12)
      }
    },
    sortPokemons(newSort) {
      switch (newSort) {
        case 'A-Z':
          this.sort = 'A-Z'
          this.pokemonList = this.pokemonList.sort((a, b) => {
            return a.name.localeCompare(b.name)
          })
          break
        case 'Z-A':
          this.sort = 'Z-A'
          this.pokemonList = this.pokemonList.sort((a, b) => {
            return b.name.localeCompare(a.name)
          })
          break
        case 'Ascending number':
          this.sort = 'Ascending number'
          this.pokemonList = this.pokemonList.sort((a, b) => {
            return a.id - b.id
          })
          break
        case 'Descending number':
          this.sort = 'Descending number'
          this.pokemonList = this.pokemonList.sort((a, b) => {
            return b.id - a.id
          })
          break
        default:
          this.sort = 'Ascending number'
          this.pokemonList = this.pokemonList.sort((a, b) => {
            return a.id - b.id
          })
      }
    },
    async fetchByName(name) {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)
        // .then(response => response.json())
        .then((response) => {
          if (response.status === 404) {
            return null
          } else {
            return response.json()
          }
        })
      return response
    }
  }
})
