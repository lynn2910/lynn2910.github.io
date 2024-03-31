<script setup lang="ts">
import ProjectSection, { type ProjectViewHeaders } from '@/components/project/ProjectSection.vue'
import SaeToast from '@/components/projects/comp/SaeToast.vue'

let headers: ProjectViewHeaders = [];
</script>

<template>
  <ProjectSection :headers="headers" title="Trifle - Kamisado">
    <SaeToast></SaeToast>
    <br><br>
    <div class="toast success">
      <p><strong>Cette SAE n'est pas encore commencée. Cette page sera mise à jour quand la SAE sera bien avancée.</strong></p>
    </div>
  </ProjectSection>
</template>