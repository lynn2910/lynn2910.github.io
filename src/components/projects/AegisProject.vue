<script setup lang="ts">
import ProjectSection, { type ProjectViewHeaders } from '@/components/project/ProjectSection.vue'
import TextLink from '@/components/projects/comp/TextLink.vue'

const headers: ProjectViewHeaders = [
  {
    name: "Projet 'Aegis'",
    id: "top_title_aegis",
    level: 1
  },
  {
    name: "L'objectif",
    id: "objectif",
    level: 2
  },
  {
    name: "Les fonctionnalités",
    id: "fonctionnalites",
    level: 2
  }
]
</script>

<template>
  <ProjectSection title="Aegis" :headers="headers">
    <h1 id="top_title_aegis">Projet 'Aegis'</h1>
    <p>Le projet 'Aegis' est un projet open-source lancé avec un ami. Nous nous sommes lancés dans ce projet après avoir découvert le jeu <span class="quote">"Conflict Of Nations"</span>. Nous avons énormément apprécié ce jeu de stratégie et le fait qu'on a pas besoin d'être tout le temps derrière notre écran, contrairement aux autres jeux similaires.<br>Le problème était en revanche qu'on trouvait le jeu mal optimisé, il y avait toujours des latences sur l'interface même avec des machines qui font normalement tourné des jeux AAA en qualité Ultra avec des processeurs très puissants, et pourtant le jeu avait des latences dans l'affichage de la carte.<br> C'est pour cette raison que nous nous sommes donnés le défi de le refaire de zéro, tout en ajoutant notre petite touche personnelle.</p>

    <h2 id="objectif">L'objectif</h2>
    <div class="h2">
      <p>La finalité du projet est un jeu de stratégie multijoueur en temps réel où les joueurs ne seront limités que par leur imagination.</p>
      <p>Bien qu'ambitieux, ce projet nous tient à coeur et nous sommes bien déterminer à atteindre sa finalité.</p>
    </div>

    <h2 id="fonctionnalites">Les fonctionnalités</h2>
    <div class="h2">
      <p>Les fonctionnalités prévues sont nombreuses, voici une liste non-exhaustive:</p>
      <ul>
        <li>Héberger des parties sur son ordinateur</li>
        <li>Pouvoir créer un "hub" avec plusieurs parties hébergé par ses soins</li>
        <li>Personnalisation des cartes, unités et de chaque partie en général</li>
        <li>Pouvoir installer des extensions et mods créer par la communauté</li>
        <li>Pouvoir construire/améliorer les bâtiments dans ses villes</li>
        <li>Controller ses unités au combat (contrôle de tir, rondes...)</li>
        <li>Avoir des relations diplomatiques (communiqués de presse, autorisation de passage d'unités, ...)</li>
        <li>Former des coalitions</li>
        <li>... et bien plus</li>
      </ul>

      <TextLink link="https://docs.google.com/document/d/1dsfTkvojfpJsAc3dTv9Z57oiGy8MNHK37MQ06_IDVA4/edit?usp=sharing"
                name="Le cahier des charges"
                description="Ce cahier des charges rédigé sur Google Docs comporte de nombreux informations sur les fonctionnalités et caractéristiques du projet"></TextLink>
    </div>

    <div class="toast success">
      <p><strong>Pour le moment, le projet est toujours en développement</strong></p>
    </div>
  </ProjectSection>
</template>

<style scoped>

</style>