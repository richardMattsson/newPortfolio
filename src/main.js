import { createApp } from 'vue';
import { createBootstrap } from 'bootstrap-vue-next';

import '../assets/main.css';
import '../assets/main.scss';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

import App from './App.vue';
import router from './router';

createApp(App).use(createBootstrap()).use(router).mount('#app');
