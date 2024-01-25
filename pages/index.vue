<script setup>
const { locale } = useI18n();

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
