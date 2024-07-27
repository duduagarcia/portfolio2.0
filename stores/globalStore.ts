import { defineStore } from "pinia";

export const useGlobalStore = defineStore('globalStore', () => {
    const initialLoader  = ref(false)
    const changingRoute = ref(false)
    const canRenderPage = ref(false)


    return {initialLoader, changingRoute,canRenderPage}
})