<script setup lang="ts">
import ProjectSection, { type ProjectViewHeaders } from '@/components/project/ProjectSection.vue'
import SaeToast from '@/components/projects/comp/SaeToast.vue'

let headers: ProjectViewHeaders = [
  {
    name: "Le projet 'Galadrim Chartreuse",
    id: "top",
    level: 1
  },
  {
    name: "L'étude des besoins clients",
    id: "etude",
    level: 2
  },
  {
    name: "Le \"zoning\"",
    id: "zoning",
    level: 3
  },
  {
    name: "Le wire-framing",
    id: "wireframing",
    level: 3
  },
  {
    name: "Les \"style tiles\"",
    id: "style_tile",
    level: 3
  },
  {
    name: "Le résultat",
    id: "result",
    level: 2
  }
];
</script>

<template>
  <ProjectSection title="Galadrim Chartreuse" :headers="headers">
    <h1 id="top">Le projet 'Galadrim Chartreuse'</h1>
    <SaeToast></SaeToast>

    <p>L'objectif de cette SAE était de concevoir un site web informatif sur une entreprise française du numérique. Notre choix s'est porté sur Galadrim, entreprise de développement web.</p>

    <h2 id="etude">L'étude des besoins clients</h2>
    <div class="h2">
      <p>Nos clients - les professeurs - voulaient qu'on étudie les besoins clients en simulant qu'on soit une équipe de développeurs. Nous avons alors commencé par définir notre marque:</p>
      <img src="/public/images/galadrim_chartreuse/icones.png" alt="chartreuse_logo">

      <h3 id="zoning">Le "zoning"</h3>
      <div class="h3">
        <p>Le zoning consiste à définir l'emplacement des éléments d'une page assez grossièrement.</p>
        <p>Dans notre cas, nous avons fait le choix que toutes les pages se ressemblent, et avons proposé 3 zoning différents:</p>
        <img src="/public/images/galadrim_chartreuse/zoning1.png" alt="premier zoning">
        <img src="/public/images/galadrim_chartreuse/zoning2.png" alt="second zoning">
        <img src="/public/images/galadrim_chartreuse/zoning3.png" alt="troisième zoning">

        <p>Les professeurs ont fait le choix du troisième zoning avec un menu de navigation ("burger")</p>
      </div>

      <h3 id="wireframing">Le wire-framing</h3>
      <div class="h3">
        <p>Après avoir définir les zones de chaque page, nous devons réaliser différents wireframing, visant à définir quel contenu afficher, comment et avec quelles proportions.</p>
        <p>Nous avons alors étudier le sujet et avons proposé la configuration suivante pour la navigation:</p>
        <img src="/public/images/galadrim_chartreuse/nav_wireframe.png" alt="wireframe de la navigation">
        <p>Et nous avons également proposé les 2 wireframing suivants:</p>
        <img src="/public/images/galadrim_chartreuse/wireframe1.png" alt="premier wireframing">
        <img src="/public/images/galadrim_chartreuse/wireframe2.png" alt="second wireframing">
        <p>Les professeurs ont alors répondu qu'ils préféraient le premier wireframe, il était alors temps de définir le style des éléments de la page.</p>
      </div>

      <h3 id="style_tile">Les "style tiles"</h3>
      <div class="h3">
        <p>Les "style tile" permettent de proposer des styles différents (boutons, polices etc...).</p>
        <p>Nous avons voulu voir grand, alors nous avons soigneusement sélectionné les styles pour les rendre entièrement inter-changeables, comme vous pouvez le voir:</p>
        <img src="/public/images/galadrim_chartreuse/style_tile1.png" alt="style tile n°1">
        <img src="/public/images/galadrim_chartreuse/style_tile2.png" alt="style tile n°2">
        <img src="/public/images/galadrim_chartreuse/style_tile3.png" alt="style tile n°3">
        <img src="/public/images/galadrim_chartreuse/style_tile4.png" alt="style tile n°4">
        <img src="/public/images/galadrim_chartreuse/style_tile5.png" alt="style tile n°5">
        <img src="/public/images/galadrim_chartreuse/style_tile6.png" alt="style tile n°6">
        <p>Les professeurs ont choisi la première style tile avec la police "League Spartan"</p>
      </div>
    </div>

    <h2 id="result">Le résultat</h2>
    <div class="h2">
      <p>Au final, nous avons produit le site suivant: <a href="https://cedriccolin.github.io/galadrim_chartreuse/" target="_blank">cedriccolin.github.io/galadrim_chartreuse/</a></p>
    </div>

  </ProjectSection>
</template>