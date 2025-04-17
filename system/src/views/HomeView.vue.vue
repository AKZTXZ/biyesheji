<template>
  <div class="flex">
    <AppSidebar />
    <div class="flex-1 p-4">
      <QuickStats />
      <MonthlyExpenseChart />
      <MonthlyIncomeExpenseBreakdown />
    </div>
  </div>
</template>

<script setup>
import AppSidebar from '../components/AppSidebar.vue';
import QuickStats from '../components/QuickStats.vue';
import MonthlyExpenseChart from '../components/MonthlyExpenseChart.vue';
import MonthlyIncomeExpenseBreakdown from '../components/MonthlyIncomeExpenseBreakdown.vue';
</script>

<style scoped>
/* 样式 */
</style>