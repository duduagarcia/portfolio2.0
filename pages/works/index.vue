<script setup>
import { useGlobalStore } from '../stores/globalStore';
import { storeToRefs } from '#imports';

const globalStore = useGlobalStore();
const { initialLoader, changingRoute, canRenderPage } = storeToRefs(globalStore);

const { $gsap } = useNuxtApp();


</script>

<template>
    <main v-if="changingRoute == false" class="w-screen max-w-full min-h-screen">
        <HeaderVue />
        <section
      class=" -full   px-7 pt-32 "
    >
    <h1 class="uppercase font-medium">Selected<br>works</h1>
    <p class="w-[200px] text-brand_dark_gray">Some opportunities and projects that i'm proud of!</p>

</section>
    </main>

</template>

<style scoped>
h1 {
  font-size: calc(2.5rem + 3vw);  
}

</style>