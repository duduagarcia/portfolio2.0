<script setup lang="ts">
import { useGlobalStore } from './stores/globalStore';
import { storeToRefs } from '#imports';

const globalStore = useGlobalStore();
const { initialLoader, changingRoute, canRenderPage } = storeToRefs(globalStore);

const route = useRoute()

const availableRoutes = ["about", "works", "contact", "index"]

watch(() => route.fullPath, (newValue, oldValue) => {

  if(changingRoute.value == false){
    if(newValue.split("/")[1]){
      if(availableRoutes.includes(newValue.split("/")[1])){
        changingRoute.value = true
      }
    }else{
      changingRoute.value = true
    }
  }
})

onMounted(() => {
  initialLoader.value = true

  console.log("helloo", initialLoader.value)
})
</script>

<template>
  <div>
    <NuxtLink to="/about" class="mx-5">about</NuxtLink>
    <NuxtLink to="/works" class="mx-5">works</NuxtLink>
    <NuxtLink to="/" class="mx-5">home</NuxtLink>
    <InitialLoading v-if="initialLoader"/>
    <PageTransitionLoading v-if="changingRoute"/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>

.page-leave-active {
  transition: all 0.4s;
}
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>