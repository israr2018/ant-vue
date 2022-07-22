import { createWebHashHistory, createRouter } from 'vue-router';
// import Login from './views/auth/Login.vue';
// import Layout2 from './components/Layout2.vue';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import AdminLayout from './components/layouts/AdminLayout.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/admin',
    component: AdminLayout,
  },

];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
