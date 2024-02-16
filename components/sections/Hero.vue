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
  <div style="position: relative">
    <BG color="dark" />
    <main class="container">
      <h1>Building experiences, not just <br />static interfaces</h1>
      <div class="subtitle">
        <div class="col1">
          <p>
            Developer, Motion Designer<br />
            & Freelancer
          </p>
        </div>
        <div class="col2">
          <p>
            Helping people and companies to<br />
            stand out in the digital era.
          </p>
          <a href="#">Contact</a>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  height: max-content;
  color: #fff;
  z-index: 2;
  position: relative;
  border: 1px solid red;
  height: max-content;
  padding: 150px 20px;
}

h1 {
  font-size: calc(2.375rem + 2.5vw);
  overflow-wrap: break-word;
  word-wrap: break-word;
  font-weight: 500;
  margin-bottom: 80px;
}

main .subtitle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

main .subtitle .col1 {
  text-transform: uppercase;
}

main .subtitle .col2 a {
  margin-top: 20px;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
}
</style>
