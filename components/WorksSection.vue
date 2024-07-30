<script setup>
  // $gsap.to(".card", {
  //     y: '-160vh',
  //     scrollTrigger: {
  //       trigger: ".special",
  //       start: "center center",
  //       end: "+=100%",
  //       pin: ".fuck",
  //       scrub: true,
  //       markers: true
  //     },
  // })
</script>

<template>
        <section class="bg-brand_white h-screen w-full flex justify-center items-center relative fuck" style="position: relative;">
      <h2 class="uppercase special">Work</h2>
      <div class="card c1"></div>
      <div class="card c2"></div>
      <div class="card c3"></div>
    </section>
</template>

<style scoped>
.special{
  font-size: calc(4rem + 15vw);  
}

.card{
  position: absolute;
  z-index: 999;
  background-color: var(--brand_dark_gray);
  width: 300px;
  max-width: 300px;


  height: 500px;
  /* top: 100vh;
  right: 40px; */
}

.c1{
  background-color: red;
}

.c2{
  background-color: greenyellow;
  right: 200px;
}

.c3{
  background-color: blue;
  left: 100px;
}
</style>