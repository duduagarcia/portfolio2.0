<script setup></script>

<template>
  <div style="position: relative">
    <BG color="light" />
    <div class="container">
      <div class="col1">
        <div class="img_wrapper"></div>
      </div>
      <div class="col2">
        <h2>Passionate developer<br />based in Brazil</h2>
        <p>
          I'm student pushing limits and chasing excellence. I'm rarely
          satisfied with my own work, but this end up being what makes me really
          good.
        </p>
        <p>
          When i'm not building or exploring new web experiences, i'm probably
          playing games.
        </p>
        <p>
          Currently studying for a Bachelor's degree in Software Engineering at
          PUCRSV
        </p>
        <a href="#">Download Resume</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  z-index: 2;
  height: max-content;
  padding: 120px 20px;

  display: grid;
  grid-template-areas: "col1 col2";
  grid-template-columns: 1fr 1fr;
}

.col1 {
  grid-area: col1;
}

.col1 .img_wrapper {
  max-width: 500px;
  height: 600px;
  background-color: #c6c6c6;
}

.col2 {
  grid-area: col2;
  padding: 20px 20px;
}

.col2 h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.col2 p {
  font-size: 18px;
  margin-bottom: 15px;
}

@media screen and (max-width: 800px) {
  .container {
    grid-template-areas: "col1" "col2";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
  .col1 .img_wrapper {
    max-width: 100%;
    height: 100%;
  }

  .col2 {
    grid-area: col2;
    padding: 20px 10px;
  }
}

@media screen and (max-width: 500px) {
  .container {
    display: flex;
    flex-direction: column;
    padding: 150px 0;
  }

  .col1 .img_wrapper {
    width: 100%;
    height: 400px;
  }

  .col2 {
    padding: 20px;
  }
}
</style>
