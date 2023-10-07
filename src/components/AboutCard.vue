<script setup>
import { defineProps} from "vue";

defineProps({
  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  logo : {
    type : String,
    required : true
  },
})

</script>

<template>
  <div class="col-6">
    <v-card
    :title="title"
    :text="description"
    variant="tonal"
    :prepend-avatar="logo"
    >
      <template v-slot:prepend>
        <v-avatar size="x-large"></v-avatar>
      </template>
    </v-card>
  </div>
</template>

<style scoped>

</style>
