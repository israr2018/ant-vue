<template>
  <a-layout style="min-height: 100vh">
    <a-layout>
      <a-layout-header>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">Home </a-menu-item>
          <a-menu-item key="2">Post Car Ad</a-menu-item>
          <a-menu-item key="2">Contact US</a-menu-item>
          <!-- <a-menu-item key="3"><router-link to="/login">Login</router-link> </a-menu-item> -->
          <!-- <a-menu-item key="3"><router-link to="/login">Login</router-link> </a-menu-item> -->
        </a-menu>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <div style="padding: 24px; background: #fff; min-height: '100vh">
          <!-- <slot /> -->
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer
        style="
          text-align: center;
          background: black;
          color: #fff;
          line-height: '64px';
        "
      >
        Malakand Car Zone @2022
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'layout',
  components: {},
};
</script>
