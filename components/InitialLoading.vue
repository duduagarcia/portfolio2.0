<script setup lang="ts">
const { $gsap } = useNuxtApp();
console.log("helloo")

onMounted(() => {
    const tl = $gsap.timeline()

    // tl.from('.box' , {
    //     xPercent: -100,
    //     stagger: 0.1, 
    //     duration: .7,
    //     ease: 'power4.inOut'
    // })
    // tl.to('.box', {
    //     delay: .2,
    //     xPercent: 100,
    //     stagger: 0.1, 
    //     duration: .7,
    //     ease: 'power4.inOut'
    // })

    tl.to(".box", {
        yPercent: -100,
        duration: 2,
        ease: "power4.inOut",
    });
})
</script>

<template>
    <div class="w-screen h-screen max-w-full absolute top-0 pointer-events-none bg-red-500 box">
    </div>
</template>