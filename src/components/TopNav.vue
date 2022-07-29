<template>
    <a-layout-header class="header">
     <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">MCZ Dashboard</a-menu-item>
        <a-menu-item key="2">New Ad</a-menu-item>
        <a-menu-item key="3">Contact Us</a-menu-item>
        <a-menu-item key="3">Sign In</a-menu-item>
      </a-menu>
    </a-layout-header>
    </template>
<script>
export default {
  name: 'TopBar',
};
</script>
<style scoped>
.header-bread {
background-color: #f0f2f5;
}
.bread-menu {
margin: 16px 0;
}
</style>
