<script setup>
</script>

<template>
  <div class="banner" style="background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(src/assets/banner.jpg);">
    <div>
      <h1>I wanna be the very best <br>
        Like no one ever was <br>
        To catch them is my real test <br>
        To train them is my cause</h1>
      <p><em>Pokémon Theme (Gotta Catch ’Em All!)</em></p>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-size: cover;
  background-position: center;
  padding: 100px 1rem;
  text-align: center;
}

.banner h1 {
  margin: 0;
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  font-size: 32px;
  font-weight: bold;
}

.banner p {
  font-size: 20px;
  color: white;
  opacity: .7;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  margin: 0.5rem;
}
</style>
