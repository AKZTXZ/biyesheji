<template>
  <div class="bg-gray-800 text-white w-64 h-screen p-4">
    <button class="bg-orange-500 text-white px-4 py-2 rounded mb-4" @click="$router.push('/record-form')">记一笔</button>
    <ul>
      <li><router-link to="/" class="block py-2 hover:bg-gray-700 px-4">首页</router-link></li>
      <li><router-link to="/report" class="block py-2 hover:bg-gray-700 px-4">报表</router-link></li>
      <li><router-link to="/records" class="block py-2 hover:bg-gray-700 px-4">流水</router-link></li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 样式 */
</style>