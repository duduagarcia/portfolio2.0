<script setup>
const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap();

const h1 = ref(null);
onMounted(() => {
  gsap.from(h1.value, {
    y: 300,
    opacity: 0,
    ease: "expo.out",
    duration: 2,
    delay: 2,
  });
});
</script>

<template>
  <main class="container">
    <h1 ref="h1">Building experiences, not just static interfaces</h1>
    <div class="subtitle">
      <p>Developer, Motion Designer<br />& Freelancer</p>
      <div>
        <p>Helping people and companies to stand out in the digital era.</p>
        <a href="#">Contact</a>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: max-content;
  min-height: 100vh;
  padding: 150px 20px;
  padding-bottom: 150px;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
}

h1 {
  font-size: calc(2.375rem + 2.5vw);
  overflow-wrap: break-word;
  word-wrap: break-word;
}

main .subtitle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

main .subtitle p {
  text-transform: uppercase;
}

main .subtitle div p {
  max-width: 280px;
  text-transform: none;
  margin-bottom: 25px;
}
</style>
