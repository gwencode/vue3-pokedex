<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollTopButton = ref(null)

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 400) {
    scrollTopButton.value.classList.remove('d-none')
  } else {
    scrollTopButton.value.classList.add('d-none')
  }
}

onMounted(() => {
  scrollTopButton.value = document.getElementById('scroll-to-top-button')
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollTop = () => {
  event.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <a href="" id="scroll-to-top-button" class="d-none" @click="scrollTop">
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
  color: #30a7d7;
  background-color: transparent;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  #scroll-to-top-button {
    right: 7vw;
  }
}
</style>
