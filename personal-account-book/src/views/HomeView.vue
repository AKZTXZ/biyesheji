<template>
  <div class="home-container">
    <!-- 时间快捷筛选 -->
    <div class="filter-bar">
      <el-radio-group v-model="activePeriod">
        <el-radio-button label="今天" />
        <el-radio-button label="本周" />
        <el-radio-button label="本月" />
        <el-radio-button label="本年" />
      </el-radio-group>
    </div>

    <!-- 核心统计卡片 -->
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="stat-card">
          <div class="stat-title">总收入</div>
          <div class="stat-value">¥ {{ totalIncome }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="stat-card">
          <div class="stat-title">总支出</div>
          <div class="stat-value">¥ {{ totalExpense }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="stat-card">
          <div class="stat-title">结余</div>
          <div class="stat-value" :style="{ color: balance >= 0 ? '#67C23A' : '#F56C6C' }">
            ¥ {{ balance }}
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 图表区域 -->
    <el-row :gutter="20">
      <el-col :span="16">
        <Chart type="line" :data="dailyExpenseData" title="本月每日支出趋势" />
      </el-col>
      <el-col :span="8">
        <Chart type="pie" :data="categoryData" title="支出分类占比" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Chart from '@/components/Chart.vue'

// 模拟数据
const activePeriod = ref('本月')
const totalIncome = ref(15800)
const totalExpense = ref(8560)
const balance = computed(() => totalIncome.value - totalExpense.value)

// 每日支出数据（折线图）
const dailyExpenseData = ref({
  xAxis: ['1', '5', '10', '15', '20', '25', '30'],
  series: [280, 450, 360, 600, 300, 550, 480]
})

// 分类数据（饼图）
const categoryData = ref({
  series: [
    { value: 35, name: '餐饮' },
    { value: 20, name: '交通' },
    { value: 15, name: '娱乐' },
    { value: 30, name: '购物' }
  ]
})
</script>

<style lang="scss" scoped>
.home-container {
  padding: 20px;

  .filter-bar {
    margin-bottom: 20px;
    padding: 10px;
    background: white;
    border-radius: 4px;
  }

  .stat-card {
    margin-bottom: 20px;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    }

    .stat-title {
      color: #909399;
      font-size: 14px;
      margin-bottom: 8px;
    }

    .stat-value {
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>