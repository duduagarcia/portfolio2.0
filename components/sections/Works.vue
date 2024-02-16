<script setup>
console.log("works.vue");
</script>

<template>
  <div style="position: relative">
    <BG color="light" />
    <div class="container">
      <h2>Featured Projects</h2>
      <div class="grid-container">
        <div class="col1">
          <div class="card"></div>
          <div class="card"></div>
        </div>
        <div class="col2">
          <p>
            A selected set of projects and experiments i'm building as a
            navigate through ideias and technologies
          </p>
          <div class="card"></div>
          <div class="card"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  z-index: 2;
  height: max-content;
  border: 1px solid teal;
  padding: 150px 20px;
}

h2 {
  font-size: 96px;
  font-weight: 400;
  background-color: rebeccapurple;
  margin-bottom: 80px;
}

.grid-container {
  display: grid;
  grid-template-areas: "col1 col2";
  grid-template-columns: 1fr 1fr;
}

.grid-container .col1 {
  grid-area: col1;
  padding-left: 60px;
}

.grid-container .col2 {
  grid-area: col2;
  padding: 120px 15px;
}

.grid-container .col2 p {
  margin-bottom: 50px;
  max-width: 300px;
}

.card {
  width: 340px;
  height: 432px;
  background-color: #d1d1d1;
  margin-bottom: 90px;
}
</style>
