<script setup lang="ts">
import ProjectSection, { type ProjectViewHeaders } from '@/components/project/ProjectSection.vue'
import SaeToast from '@/components/projects/comp/SaeToast.vue'

let headers: ProjectViewHeaders = [];
</script>

<template>
  <ProjectSection :headers="headers" title="Eclat de Toile">
    <h1>Le projet 'Eclat de Toile':</h1>
    <SaeToast></SaeToast>

    <p>Cette SAE avait pour objectif de réaliser un site de e-commerce pour vendre des pots de peinture.</p>

    <h2 id="3d">La génération des images requises</h2>
    <div class="h2">
      <p>Afin de générer les images des pots de peintures, nous avons fait appel au logiciel de modélisation 3D blender afin de générer des images dans ce style:</p>
      <img src="/images/eclat_de_toile/ciel_etoile_bleu.png" alt="exemple de pot de peinture généré">

      <p>Et voici la configuration que nous avons utilisé dans Blender:</p>
      <img src="/images/eclat_de_toile/3d_blender.png" alt="la configuration blender">
    </div>

    <h2 id="dev">Le développement</h2>
    <div class="h2">
      <p>Les professeurs ont fourni à chaque groupe un code pré-fait, où nous devions juste modifier les requêtes SQL, en notant toutefois qu'on pouvait refaire l'interface.</p>

      <h3 id="interface">L'interface</h3>
      <div class="h3">
        <p>Si vous avez regardé nos précédents projets à l'université, vous aurez noté qu'on met un point d'honneur à développer des interfaces travaillées, d'autant que dans ce cas on nous as confirmé qu'il était possible de le faire. Nous avons alors mis les mains à la pâte et avons réalisé cette première page:</p>
        <img src="/images/eclat_de_toile/interface_dev.png" alt="une première ébauche de page">
        <p>Cependant, quand le professeur responsable de la SAE a vu ce qu'on faisais, il nous as interdit de changer l'interface en affirmant qu'on ne gagnerais rien et, je cite, "qu'il s'en fiche".<br><i>Les ébauches ont été gardées afin de (potentiellement) refaire le site en off de notre coté</i></p>
      </div>

      <h3 id="dev2">Réalisation du site web</h3>
      <div class="h3">
        <p>Lors des deux premiers livrables, nous avions pour objectif de compléter les requêtes SQL afin de lier le site à la base de donnée en ne modifiant que le code python derrière.</p>
        <p>Le dernier livrable, lui, étant séparé en 5 tâches, où chaque tâche est désignée à un étudiant. Mon sujet était les adresses et coordonnées du client. J'ai dû implémenter le système de gestion des adresses, notamment en prenant en compte les limites (nombre d'adresses, ne pas supprimer une adresse qui a déjà été utilisée dans une commande), mais j'ai également implémenté un système d'adresses favorites, le tout en respectant le cahier des charges fournis par le professeur.</p>
      </div>
    </div>

    <h2 id="reseau">La partie réseau</h2>
    <div class="h2">
      <div class="toast info">
        <p><strong>Le sujet n'est pas encore connu, nous savons seulement qu'il faudra déployer un site web sur un serveur avec apache et configurer les interfaces réseau.</strong> Cette page sera mise à jour plus tard.</p>
      </div>
    </div>

    <h2 id="result">Rétrospective</h2>
    <div class="h2">
      <p>Si cette SAE n'as pas été aussi riche que les autres car nous n'avons dû que modifier des lignes, cette expérience nous as permis développer nos capacités à intervenir sur des programmes et fichiers qui ne proviennent pas de nous.</p>
    </div>
  </ProjectSection>
</template>