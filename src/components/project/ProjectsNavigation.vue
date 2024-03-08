<script setup lang="ts">
import type { TreeNode } from '@/assets/scripts/projects'
import type { PropType } from 'vue'

defineProps({
  node: {
    required: true,
    type: Object as PropType<TreeNode>
  },
  name: {
    required: false,
    type: String
  }
});

let closed = false;
</script>

<template>
  <div class="navigation" :class="closed ? 'closed' : ''">
    <div v-if="name" class="head">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentColor">
        <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
      </svg>
      <p>{{ name }}</p>
    </div>
    <div class="line" :class="!name ? 'root' : ''">
      <div class="articles">
        <p v-for="(a, i) in node.articles" :key="i" @click="$emit('change-article', a)">
          {{ a.properties.name }}
        </p>
      </div>
      <div class="subs">
        <ProjectsNavigation v-for="(v, k) in node.folders" :key="k" :name="k" :node="v"></ProjectsNavigation>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>