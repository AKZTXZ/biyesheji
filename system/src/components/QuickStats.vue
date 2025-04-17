<template>
  <div class="grid grid-cols-4 gap-4 mb-4">
    <div class="bg-white p-4 rounded shadow">
      <p class="text-gray-500">今天</p>
      <h3 class="text-xl font-bold">收入: {{ todayIncome }}</h3>
      <h3 class="text-xl font-bold">支出: {{ todayExpense }}</h3>
    </div>
    <div class="bg-white p-4 rounded shadow">
      <p class="text-gray-500">本周</p>
      <h3 class="text-xl font-bold">收入: {{ thisWeekIncome }}</h3>
      <h3 class="text-xl font-bold">支出: {{ thisWeekExpense }}</h3>
    </div>
    <div class="bg-white p-4 rounded shadow">
      <p class="text-gray-500">本月</p>
      <h3 class="text-xl font-bold">收入: {{ thisMonthIncome }}</h3>
      <h3 class="text-xl font-bold">支出: {{ thisMonthExpense }}</h3>
    </div>
    <div class="bg-white p-4 rounded shadow">
      <p class="text-gray-500">本年</p>
      <h3 class="text-xl font-bold">收入: {{ thisYearIncome }}</h3>
      <h3 class="text-xl font-bold">支出: {{ thisYearExpense }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const todayIncome = ref(0);
const todayExpense = ref(0);
const thisWeekIncome = ref(0);
const thisWeekExpense = ref(0);
const thisMonthIncome = ref(0);
const thisMonthExpense = ref(0);
const thisYearIncome = ref(0);
const thisYearExpense = ref(0);

// 这里后续可以添加获取数据的逻辑
</script>

<style scoped>
/* 样式 */
</style>