import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import CVView from './views/CVView.vue';
import ContactView from './views/ContactView.vue';

export default createRouter({
  history: createWebHashHistory(),
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
      component: CVView,
      path: '/cv',
    },
    {
      component: ContactView,
      path: '/contact',
    },
  ],
});
