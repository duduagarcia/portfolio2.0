<script setup>
import { useGlobalStore } from "../stores/globalStore";
import { storeToRefs } from "#imports";

const globalStore = useGlobalStore();
const { initialLoader, changingRoute, canRenderPage } =
  storeToRefs(globalStore);

const { $gsap } = useNuxtApp();

onMounted(() => {



});
</script>

<template>
  <main v-if="changingRoute == false" class="w-screen max-w-full min-h-screen" >
    <HeaderVue />

    <section
      class="font-medium w-full uppercase h-[70vh] max-h-[800px] px-7 pt-32 pb-24 flex flex-col justify-between"
    >
      <div class="wrapper">
        <h1>
          <span class="text">Software engineer</span>
        </h1>
        <h1>
          <span class="text">Based in Brazil</span>
        </h1>
      </div>
    

      <p class="text-brand_dark_gray font-normal max-w-[400px]">
        Creating digital products that are meaningful and aesthetically
        pleasing.
      </p>
    </section>
    <!-- <ImageGrid /> -->
    <section class="px-7 w-screen max-w-full py-52 h-max bg-red-500">
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A problem solver guided by research, that designes with purpose and
        develops for people to achieve tangible results.
      </h2>
    </section>

    <section class="bg-green-400 h-screen w-full flex justify-center items-center relative"></section>
    <WorksSection />
    <section class="bg-green-700 h-screen w-full flex justify-center items-center ">
      <h2>Not an ordinary developer, i'm rarely satisfied with my own work, but that end's up being what set's me apart</h2>
    </section>
  </main>
</template>

<style scoped>
h1 {
  font-size: calc(2.5rem + 3vw);  
}

h2 {
  font-size: calc(1.5rem + 2vw);
  font-weight: 500;
  max-width: 1200px;
  background-color: rebeccapurple;
}



/* @media screen and (max-width: 600px){
  .card{
  
  width: calc(2rem + 30vw);


  height: calc(3rem + 30vh);
}
} */
</style>
