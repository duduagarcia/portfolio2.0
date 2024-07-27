<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';
import { storeToRefs } from '#imports';
const { $gsap } = useNuxtApp();

const globalStore = useGlobalStore();
const { changingRoute } = storeToRefs(globalStore);

onMounted(() => {
    const tl = $gsap.timeline()

    tl.from('.box' , {
        xPercent: -100,
        stagger: 0.1, 
        duration: .7,
        ease: 'power4.inOut'
    })
    tl.to('.box', {
        delay: .2,
        xPercent: 100,
        stagger: 0.1, 
        duration: .7,
        ease: 'power4.inOut',
        onComplete: () => {
            changingRoute.value = false
        }
    })
})
</script>

<template>
    <div class="w-screen h-screen max-w-full absolute top-0 z-50">
        <div class="h-[20vh] w-screen bg-brand_black_3 box" v-for="i in 5" :key="i"></div>
    </div>
</template>