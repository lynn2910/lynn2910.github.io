<script setup lang="ts">
import ProjectSection, { type ProjectViewHeaders } from '@/components/project/ProjectSection.vue'

const headers: ProjectViewHeaders = [
  {
    name: "Le projet 'Calco'",
    id: "top",
    level: 1,
  },
  {
    name: "Comment lire une expression mathématique?",
    id: "parsing",
    level: 2
  },
  {
    name: "La 'tokenisation'",
    id: "tokenization",
    level: 2
  },
  {
    name: "Optimiser l'expression",
    id: "optimize",
    level: 3
  },
  {
    name: "L'arbre de syntaxe abstrait (AST)",
    id: "ast",
    level: 2
  }
];
</script>

<template>
  <ProjectSection :headers="headers" title="Calco">
    <h1 id="top">Le projet 'Calco'</h1>

    <p>Ce projet est une mini-expérimentation du développement d'un langage destiné aux expressions mathématiques.</p>

    <h2 id="parsing">Comment lire une expression mathématique?</h2>
    <div class="h2">
      <p>Une expression mathématique peut être aussi simple que:</p>
      <pre class="full">1 + 1 * 5 - (9 * 9 + 1)</pre>
      <p>Dans ce cas, nous pouvons dire que le calcul serait alors:</p>
      <pre class="full">1 + ( 1 * 5 ) - ((9 * 9) + 1)</pre>
      <p>Prenons le temps de décortiquer les calculs effectués:</p>
      <ul>
        <li>
          <p><strong><code>1 + (1 * 5)</code>:</strong></p>
          <p>D'après les lois des mathématiques, l'opération <code>1 * 5</code> est prioritaire, avec ou sans les parenthèses. Et on calcule ensuite: <code>1 + [result]</code></p>
          <p>Le résultat final est alors: <code>6</code></p>
        </li>
        <li>
          <p><strong><code>6 - ((9 * 9) + 1)</code></strong></p>
          <p>Cette fois l'expression est plus costaud, mais la logique est la même.</p>
          <p>Nous allons d'abord calculer <code>9 * 9</code>, puis <code>[result] + 1</code></p>
          <p>Au final, nous avons <code>6 - 82 = -76</code></p>
        </li>
      </ul>
      <p>Vous aurez peut être remarqué le caractère récursif de la logique derrière.</p>
      <p>Je vais suivre la même logique en utilisant un arbre binaire, car en effet, on aura toujours que deux cotés dans un calcul.</p>
    </div>

    <h2 id="tokenization">La 'tokenisation'</h2>
    <div class="h2">
      <p>La tokenisation est le processus d'interpretation de l'expression par un algorithme autonome qui va alors préparer le travail.</p>
      <p>Pour ce calcul:</p>
      <pre class="full">1 + 5 - (8 + 6)</pre>
      <p>Nous aurons alors la liste de tokens suivants:</p>
      <pre class="full"><code>[Number(1), Plus, Number(5), Minus, ParenthesisOpen, Number(8), Plus, Number(6), ParenthesisClose]</code></pre>
      <p>Cette liste de tokens nous permettra alors de faire plusieurs choses:</p>
      <ul>
        <li>Vérifier la syntaxe. Nous pouvons immédiatement savoir si une parenthèse a été oubliée ou si deux nombres sont voisins mais qu'il n'y a pas une opération.</li>
        <li>Créer l'arbre binaire (AST)</li>
        <li>Optimiser le calcul. (voir plus loin)</li>
      </ul>

     <h3 id="optimize">Optimiser l'expression</h3>
      <div class="h3">
        <p>Dans le cas d'expression mathématiques aussi simple, on peut juste calculer le résultat final. Cependant, ce qui est intéressant, c'est quand nous avons des équations avec variables. Prenons cet exemple:</p>
        <pre class="full">3x^(1 + 1) + x - (2 - 1)</pre>
        <p>Dans ce cas, on peut "optimiser" les opérations entre deux entiers ou qui ne dépendent pas de variables, ce qui donnera finalement:</p>
        <pre class="full">3x^2 + x - 1</pre>
        <p>Ce cas n'est pas un exemple concret car l'équation est très facile, cependant cela pourrait aussi fonctionner avec des équations plus complexes.</p>
      </div>
    </div>

    <h2 id="ast">L'arbre de syntaxe abstrait (AST)</h2>
    <div class="h2">
      <p>Maintenant que nous avons vu comment définir une liste de tokens à partir de l'expression mathématique, on peut alors générer un arbre binaire.</p>
      <p>Cette arbre binaire partira de la première expression à calculer à gauche, et à droite, on descendra récursivement dans l'arbre pour calculer le résultat final.</p>
    </div>
  </ProjectSection>
</template>