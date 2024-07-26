import { defineStore } from "pinia";

export const useGlobalStore = defineStore('globalStore', () => {
    const initialLoader : boolean = true

    const fuckMe: string = "diowendfiowejdiojn"

    return {initialLoader, fuckMe}
})