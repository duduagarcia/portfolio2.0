<script setup>
const { locale } = useI18n();

const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap();
// or, if you omitted creation of your own composable you still
// can use gsap and everything else through useNuxtApp
const { $gsap, $ScrollTrigger, $ScrollToPlugin } = useNuxtApp();
const box = ref(null);
onMounted(() => {
  gsap.to(box.value, {
    x: 300,
    opacity: 0,
    ease: "expo.out",
    duration: 2,
  });
});
</script>

<template>
  <div class="wrapper">
    <h1>Home</h1>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="pt">pt</option>
    </select>
    <p>{{ $t("test") }}</p>
    <br /><br />
    <div class="box" ref="box"></div>
  </div>
</template>

<style scoped>
.box {
  background-color: red;
  width: 50px;
  height: 50px;
}
</style>
