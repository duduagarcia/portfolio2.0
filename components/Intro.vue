<script setup>
import SplitType from "split-type";
const { gsap } = useGsap();

onMounted(() => {
  // const text = document.querySelectorAll(".h2");
  // text.forEach((el, index) => {
  //   const splitedText = new SplitType(el, { types: "chars,words" });
  //   splitedText.chars.forEach((char) => {
  //     // Adicione a classe 'char' a cada letra
  //     char.classList.add("char", `teste`);
  //   });
  //   gsap.from(el.querySelector("h2::before"), {
  //     width: 0.2,
  //     stagger: 0.1,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: el,
  //       start: "top 70%",
  //       end: "0% 0%",
  //       markers: true,
  //       toggleActions: "restart none none none",
  //       scrub: 2,
  //     },
  //   });
  // });
});
</script>

<template>
  <div>
    <BG color="dark" />
    <div class="container">
      <p style="color: #fff">intro</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  z-index: 2;
  height: 100vh;
  border: 1px solid blueviolet;
}

@media screen and (max-width: 950px) {
  h2 {
    font-size: calc(1.5rem + 2.5vw);
  }
}
</style>
