<template>
  <el-menu class="app-nav" :default-active="activeIndex" background-color="#304156" text-color="#bfcbd9"
    active-text-color="#ff6a00" router>
    <el-menu-item index="/">
      <el-icon>
        <House />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/report">
      <el-icon>
        <DataAnalysis />
      </el-icon>
      <span>报表分析</span>
    </el-menu-item>
    <el-menu-item index="/flow">
      <el-icon>
        <Tickets />
      </el-icon>
      <span>流水记录</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeIndex = ref(route.path)
</script>

<style lang="scss" scoped>
.app-nav {
  height: 100vh;
  width: 200px;
  border-right: none;

  :deep(.el-menu-item) {
    transition: all 0.3s;

    &:hover {
      background-color: #263445 !important;
    }

    &.is-active {
      background-color: #1f2d3d !important;
    }
  }
}
</style>