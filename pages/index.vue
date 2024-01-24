<script setup>
const { locale } = useI18n();

// const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap();
// // or, if you omitted creation of your own composable you still
// // can use gsap and everything else through useNuxtApp
// const { $gsap, $ScrollTrigger, $ScrollToPlugin } = useNuxtApp();
// const box = ref(null);
// onMounted(() => {
//   gsap.to(box.value, {
//     x: 300,
//     opacity: 0,
//     ease: "expo.out",
//     duration: 2,
//   });
// });

useHead({
  title: "Eduardo Garcia · Full Stack Developer",
  meta: [
    {
      name: "description",
      content: "Full stack developer creating amazing experiences",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap",
    },
  ],
});
</script>

<template>
  <div>
    <Navbar />
    <Hero />
    <Intro />
    <LazyWorks />
    <LazyAbout />
    <Experiences />
    <LazySkills />
    <Footer />
  </div>
</template>
