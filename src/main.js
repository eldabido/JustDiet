import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

import Home from './pages/Home.vue';
import Contacts from './pages/Contacts.vue';
import Diet from './pages/Diet.vue';
import Profile from './pages/Profile.vue';

const app = createApp(App);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contacts', name: 'Contacts', component: Contacts },
  { path: '/diet', name: 'Diet', component: Diet },
  { path: '/profile', name: 'Profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount('#app');
