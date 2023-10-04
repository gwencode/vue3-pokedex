<script setup>
  import { defineProps} from "vue";
  import { capitalize } from '@/composables/useCapitalizeFonction'

  defineProps({
    pokemon : {
        type : Object,
        required : true
    }
  })
  </script>

<template>
  <section id="pokemon-name">
    <h1>
      {{ capitalize(pokemon.name) }}
      <span id="pokemon-id">N°{{ pokemon.id }}</span>
    </h1>
  </section>
  <section id="pokemon-details" class="row">
    <div class="col-12 col-md-6">
      <img :src="pokemon.picture" alt="">
    </div>
    <div id="pokemon-info" class="col-12 col-md-6">
      <h2>Sizes</h2>
      <div style="display: flex; justify-content: space-around">
        <p><i class="fa-solid fa-ruler"></i> Height: <strong>{{ pokemon.height / 10 }} m</strong></p>
        <p><i class="fa-solid fa-weight-hanging"></i> Weight: <strong>{{ pokemon.weight / 10 }} kg</strong></p>
      </div>
      <h2>Types</h2>
      <ul>
        <li v-for="element in pokemon.type" :key="element">
          {{ element }}
        </li>
      </ul>
      <h2>Stats</h2>
      <ul>
        <li v-for="stat in pokemon.stats" :key="stat.name">
          {{ stat.name }}: {{ stat.value }}
        </li>
      </ul>
    </div>
    </section>


</template>

<style scoped>
#pokemon-name {
  text-align: center;
  padding: 16px 0;
}

h1 {
  font-size: 32px;
  font-weight: bold;
}


h2 {
  color: #30A7D7;
}

#pokemon-id {
  color: #919191;
  font-weight: lighter;
}

#pokemon-details {
  display: flex;
}

img {
  width: 100%;
}

#pokemon-info {
  text-align: center;
}

i {
  color: #30A7D7;
}

</style>
