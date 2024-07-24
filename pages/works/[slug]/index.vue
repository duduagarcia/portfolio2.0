<script setup lang="ts">
const route = useRoute()


console.log(route.params.slug)
</script>

<template>
    <h1>Work - {{ route.params }}</h1>
</template>

<style scoped>
</style>