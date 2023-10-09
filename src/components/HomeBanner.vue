<script setup></script>

<template>
  <div
    class="banner"
    style="
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(https://images.unsplash.com/photo-1638613067237-b1127ef06c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80);
    "
  >
    <div>
      <h2>
        "I wanna be the very best <br />
        Like no one ever was <br />
        To catch them is my real test <br />
        To train them is my cause"
      </h2>
      <p><em>Pokémon Theme (Gotta Catch ’Em All!)</em></p>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-size: cover;
  background-position: 50% 65%;
  padding: 65px 1rem;
  text-align: center;
}

.banner h2 {
  margin: 0;
  color: white;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.6);
  font-size: 24px;
  font-weight: bold;
}

.banner p {
  font-size: 16px;
  color: white;
  opacity: 0.7;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.6);
  margin: 0.5rem;
}
</style>
