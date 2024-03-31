<script setup lang="ts">
import ProjectSection, { type ProjectViewHeaders } from '@/components/project/ProjectSection.vue'
import SaeToast from '@/components/projects/comp/SaeToast.vue'

let headers: ProjectViewHeaders = [
  {
    name: "Le projet 'Hydrobus Belfortain'",
    id: "top",
    level: 1
  },
  {
    name: "Le sujet",
    id: "sujet",
    level: 2
  },
  {
    name: "L'interface",
    id: "interface",
    level: 2
  }
];
</script>

<template>
  <ProjectSection :headers="headers" title="HydroBus Belfortain">
    <h1 id="top">Le projet 'Hydrobus Belfortain'</h1>

    <SaeToast></SaeToast>

    <p>Cette SAE avait pour objectif de travailler sur la librairie Flask afin de concevoir un site web respectant le modèle CRUD (Create, Read, Update, Delete) avec une base de donnée.</p>

    <h2 id="sujet">Le sujet</h2>
    <div class="h2">
      <p>Le sujet du groupe était les bus à hydrogène. Dans la mise en situation, nous sommes une équipe de développeurs contactés par la commune de Belfort pour mettre en place un site internet permettant de gérer la nouvelle flotte de bus à hydrogène de la commune.</p>
      <p>Nous avons alors recueilli les besoins et préférences afin de définir le cahier des charges.</p>
      <p>Les professeurs nous ont donné des directives concernant l'utilisation de Flask et de MariaDB, cependant nous étions libre de faire l'interface de notre choix. Il étant vivement conseillé d'utiliser le framework Bootstrap, mais nous avons malgré tout décidé de créer une interface de zéro.</p>
    </div>

    <h2 id="interface">L'interface</h2>
    <div class="h2">
      <p>Nous avons alors réfléchi à comment concevoir une interface intéressante et qui se démarque des interfaces habituelles. Nous avons alors réalisé ces interfaces:<br><i>Les images suivantes sont des captures d'écran du site terminé avec la base de donnée connectée</i></p>
      <img src="/public/images/hydrobus/controles.png" alt="page des controles">
      <img src="/public/images/hydrobus/bus.png" alt="page des bus">
      <img src="/public/images/hydrobus/reservoirs.png" alt="page des reservoirs">
      <img src="/public/images/hydrobus/plein.png" alt="page des pleins">

      <p>Et pour les modifications/suppressions, nous avons fait le choix d'utiliser des "popup" avec du JavaScript:</p>
      <img src="/public/images/hydrobus/edit_exemple.png" alt="Exemple de modification">
      <img src="/public/images/hydrobus/delete_exemple.png" alt="Exemple de suppression">
    </div>
  </ProjectSection>
</template>