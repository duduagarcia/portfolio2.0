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
      <p class="subtitle_mobile">
        Developer, Motion Designer<br />
        & Freelancer
      </p>
      <h1>Building experiences, not just static interfaces</h1>
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
  height: max-content;
  padding: 150px 20px;
}

h1 {
  font-size: calc(2.375rem + 2.5vw);
  overflow-wrap: break-word;
  word-wrap: break-word;
  font-weight: 500;
  margin-bottom: 80px;
  max-width: 1100px;
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

.subtitle_mobile {
  display: none;
}

@media screen and (max-width: 800px) {
  .container {
    padding-left: 35px;
  }

  main .subtitle .col1 {
    display: none;
  }

  .subtitle_mobile {
    display: block;
    margin-bottom: 20px;
  }
}
</style>
