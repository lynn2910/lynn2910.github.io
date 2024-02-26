<script setup lang="ts">
import HomeBackground from "@/components/home/HomeBackground.vue";
import HomeMain from "@/components/home/HomeMain.vue";
import HomePresentation from "@/components/home/HomePresentation.vue";
import SkillView from "@/components/home/skills/SkillView.vue";
import ProjectView from "@/components/home/projects/ProjectView.vue";
import HomeFooter from "@/components/home/HomeFooter.vue";
import ContactView from "@/components/home/ContactView.vue";
</script>

<template>
  <HomeBackground></HomeBackground>
  <main>
    <HomeMain></HomeMain>
    <HomePresentation></HomePresentation>
    <SkillView></SkillView>
    <ProjectView></ProjectView>

    <ContactView></ContactView>

    <HomeFooter></HomeFooter>
  </main>
</template>

<style src="@/assets/styles/home/home.css"></style>