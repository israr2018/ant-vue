<template>
  <a-layout-sider v-model='drawer' collapsible>
    <a-menu :default-selected-keys="['1']" theme="dark" mode="inline">
      <a-menu-item v-for="(item, index) in menu" :key="index">
        <span>{{ item.name }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  name: 'Drawer',
  data: () => ({
    drawer: true,
    menu: [
      {
        name: 'Home',
        icon: 'home',
      },
      {
        name: 'Ant Design Vue',
        icon: 'ant-design',
      },
      {
        name: 'Contact',
        icon: 'mail',
      },
      {
        name: 'Services',
        icon: 'mail',
      },
    ],
  }),
};
</script>
