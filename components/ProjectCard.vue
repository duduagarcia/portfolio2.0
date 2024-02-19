<script setup>
const props = defineProps({
  title: String,
  description: String,
  img: String,
  alt: String,
});
</script>

<template>
  <div class="card">
    <div class="card_container_img">
      <img :src="props.img" :alt="props.alt" />
    </div>
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<style scoped>
.card {
  /* background-color: red; */
  margin-bottom: 200px;
}

.card_container_img {
  width: 100%;
  height: 100%;
  max-width: 340px;
  height: 432px;
  background-color: #c6c6c6;
}

h3 {
  font-size: 32px;
  margin: 20px 0 10px 0;
}

p {
  max-width: 340px;
}

@media screen and (max-width: 900px) {
  .card {
    margin-bottom: 50px;
  }

  .card_container_img {
    max-width: 100%;
    height: 300px;
  }
}
</style>
