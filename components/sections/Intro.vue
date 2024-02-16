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
  <div style="position: relative">
    <BG color="dark" />
    <div class="container">
      <p>Not just a developer, but a <span>problem solver</span></p>
      <h2>
        Guided by discoveries<br />Boosted by research<br />Who designes with
        purpose<br />and develops for people<br />to achieve tangible results
      </h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  z-index: 2;
  height: max-content;
  padding: 150px 20px;
}

p {
  font-size: 24px;
  margin-bottom: 40px;
  color: #fff;
}

p span {
  color: aqua;
}

h2 {
  text-transform: uppercase;
  font-size: 56px;
  color: #fff;
}

@media screen and (max-width: 950px) {
  h2 {
    font-size: calc(1.5rem + 2.5vw);
  }
}

@media screen and (max-width: 800px) {
  .container {
    padding-left: 35px;
  }
}

@media screen and (max-width: 650px) {
  p {
    font-size: 16px;
  }

  p span {
    display: block;
  }
}
</style>
