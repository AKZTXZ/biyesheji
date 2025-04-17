<template>
  <el-aside width="200px">
    <el-menu active-text-color="#ff6b35" background-color="#304156" text-color="#fff" router>
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
        <span>报表</span>
      </el-menu-item>
      <el-menu-item index="/flow">
        <el-icon>
          <List />
        </el-icon>
        <span>流水</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { House, DataAnalysis, List } from '@element-plus/icons-vue'
</script>