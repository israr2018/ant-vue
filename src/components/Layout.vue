<template>
  <a-layout style="min-height: 100vh">
    <drawer />
    <a-layout>
      <top-bar />
      <a-layout-content style="margin: 0 16px">
        <div style="padding: 24px; background: #fff; min-height: auto">
          <!-- <slot /> -->
          content goes here
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Malakand Car Zone @2022
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import TopBar from './TopBar.vue';
import Drawer from './Drawer.vue';

export default {
  name: 'layout',
  components: {
    Drawer,
    TopBar,
  },
};
</script>
