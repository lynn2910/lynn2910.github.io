<script setup lang="ts">
import HomeBackground from '@/components/home/HomeBackground.vue';
import { iut_projects, personnal_projects } from "@/assets/scripts/projects_store"
import ProjectBox from '@/components/home/projects/ProjectBox.vue'
import { ref } from 'vue'

// const filter_in_progress: Ref<boolean> = ref(false);

let filtered_personnal_projects = ref([...personnal_projects]);
let filtered_iut_projects = ref([...iut_projects]);

// function update_filtered(){
//   console.log("Apply new filters");
//   filtered_personnal_projects.value = personnal_projects.filter(p => filter_in_progress.value ? (p.dates && !p.dates?.ended) : 1);
//   filtered_iut_projects.value = iut_projects.filter(p => filter_in_progress.value ? (p.dates && !p.dates?.ended) : 1);
// }

</script>

<template>
  <HomeBackground></HomeBackground>
  <main>
    <h1>Mes projets</h1>

<!--    <div class="filter">-->
<!--      <label for="only_wip_filter">Uniquement les projets en cours</label>-->
<!--      <input id="only_wip_filter" v-model="filter_in_progress" type="checkbox" @change="update_filtered()">-->
<!--    </div>-->

    <details class="project_list" open>
      <summary>
        <h2>Mes projets personnels</h2>
      </summary>

      <div class="project_grid">
        <ProjectBox
          v-for="p in filtered_personnal_projects"
          :key="p.properties.name"

          :name="p.properties.name"
          :links="p.properties.links"
          :description="p.properties.description"
          :skills="p.properties.skills"
          :link="p.url"
          ></ProjectBox>

        <p v-if="filtered_personnal_projects.length < 1">Aucun projets n'est en cours</p>
      </div>
    </details>

    <details class="project_list" >
      <summary>
        <h2>Mes projets universitaires</h2>
      </summary>

      <div class="project_grid">
        <ProjectBox
          v-for="p in filtered_iut_projects"
          :key="p.properties.name"

          :name="p.properties.name"
          :links="p.properties.links"
          :description="p.properties.description"
          :skills="p.properties.skills"
          :link="p.url"
          ></ProjectBox>

        <p v-if="filtered_iut_projects.length < 1">Aucun projets n'est en cours</p>
      </div>
    </details>

  </main>
</template>

<style src="@/assets/styles/home/home.css" scoped></style>
<style src="@/assets/styles/projects/projects.css" scoped></style>
