<script setup lang="ts">
import ProjectSection, { type ProjectViewHeaders } from '@/components/project/ProjectSection.vue'
import SaeToast from '@/components/projects/comp/SaeToast.vue'

let headers: ProjectViewHeaders = [
  {
    name: "Le projet 'DosOok'",
    id: "top",
    level: 1
  },
  {
    name: "L'encodage",
    id: "encodage",
    level: 2
  },
  {
    name: "Le décodage",
    id: "decode",
    level: 2
  },
  {
    name: "Analyse des bandes générées",
    id: "analyse",
    level: 3
  }
];
</script>

<template>
  <ProjectSection :headers="headers" title="DosOok">
    <h1 id="top">Le projet 'DosOok'</h1>
    <SaeToast></SaeToast>

    <p>Cette SAE avait pour objectif de concevoir un algorithme capable d'encoder un message en audio et de pouvoir décoder des messages audio en message.</p>

    <h2 id="encodage">L'encodage</h2>
    <div class="h2">
      <p>L'encodage repose sur les bases de l'informatique et de l'audio. Chaque message est une séquence binaire, nous allons alors simplement transmettre cette séquence binaire.</p>
      <p>Evidemment, un bit ne sera pas transmis par période, nous allons jouer un bit pendant un certains temps afin d'être sûr que l'algorithme en face puisse le décoder.</p>

      <p>Voici un audio généré par notre algorithme:</p>
      <audio controls>
        <source src="/audio/dosook/DosOok_message.wav" type="audio/wav">
        Your browser does not support the audio element.
      </audio>
      <p>Nous pouvons clairement entendre les bits de 1 être jouer et du vide pour les bits à zéro</p>

      <p>La dernière étape était alors d'écrire le fichier .wav avec l'audio généré.</p>
    </div>

    <h2 id="decode">Le décodage</h2>
    <div class="h2">
      <p>Le décodage du message est un peu plus complexe, il faut réaliser les étapes suivantes:</p>
      <ul>
        <li><p>Extraire les données du fichier .wav fournis en entrée</p></li>
        <li><p>Redresser les fréquences allant de -1 à  32768 dans le positif</p></li>
        <li><p>Passer une moyenne glissante permettant de filtrer les hautes-fréquences dans l'audio</p></li>
        <li><p>Calculer la fréquence moyenne pour chaque bit (période) et donc déterminer les bits</p></li>
        <li><p>Décoder le message à partir des bits</p></li>
      </ul>

      <p>Voici un exemple d'audio:</p>
      <img src="/images/dosook/audacity.png" alt="Une capture d'écran du logiciel audacity">

      <h3 id="analyse">Analyse des bandes générées</h3>
      <div class="h3">
        <p>La première bande a été enregistrée avec un microphone, nous pouvons clairement remarquer les hautes-fréquences et pouvons noter que, tel qu'il est, cet audio n'est pas encore exploitable.</p>
        <p>Dans la seconde bande, nous avons filtré les hautes fréquences et avons également redressé les fréquences qui sont dans une période avec un bit à 1.</p>
        <p>Et finalement, la troisième bande est un exemple concret de message sorti par l'algorithme.</p>
      </div>
    </div>
  </ProjectSection>
</template>