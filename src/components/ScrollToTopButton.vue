<script setup>

</script>

<template>
  <a href="" id="scroll-to-top-button">
    <i class="fa-solid fa-circle-arrow-up"></i>
  </a>
</template>

<style scoped>

#scroll-to-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  text-decoration: none;
  color: #30A7D7;
  background-color: transparent;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  #scroll-to-top-button {
    right: 7vw;
  }
}

</style>
