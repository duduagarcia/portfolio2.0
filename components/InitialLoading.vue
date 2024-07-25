<script setup lang="ts">
const { $gsap } = useNuxtApp();
console.log("helloo")

onMounted(() => {


    const tl = $gsap.timeline()

    tl.from('.box' , {
        xPercent: -100,
        stagger: 0.1, 
        duration: .7
    })
    tl.to('.box', {
        delay: .2,
        xPercent: 100,
        stagger: 0.1, 
        duration: .7
    })
})
</script>

<template>
    <div class="w-screen h-screen max-w-full absolute top-0 pointer-events-none">
        <div class="h-[20vh] w-screen bg-brand_black_3 box" v-for="i in 5" :key="i">s</div>
    </div>
</template>