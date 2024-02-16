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
    <BG color="light" />
    <main class="container">
      <h1>oi</h1>
      <Accordion
        title="Plugways Digital LTDA / Full stack developer"
        start="Sep 2023"
        end="Feb 2024"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate enim aut dignissimos, ipsum nesciunt accusamus ex ipsa quae totam rerum placeat eaque quidem repellat consequatur labore harum porro tempore eligendi!"
      />
      <Accordion
        title="Freelancer at Manuteno / Front end developer"
        start="Sep 2023"
        end="Feb 2024"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate enim aut dignissimos, ipsum nesciunt accusamus ex ipsa quae totam rerum placeat eaque quidem repellat consequatur labore harum porro tempore eligendi!"
      />
      <Accordion
        title="027Capital / Front end developer"
        start="Aug 2022"
        end="Aug 2023"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate enim aut dignissimos, ipsum nesciunt accusamus ex ipsa quae totam rerum placeat eaque quidem repellat consequatur labore harum porro tempore eligendi!"
        last-one="true"
      />
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
