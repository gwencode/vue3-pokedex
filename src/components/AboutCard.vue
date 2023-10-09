<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  button: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="col-12 col-md-6 p-2">
    <v-card :title="title" :text="description" variant="tonal" :prepend-avatar="logo">
      <template v-slot:prepend>
        <v-avatar size="80"></v-avatar>
      </template>
      <v-card-actions>
        <v-btn
          ><a :href="link" target="_blank">{{ button }} WEBSITE</a></v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #30a7d7;
}
</style>
