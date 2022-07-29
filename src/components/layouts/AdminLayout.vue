<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">MCZ Dashboard</a-menu-item>
        <a-menu-item key="2">Sign out</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 10px">
      <a-layout style="padding: 24px 0; background: #fff; min-height: 100vh">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%"
          >
            <a-menu-item key="1"><router-link to="/admin/" /> News Ads</a-menu-item>
            <a-menu-item key="2"><router-link to="/admin/active-ads" />Approved</a-menu-item>
            <a-menu-item key="3"><router-link to="/admin/pending-ads" />Pending</a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      MalakandCarZone©2018
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {};
</script>
