import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ProjectDetailView from './views/ProjectDetailView.vue';
import CVView from './views/CVView.vue';
import ContactView from './views/ContactView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: HomeView,
      path: '/',
    },
    {
      component: ProjectsView,
      path: '/projects',
    },
    {
      component: ProjectDetailView,
      path: '/projects/:slug',
    },
    {
      component: CVView,
      path: '/cv',
    },
    {
      component: ContactView,
      path: '/contact',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }

    return { top: 0 }
  },
});
