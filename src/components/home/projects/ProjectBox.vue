<template>
  <div class="project" :class="classes?.join(' ') || ''">
    <div class="head">
      <h3>{{ name }}</h3>
      <div class="links">

        <a v-for="(link, index) in links" :key="index" :href="link.url" target="_blank">
          <svg v-if="link.type === 'github'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentColor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>

          <svg v-if="link.type === 'discord'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentColor;">
            <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
          </svg>

          <svg v-if="link.type === 'gitlab'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentColor">
            <path d="M20.892 9.889a.664.664 0 0 0-.025-.087l-2.104-6.479a.84.84 0 0 0-.8-.57.822.822 0 0 0-.789.575l-2.006 6.175H8.834L6.826 3.327a.823.823 0 0 0-.786-.575h-.006a.837.837 0 0 0-.795.575L3.133 9.815c0 .005-.005.01-.007.016l-1.067 3.281a1.195 1.195 0 0 0 .435 1.34l9.227 6.706c.167.121.393.12.558-.003l9.229-6.703a1.2 1.2 0 0 0 .435-1.34l-1.051-3.223zM17.97 3.936l1.809 5.566H16.16l1.81-5.566zm-11.94 0 1.812 5.566H4.228L6.03 3.936zm-2.982 9.752a.253.253 0 0 1-.093-.284l.793-2.437 5.817 7.456-6.517-4.735zm1.499-3.239h3.601l2.573 7.916-6.174-7.916zm7.452 8.794-2.856-8.798h5.718l-1.792 5.515-1.07 3.283zm1.282-.877 2.467-7.588.106-.329h3.604l-5.586 7.156-.591.761zm7.671-4.678-6.519 4.733.022-.029 5.794-7.425.792 2.436a.25.25 0 0 1-.089.285z"></path>
          </svg>

          <svg v-if="link.type === 'website'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path>
          </svg>

          <svg v-if="link.type === 'sound'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;">
            <path d="M6 18.573c2.206 0 4-1.794 4-4V4.428L19 7.7v7.43a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7a.998.998 0 0 0-.658-.939l-11-4A.999.999 0 0 0 8 3v8.13a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4z"></path>
          </svg>
        </a>
      </div>
    </div>

    <p>{{ description }}</p>

    <div class="skills">
      <svg @click="move_skills($el, -1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 28" fill="none">
        <path d="M14.4258 0L0 14L14.4258 28L18 24.5313L7.14843 14L18 3.46872L14.4258 0Z" fill="currentColor"/>
      </svg>

      <!-- Iterate over every skills registered -->
      <div class="list">
        <div class="internal_view" :style="`transform: translateX(${-translationX}px)`">
          <p v-for="(s, index) in skills" :key="index">{{ s }}</p>
        </div>
      </div>

      <svg @click="move_skills($el, 1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 28" fill="none">
        <path d="M3.57422 28L18 14L3.57422 0L0 3.46873L10.8516 14L0 24.5313L3.57422 28Z" fill="currentColor"/>
      </svg>
    </div>

    <router-link v-if="link" class="btn show_project" :to="link">Voir le projet</router-link>
  </div>
</template>

<script setup lang="ts">

import type {Link} from "@/assets/scripts/projects";
import {ref} from "vue";

let translationX = ref(0);

defineProps({
  name: String,
  links: Array<Link>,
  description: String,
  skills: Array<String>,
  classes: Array<String>,
  link: {
    type: String,
    optional: true
  }
});

const MOVING_SKILLS_PAD: number = 30;

function move_skills(skills: HTMLElement, r: number){
  let internal_view = skills.querySelector(".list .internal_view") as HTMLElement;
  let br = internal_view.getBoundingClientRect();

  let container = skills.querySelector(".list") as HTMLElement;
  let cbr = container.getBoundingClientRect();

  if (br.right > cbr.right || r < 0) {
    translationX.value += MOVING_SKILLS_PAD * r;

    if (translationX.value < 0)
      translationX.value = 0;
  }
}
</script>