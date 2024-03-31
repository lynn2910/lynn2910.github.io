<script setup lang="ts">
import { ref } from 'vue'

export type ProjectViewHeaders = Array<{ name: String, id: String, level: Number }>;

defineProps({
  /**
   * Contain the IDs and names of the headers with their level.
   * The array must be sorted by the order of the headers, no check will be performed
   */
  headers: Array<{ name: String, id: String, level: Number }>,
  title: String
})

function goToId(id: string){
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

let is_nav_open = ref(false);

function navigation_open_close(){
  is_nav_open.value = !is_nav_open.value;
}

</script>

<template>
  <div id="project_view">
    <router-link to="/projects" id="go_back">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;">
        <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
      </svg>
      <p>Retour</p>
    </router-link>
    <div id="project_content">
      <div class="head">
        <h1>{{ title }}</h1>
      </div>
      <div class="body">
        <slot />
      </div>
    </div>
    <div id="project_tree" :class="is_nav_open ? 'opened' : 'closed'">
      <div class="head">
        <h2>Navigation</h2>
        <svg @click="navigation_open_close()" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: currentColor"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
      </div>
      <div class="content">
        <p v-if="!headers || headers.length < 1">Aucun titre</p>
        <a v-for="h in headers"
           :class="`h${h.level}`"
           :href="`#${h.id}`"
           v-on:click="goToId(h.id as string)"
           :key="h.id as string">{{ h.name }}</a>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/styles/projects/project_view.css"></style>