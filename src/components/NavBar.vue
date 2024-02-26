<template>
  <nav :class="(is_closed ? 'closed ' : '') + (play_animation && !is_closed ? 'animate' : '')">
    <router-link to="/" class="home">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 52" fill="none">
        <path d="M55.06 23.528L46.5729 15.0544V5.26584C46.5729 3.49594 45.1364 2.06158 43.3611 2.06158C41.5899 2.06158 40.1534 3.49594 40.1534 5.26584V8.64504L33.8341 2.3355C30.7098 -0.782202 25.2776 -0.776672 22.1604 2.34114L0.939536 23.528C-0.313179 24.7812 -0.313179 26.809 0.939536 28.0603C2.19282 29.3132 4.22777 29.3132 5.4806 28.0603L26.6994 6.87288C27.3907 6.18635 28.609 6.18635 29.2966 6.87085L50.5191 28.0603C51.1484 28.6868 51.9688 28.9984 52.789 28.9984C53.611 28.9984 54.4328 28.6865 55.0601 28.0603C56.3133 26.8092 56.3133 24.7814 55.06 23.528Z" fill="white"/>
        <path d="M29.1025 13.4548C28.4933 12.8484 27.5069 12.8484 26.8996 13.4548L8.45626 31.8174C8.16508 32.1073 8 32.5031 8 32.9161V46.3091C8 49.4519 10.5586 52 13.7142 52H22.8455V37.9163H33.1545V52H42.2859C45.4414 52 48 49.4519 48 46.3092V32.9161C48 32.5031 47.8364 32.1073 47.5437 31.8174L29.1025 13.4548Z" fill="white"/>
      </svg>
    </router-link>
    <div class="links">
      <router-link to="/#skills">Mes compétences</router-link>
      <router-link to="/projects">Mes projets</router-link>
      <router-link to="blog">Blog & devlog</router-link>
      <router-link to="/#contact">Me contacter</router-link>
    </div>

    <svg v-if="is_closed"
         class="reduce_open"
         style="fill: rgba(255, 255, 255, 1);"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
         @click="navbar_reducer()">
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>

    <svg v-if="!is_closed"
         class="reduce_open"
         style="fill: rgba(255, 255, 255, 1);"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
         @click="navbar_reducer()">
      <path
          d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
    </svg>
  </nav>
</template>

<style scoped src="@/assets/styles/nav.css"></style>
<script setup lang="ts">
import {ref} from "vue";

let is_closed = ref(false);
let play_animation = ref(false);

function navbar_reducer(){
  is_closed.value = !is_closed.value;

  if (!is_closed.value) {
    // we open the navbar, so we add the animation :)
    play_animation.value = true;
    setTimeout(() => {
      play_animation.value = false;
    }, 3000);
  }
}
</script>