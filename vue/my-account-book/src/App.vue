<template>
  <!-- 全局布局容器（参考网页5、6的布局方案） -->
  <div id="app">
    <!-- 路由出口（网页3、8的登录页路由逻辑） -->
    <router-view />
  </div>
</template>

<script setup>
// 空逻辑，仅作路由容器（网页9的App.vue结构）
</script>

<style lang="scss">
/* 全局样式（网页6的样式方案） */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
</style>