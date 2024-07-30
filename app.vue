<script setup lang="ts">
import { useGlobalStore } from './stores/globalStore';
import { storeToRefs } from '#imports';
import { useSmoothScroll } from '#imports';

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

  useSmoothScroll()
})
</script>

<template>
  <div>
    <!-- <InitialLoading v-if="initialLoader"/> -->
    <PageTransitionLoading v-if="changingRoute"/>
    <NuxtPage/>
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