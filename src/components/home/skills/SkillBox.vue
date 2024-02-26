<template>
  <img v-if="svg" :src="`/svg/${svg}`" :alt="svg">
  <p>{{ lang }}</p>
</template>

<style scoped></style>

<script setup lang="ts">
const props = defineProps(['svg', 'lang']);
</script>
