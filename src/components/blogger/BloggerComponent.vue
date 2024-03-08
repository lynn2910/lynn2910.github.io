<script setup lang="ts">
import type { BloggerArticle, BloggerNavigation } from '@/assets/scripts/blogger'
import { ref } from 'vue'

const props = defineProps({
  articles: ref<BloggerArticle[]>
});

let current_article = ref(props.articles?.value && props.articles.value.length > 0 ? props.articles.value[0] : null);

type NavTree = Map<string, BloggerNavigation>;

// get the navigation tree
let nav_tree: Map<string, BloggerNavigation> = new Map();

function push_new_article(article: BloggerArticle) {
  const pathParts = article.path.split(/\//g).map((p) => p.trim());

  // Traverse existing navigation tree
  let currentBranch: BloggerNavigation | undefined = nav_tree.get(pathParts[0]);
  while (currentBranch && pathParts.length > 0 && currentBranch.subs.has(pathParts[0])) {
    currentBranch = currentBranch.subs.get(pathParts[0])!;
    pathParts.shift();
  }

  // If the path already exists and isn't an article, add the article to its subs
  if (currentBranch && !currentBranch.is_article && pathParts.length === 0) {
    currentBranch.articles.push(article);
  } else {
    // Create missing sub-branches
    let subBranch = currentBranch || nav_tree;  // Start from existing branch or root
    for (const pathPart of pathParts) {
      const newSubBranch: BloggerNavigation = {
        name: pathPart,
        is_article: false,
        articles: [],
        subs: new Map(),
      };
      if ('subs' in subBranch) {
        subBranch.subs.set(pathPart, newSubBranch)
      }
      subBranch = newSubBranch;
    }
    // Add article to the last sub-branch
    if ('articles' in subBranch) {
      subBranch.articles.push(article)
    }
  }
}

props.articles?.value?.forEach(push_new_article);

console.log(nav_tree);
console.log(props.articles?.value);


</script>
<template>
  <div id="blogger">
    <div id="blogger_navigation">
      <BloggerNavigation v-for="(t, i) in nav_tree.values()"
                         :key="i"
                         :name="t.name"
                         :articles="t.articles"
                         :subs="t.subs"></BloggerNavigation>
    </div>
    <div id="blogger_view">{{ articles }}</div>
    <div id="blogger_headers"></div>
  </div>
</template>

<style src="@/assets/styles/blogger.css"></style>