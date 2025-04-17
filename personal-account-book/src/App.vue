<template>
  <div class="app-container">
    <el-container>
      <!-- 左侧导航栏 -->
      <NavBar />

      <!-- 主内容区 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>

    <!-- 全局记账按钮 -->
    <AddButton />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import AddButton from '@/components/AddButton.vue'
</script>

<style lang="scss">
.app-container {
  height: 100vh;
  display: flex;

  .el-container {
    flex: 1;

    .el-main {
      padding: 20px;
      background: #f5f7fa;
    }
  }
}
</style>