<script setup>
import { useGlobalStore } from '../stores/globalStore';
import { storeToRefs } from '#imports';

const globalStore = useGlobalStore();
const { initialLoader, changingRoute, canRenderPage } = storeToRefs(globalStore);

const { $gsap } = useNuxtApp();

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
    <main v-if="changingRoute == false">
        <h1 class="text-4xl">Index</h1>
        <div class="h-[300vh]  flex justify-center items-center">
            <div class="w-[400px] h-[400px] bg-red-400" id="box"></div>
        </div>
    </main>

</template>

<style scoped>
</style>