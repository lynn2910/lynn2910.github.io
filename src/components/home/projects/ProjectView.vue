<template>
  <section id="projects">
    <h2>Quelques projets</h2>

    <div class="projects">
      <ProjectBox v-for="(project, index) in shown_projects"
                  :name="project.name"
                  :skills="project.skills"
                  :description="project.description"
                  :links="project.links"
                  :key="index"></ProjectBox>
    </div>

    <router-link to="/projects" class="btn secondary">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentColor">
        <path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"></path>
      </svg>
      <p>Voir tout mes projets</p>
    </router-link>

  </section>
</template>

<script setup lang="ts">
import ProjectBox from "@/components/home/projects/ProjectBox.vue";
import {
  get_all_articles,
  type ProjectDeclaration,
  type ProjectProperties,
  type TreeFolder
} from '@/assets/scripts/projects'
import projectsDeclaration from "/public/projects/declaration.json";
import {type Ref, ref} from "vue";

let shown_projects: Ref<ProjectProperties[]> = ref([]);

const MAX_PROJECTS_SHOWN = 4;

console.log(projectsDeclaration)

let projects = get_all_articles(projectsDeclaration)

let registered_projects = 0;

let sorted_projects = projects.sort((p1, p2) => p2.score - p1.score);

for (let p of sorted_projects){
  console.log(registered_projects)
  if (registered_projects >= MAX_PROJECTS_SHOWN)
    break;

  // increase the counter
  registered_projects += 1;

  shown_projects.value.push(p.properties);
}
</script>