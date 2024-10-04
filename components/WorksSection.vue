<script setup>
const { $gsap } = useNuxtApp();

const activeOverlay = ref(false);
onMounted(() => {

  const cards = document.querySelectorAll(".card");

  // cards.forEach((card) => {
  //   card.addEventListener("mouseover", () => {
  //     activeOverlay.value = true;
  //   });
  //   card.addEventListener("mouseout", () => {
  //     activeOverlay.value = false;
  //   });
  // });

  
  $gsap.to(".card", {
   y: "-200vh",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".h2",
      start: "center center",
      end: "+=600%",
      pin: ".container22",
      scrub: true,
      // markers: true,
    },
  });
});
</script>

<template>
  <section
    class="h-screen w-full flex justify-center items-center px-7 container22"
  >
    <div class="h2 relative bg-slate-400 w-max">
      <h2>
        Work
      </h2>
      <div class="card c1">
        <NuxtImg src="/mockup1.jpg" width="300" height="500" quality="100" format="webp" fit="cover"/>
      </div>
      <div class="card c2">
        <NuxtImg src="/mockup2.jpg" width="300" height="500" quality="100" format="webp" fit="cover"/>
      </div>
      <div class="card c3">
        <NuxtImg src="/mockup3.jpg" width="300" height="500" quality="100" format="webp" fit="cover"/>
      </div>
    </div>
  </section>
  <div class="overlay" :class="{activeOverlay: activeOverlay}"></div>
</template>

<style scoped>
h2 {
  font-size: calc(4rem + 15vw);
  text-transform: uppercase;
  position: relative;
  z-index: 100;
  pointer-events: none;
}

.card {
  position: absolute;
  width: 300px;
  max-width: 300px;
  height: 500px;
  top: 100vh;
  cursor: pointer;
}

.c1 {
  background-color: red;
  right: 0;
  z-index: 10;
}

.c2 {
  background-color: greenyellow;
  left: 50%;
  transform: translateX(-50%, -50%);
  z-index: 10;
}

.c3 {
  background-color: blue;
  z-index: 110;
}


.overlay{
  background-color: red;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 900;
  top: 0;
  opacity: .9;
  display: none
}

.activeOverlay{
  display: block;
}


@media screen and (max-width: 600px){
  h2{
    font-size: calc(4rem + 10vw);
    font-weight: 400;
  }
  
}
</style>
