<script setup>
import { useGlobalStore } from '../stores/globalStore';
import { storeToRefs } from '#imports';

const globalStore = useGlobalStore();
const { initialLoader, changingRoute, canRenderPage } = storeToRefs(globalStore);

const { $gsap } = useNuxtApp();


</script>

<template>
    <div v-if="changingRoute == false" >
    <HeaderVue />

        <h1 class="text-4xl">Works</h1>
    </div>
</template>

<style scoped>
</style>