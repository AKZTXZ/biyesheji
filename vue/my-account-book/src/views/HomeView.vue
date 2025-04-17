<template>
  <div class="home-container">
    <AppNav />

    <div class="main-content">
      <!-- 顶部操作栏 -->
      <div class="action-bar">
        <el-button type="primary" @click="openRecordDialog" class="record-btn">
          <el-icon>
            <Plus />
          </el-icon> 记一笔
        </el-button>

        <el-radio-group v-model="currentPeriod">
          <el-radio-button label="day">今天</el-radio-button>
          <el-radio-button label="week">本周</el-radio-button>
          <el-radio-button label="month">本月</el-radio-button>
          <el-radio-button label="year">本年</el-radio-button>
        </el-radio-group>
      </div>

      <!-- 数据展示区 -->
      <div class="dashboard">
        <SummaryPanel :data="summaryData" />
        <LineChart :chart-data="chartData" />
      </div>
    </div>

    <AddRecord ref="addRecordRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppNav from '@/components/common/AppNav.vue'
import SummaryPanel from '@/components/home/SummaryPanel.vue'
import LineChart from '@/components/home/LineChart.vue'
import AddRecord from '@/views/AddRecord.vue'

const currentPeriod = ref('month')
const addRecordRef = ref(null)

// 模拟数据
const summaryData = ref({
  income: 15800.50,
  expense: 9200.00,
  balance: 6600.50
})

const chartData = ref({
  dates: ['04-01', '04-02', '04-03'],
  amounts: [320, 450, 280]
})

const openRecordDialog = () => {
  addRecordRef.value.visible = true
}
</script>

<style lang="scss" scoped>
.home-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  min-height: 100vh;

  .main-content {
    padding: 20px;
    background: #f5f7fa;

    .action-bar {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .record-btn {
        background: #ff6a00;
        border-color: #ff6a00;
        padding: 12px 24px;
      }
    }

    .dashboard {
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 2fr;
    }
  }
}
</style>