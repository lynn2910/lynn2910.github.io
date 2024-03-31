<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>
  <RouterView />
</template>

<style scoped src="@/assets/styles/global.css"></style>
