<script setup>
// import Lenis from "@studio-freight/lenis";
// const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap();

// const { locale } = useI18n();

// onMounted(() => {
//   const lenis = new Lenis();

//   // lenis.on("scroll", (e) => {
//   //   console.log(e);
//   // });

//   lenis.on("scroll", ScrollTrigger.update);

//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });

//   gsap.ticker.lagSmoothing(0);
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
    <!-- <Navbar /> -->
    <SectionsHero />
    <SectionsIntro />
    <LazySectionsWorks />
    <LazySectionsAbout />
    <SectionsExperiences />
    <LazySectionsSkills />
    <SectionsFooter />
  </div>
</template>
