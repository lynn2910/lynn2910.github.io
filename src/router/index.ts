import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { projects } from "@/assets/scripts/projects_store";

const projects_routes = projects.map(function(project){
  return {
    path: project.url,
    name: project.properties.name,
    component: () => import(`../components/projects/${project.content_path}.vue`)
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // FIXME ça ne marche pas très bien
      beforeEnter: (to, _from, next) => {
        if (to.hash) {
          console.log(to.hash);
          const element = document.getElementById(to.hash.slice(1));
          if (element) {
            element.scrollTo({
              behavior: 'smooth',
            });
          }
        }
        next();
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/contact',
      name: 'contact_me',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/blog',
      name: 'blog_devlog',
      component: () => import('../views/BlogView.vue')
    },
    ...projects_routes
  ]
})

export default router
