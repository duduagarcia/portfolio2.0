<script setup>
const { $gsap } = useNuxtApp();
const box = ref(null)
onMounted(()=>{
    $gsap.to("#box", {
        backgroundColor: "blue",
        scrollTrigger: {
          trigger: "#box",
          start: "center 50%",
          scrub: true,
          markers: true
        },
    })
})
</script>

<template>
    <h1>Index</h1>
    <div class="h-[300vh] bg-brand_black_3 flex justify-center items-center">
        <div class="w-[400px] h-[400px] bg-red-400" id="box"></div>
    </div>

</template>

<style scoped>
</style>