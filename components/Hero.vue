<script setup>
const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap();

const h1 = ref(null);
// onMounted(() => {
//   gsap.from(h1.value, {
//     y: 300,
//     opacity: 0,
//     ease: "expo.out",
//     duration: 2,
//     delay: 2,
//   });
// });
</script>

<template>
  <div>
    <BG color="dark" />
    <main class="container">
      <h1>oi</h1>
    </main>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  color: #fff;
  z-index: 2;
  position: relative;
  border: 1px solid red;
}

h1 {
  font-size: calc(2.375rem + 2.5vw);
  overflow-wrap: break-word;
  word-wrap: break-word;
  font-weight: 500;
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
