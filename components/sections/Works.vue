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
          <ProjectCard
            title="Nubank"
            description="A website redesign of one the largest Brazilian fintechs."
          />
          <ProjectCard
            title="Erick Avila"
            description="One of the best designers i know."
          />
        </div>
        <div class="col2">
          <p>
            A selected set of projects and experiments i'm building as a
            navigate through ideias and technologies
          </p>
          <ProjectCard
            title="Component lib"
            description="My own component library based on top of the best Javascript Framework."
          />
          <ProjectCard
            title="Spiderman"
            description="A cool motion based website for the Friendly Neighborhood Spidey,"
          />
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
  padding: 150px 20px 0 20px;
}

h2 {
  font-size: 72px;
  font-weight: 400;
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

@media screen and (max-width: 900px) {
  h2 {
    margin-bottom: 20px;
    font-size: 42px;
  }

  .grid-container {
    display: grid;
    grid-template-areas:
      "col2"
      "col1";
    grid-template-columns: 1fr;
  }

  .grid-container .col1 {
    padding-left: 0;
  }

  .grid-container .col2 {
    padding: 0;
  }

  .grid-container .col2 p {
    max-width: 100%;
  }
}

@media screen and (max-width: 800px) {
  h2 {
    margin-bottom: 20px;
    margin-left: 10px;
  }
  .grid-container .col2 p {
    margin-left: 10px;
  }
}
</style>
