<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="bg-white p-4 rounded shadow">
      <h3 class="text-xl font-bold">本月分类收入</h3>
      <ul>
        <li v-for="(income, index) in monthlyIncomeCategories" :key="index">{{ income.category }}: {{ income.amount }}
        </li>
      </ul>
    </div>
    <div class="bg-white p-4 rounded shadow">
      <h3 class="text-xl font-bold">本月分类支出</h3>
      <ul>
        <li v-for="(expense, index) in monthlyExpenseCategories" :key="index">{{ expense.category }}: {{ expense.amount
          }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const monthlyIncomeCategories = ref([
  { category: '工资', amount: 5000 },
  { category: '奖金', amount: 1000 }
]);
const monthlyExpenseCategories = ref([
  { category: '餐饮', amount: 1500 },
  { category: '购物', amount: 2000 }
]);
</script>

<style scoped>
/* 样式 */
</style>