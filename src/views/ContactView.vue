<script lang="ts" setup>
import ContactView from '@/components/home/ContactView.vue'
</script>

<template>
  <div class="contact_container">
    <ContactView></ContactView>
  </div>
</template>

<style scoped>
.contact_container {
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>