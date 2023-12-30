<script setup>
const { locale } = useI18n();
</script>

<template>
  <div class="wrapper">
    <h1>Home</h1>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="pt">pt</option>
    </select>
    <p>{{ $t("test") }}</p>
  </div>
</template>
