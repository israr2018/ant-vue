<template>
  <a-layout style="min-height: 100vh">
    <a-layout>
      <top-nav />
      <a-layout-content style="margin: 0 4px;">
        <div style="padding: 24px; background: #fff; min-height: auto">
            <router-view />
        </div>
      </a-layout-content>
     <Footer />
    </a-layout>
  </a-layout>
</template>

<script>
import Footer from '../footer.vue';
import TopNav from '../TopNav.vue';

export default {
  name: 'layout',
  components: {
    TopNav,
    Footer,
  },
};
</script>
