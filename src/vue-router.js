import { createWebHashHistory, createRouter } from 'vue-router';
// import Login from './views/auth/Login.vue';
// import Layout2 from './components/Layout2.vue';
import AdminLayout from './components/layouts/AdminLayout.vue';
import HomeLayout from './components/layouts/HomeLayout.vue';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import NewAds from './views/admin/new-ads.vue';
import SignIn from './views/Login.vue';
import ActiveAds from './views/admin/active-ads.vue';
import PendingAds from './views/admin/pending-ads.vue';
import GeneratePaper from './views/GeneratePaper.vue';
// import GeneratePaperV2 from './views/GeneratePaperV2.vue';

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/contact',
        component: Contact,
      },
      {
        path: '/auth',
        component: SignIn,
      },
      {
        path: '/auto-paper',
        component: GeneratePaper,
      },
      /*  {
        path: '/auto-paper2',
        component: GeneratePaperV2,
      }, */
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: NewAds,
      },
      {
        path: 'active-ads',
        component: ActiveAds,
      },
      {
        path: 'active-ads',
        component: ActiveAds,
      },
      {
        path: 'pending-ads',
        component: PendingAds,
      },
    ],
  },

];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
