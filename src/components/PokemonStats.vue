<script setup>
import { defineProps } from 'vue'

defineProps({
  stats: {
    type: Object,
    required: true,
    default: [
      { name: 'hp', value: 0 },
      { name: 'attack', value: 0 },
      { name: 'defense', value: 0 },
      { name: 'special-attack', value: 0 },
      { name: 'special-defense', value: 0 },
      { name: 'speed', value: 0 }
    ]
  }
})

// console.log(props.stats)
</script>

<template>
  <div style="color: darkgray">
    <v-progress-linear
      :model-value="(stats[0].value / 255) * 100"
      bg-color="blue-grey"
      color="#2E7D32"
      height="25"
      ><strong>{{ stats[0].name.toUpperCase() }}</strong></v-progress-linear
    >
    <br />
    <v-progress-linear
      :model-value="(stats[1].value / 255) * 100"
      bg-color="blue-grey"
      color="#9B1C1C"
      height="25"
      ><strong>{{ stats[1].name.toUpperCase() }}</strong></v-progress-linear
    >
    <br />
    <v-progress-linear
      :model-value="(stats[2].value / 255) * 100"
      bg-color="blue-grey"
      color="#263238"
      height="25"
      ><strong>{{ stats[2].name.toUpperCase() }}</strong></v-progress-linear
    >
    <br />
    <v-progress-linear
      :model-value="(stats[3].value / 255) * 100"
      bg-color="blue-grey"
      color="#9a0eea"
      height="25"
      ><strong>{{ stats[3].name.toUpperCase().replace('-', ' ') }}</strong></v-progress-linear
    >
    <br />
    <v-progress-linear
      :model-value="(stats[4].value / 255) * 100"
      bg-color="blue-grey"
      color="#1a237e"
      height="25"
      ><strong>{{ stats[4].name.toUpperCase().replace('-', ' ') }}</strong></v-progress-linear
    >
    <br />
    <v-progress-linear
      :model-value="(stats[5].value / 255) * 100"
      bg-color="blue-grey"
      color="#A3750C"
      height="25"
      ><strong>{{ stats[5].name.toUpperCase() }}</strong></v-progress-linear
    >
  </div>
</template>

<style></style>
