<style src="@/assets/styles/home/skills.css"></style>

<template>
  <section id="skills">
    <h2>Mes compétences</h2>
    <div class="container">
      <div class="flex-container">
        <ul class="list">
          <li v-for="(skill, index) in skills"
              :key="skill.name"
              v-on:click="change_selected_skill(index)"
              :class="{ 'selected': skill.name === skill_selected.name }">
            <p>{{ skill.name }}</p>
          </li>
        </ul>
        <div class="box">
          <h3>{{ skill_selected.name }}</h3>
          <div class="boxes">
            <div v-for="s in skill_selected.skills"
                 :key="s.n"
                 class="skill">
              <SkillElement :lang="s.n" :svg="'svg' in s ? s.svg : ''"></SkillElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SkillElement from "@/components/home/skills/SkillBox.vue";

const skills = [
  {
    name: "Backend",
    skills: [
      { n: "NodeJS", svg: "skills/nodejs.svg" },
      { n: "Flask", svg: "skills/flask.svg" },
      { n: "Bun", svg: "skills/bun.svg" },
      { n: "Deno", svg: "skills/deno.svg" },
    ]
  },
  {
    name: "Frontend",
    skills: [
      { n: "VueJS", svg: "skills/vue.svg" },
      { n: "HTML5", svg: "skills/html.svg" },
      { n: "CSS3", svg: "skills/css.svg" },
      { n: "Javascript", svg: "skills/js.svg" },
      { n: "Typescript", svg: "skills/ts.svg" },
      { n: "Bootstrap", svg: "skills/bootstrap.svg" },
      { n: "TailwindCSS", svg: "skills/tailwind.svg" },
    ]
  },
  {
    name: "Développement système",
    skills: [
      { n: "Rust", svg: "skills/rust.svg" },
      { n: "C", svg: "skills/c.svg" },
      { n: "C++", svg: "skills/cpp.svg" },
      { n: "Bash", svg: "skills/bash.svg" },
    ]
  },
  {
    name: "Base de donnée",
    skills: [
      { n: "SQL", svg: "skills/sql.svg" },
      { n: "MariaDB", svg: "skills/mariadb.svg" },
      { n: "MySQL", svg: "skills/mysql.svg" },
    ]
  },
  {
    name: "Communication",
    skills: [
      { n: "Rédiger un rapport" },
      { n: "Réaliser un diaporama professionnel" },
      { n: "Rédiger un article scientifique" },
      { n: "Produire un résumé/une synthèse" }
    ]
  }
];

const skill_selected = ref(skills[2]);

function change_selected_skill(i: number){
  console.log(i);
  skill_selected.value = skills[i];
}

</script>