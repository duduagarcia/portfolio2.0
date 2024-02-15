<script setup>
const accordionContent = ref(null);
const description = ref(null);
const open = ref(false);

function toggleAccordion() {
  console.log(accordionContent.value);
}

onMounted(() => {
  accordionContent.value.addEventListener("click", () => {
    console.log("clicked");
  });
});
</script>

<template>
  <div class="accordion-content" ref="accordionContent" :class="{ open: open }">
    <header>
      <p>Hello</p>
    </header>
    <p class="description" ref="description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
      doloribus vitae explicabo ducimus dolor eum earum placeat, quis provident
      facere sequi fugit maxime inventore, ullam, excepturi expedita eveniet!
      Exercitationem, optio.
    </p>
  </div>
</template>

<style scoped>
.accordion-content {
  background-color: #fff7f0;
  border: 1px solid #ffd6b3;
  overflow: hidden;
}

.accordion-content header {
  min-height: 100px;
  background-color: red;
}

.accordion-content .description {
  /* padding: 20px; */
  height: 0px;
  transition: all 1s ease;
}
</style>
