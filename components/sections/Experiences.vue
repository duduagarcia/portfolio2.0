<script setup></script>

<template>
  <div style="position: relative">
    <BG color="light" />
    <div class="container">
      <h2>Experiences</h2>
      <Accordion
        title="Plugways Digital LTDA / Full stack developer"
        start="Sep 2023"
        end="Feb 2024"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate enim aut dignissimos, ipsum nesciunt accusamus ex ipsa quae totam rerum placeat eaque quidem repellat consequatur labore harum porro tempore eligendi!"
      />
      <Accordion
        title="Freelancer at Manuteno / Front end developer"
        start="Sep 2023"
        end="Feb 2024"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate enim aut dignissimos, ipsum nesciunt accusamus ex ipsa quae totam rerum placeat eaque quidem repellat consequatur labore harum porro tempore eligendi!"
      />
      <Accordion
        title="027Capital / Front end developer"
        start="Aug 2022"
        end="Aug 2023"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate enim aut dignissimos, ipsum nesciunt accusamus ex ipsa quae totam rerum placeat eaque quidem repellat consequatur labore harum porro tempore eligendi!"
        last-one="true"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  z-index: 2;
  border: 1px solid #1a1a1a;
  padding: 150px 0;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
}

h2 {
  font-size: 36px;
  margin-bottom: 80px;
}
</style>
