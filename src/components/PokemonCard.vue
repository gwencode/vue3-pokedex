<script>
export default {
  props : {
    pokemon : {
      type : Object,
      required : true
    }
  }
}

</script>

<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="pokemon.picture"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{ pokemon.name.toUpCase() }}
    </v-card-title>

    <v-card-subtitle>
      {{ pokemon.types }}
    </v-card-subtitle>

  </v-card>
</template>

<style>

</style>
