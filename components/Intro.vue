<script setup></script>

<template>
  <div class="container">
    <p>Not just a developer, but a <span>problem solver</span></p>
    <h2>Guided by discoveries</h2>
    <h2>Boosted by research</h2>
    <h2>Who designes with purpose</h2>
    <h2>And develop for people</h2>
    <h2>To achieve tangible results</h2>
  </div>
</template>

<style scoped>
div {
  height: min-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 20px;
}

p {
  font-size: calc(1rem + 0.5vw);
  margin-bottom: 25px;
}

h2 {
  text-transform: uppercase;
  font-size: 56px;
}

@media screen and (max-width: 950px) {
  h2 {
    font-size: calc(1.5rem + 2.5vw);
  }
}
</style>
