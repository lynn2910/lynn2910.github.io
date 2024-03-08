<script setup lang="ts">
import projectsDeclaration from "../../public/projects/declaration.json";
import ProjectsNavigation from '@/components/project/ProjectsNavigation.vue'

console.log(projectsDeclaration);
</script>

<template>
  <div id="blogger">
    <div id="blogger_navigation">
      <ProjectsNavigation :node="projectsDeclaration"></ProjectsNavigation>
    </div>
    <div id="blogger_view"></div>
    <div id="blogger_headers"></div>
  </div>
</template>

<style src="@/assets/styles/blogger.css"></style>

<style scoped>
body, #app {
  width: 100vw;
  height: 100vh;
}
</style>