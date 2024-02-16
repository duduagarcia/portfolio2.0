<script setup>
const props = defineProps({
  color: {
    mode: String,
    default: "dark",
  },
});
</script>

<template>
  <div
    class="bg"
    :class="{
      'bg-dark': color === 'dark',
      'bg-light': color === 'light',
    }"
  >
    <div
      class="col"
      :class="{
        'col-dark': color === 'dark',
        'col-light': color === 'light',
      }"
      v-for="i in 4"
    ></div>
  </div>
</template>

<style scoped>
.bg {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0 50px;
  display: flex;
  background-color: red;
}

.bg-dark {
  background-color: var(--dark-bg);
}

.bg-light {
  background-color: var(--light-bg);
}

.col {
  width: 25vw;
  height: 100%;
}

.col-light:nth-child(1) {
  border-right: 1px solid var(--light-col-color);
  border-left: 1px solid var(--light-col-color);
}

.col-light:nth-child(2) {
  border-right: 1px solid var(--light-col-color);
}

.col-light:nth-child(4) {
  border-right: 1px solid var(--light-col-color);
  border-left: 1px solid var(--light-col-color);
}

.col-dark:nth-child(1) {
  border-right: 1px solid var(--dark-col-color);
  border-left: 1px solid var(--dark-col-color);
}

.col-dark:nth-child(2) {
  border-right: 1px solid var(--dark-col-color);
}

.col-dark:nth-child(4) {
  border-right: 1px solid var(--dark-col-color);
  border-left: 1px solid var(--dark-col-color);
}

@media screen and (max-width: 1000px) {
  .bg {
    padding: 0 20px;
  }
}
</style>
