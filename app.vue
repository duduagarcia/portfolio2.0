<script setup lang="ts">
import { useGlobalStore } from './stores/globalStore';
import { storeToRefs } from '#imports';

const globalStore = useGlobalStore();
const { initialLoader, changingRoute, canRenderPage } = storeToRefs(globalStore);

const route = useRoute()

const availableRoutes = ["about", "works", "contact"]



watch(() => route.fullPath, (newValue, oldValue) => {
  console.log("changing route", route)

  console.log("changing route", newValue, oldValue)

  if(changingRoute.value == false){
    if(availableRoutes.includes(newValue.split("/")[1])){
      changingRoute.value = true
      console.log("ATENDEU TUDO")

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
