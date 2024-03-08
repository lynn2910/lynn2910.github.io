<script setup lang="ts">
import type { BloggerArticle } from '@/assets/scripts/blogger'
import BloggerNavigation from '@/components/blogger/BloggerNavigation.vue'

defineProps({
  name: String,
  articles: Array<BloggerArticle>,
  subs: Array<typeof BloggerNavigation>
});

let closed = false;
</script>

<template>
  <div class="navigation" :class="closed ? 'closed' : ''">
    <div class="head">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentColor">
        <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
      </svg>
      <p>{{ name }}</p>
    </div>
    <div class="articles">
      <p v-for="(a, i) in articles" :key="i" @click="$emit('change-article', a)">
        {{ a.name }}
      </p>
    </div>
    <div class="subs"></div>
  </div>
</template>

<style scoped>

</style>