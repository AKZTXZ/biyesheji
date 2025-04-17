<template>
  <el-card class="summary-panel">
    <template #header>
      <div class="panel-header">
        <span>{{ periodLabel }}收支概览</span>
        <el-tag type="warning">单位：元</el-tag>
      </div>
    </template>

    <div class="stats-grid">
      <div class="stat-item">
        <label>总收入</label>
        <div class="value income">{{ data.income.toFixed(2) }}</div>
      </div>
      <div class="stat-item">
        <label>当前结余</label>
        <div class="value balance">{{ data.balance.toFixed(2) }}</div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  },
  periodLabel: {
    type: String,
    default: '本月'
  }
})
</script>

<style lang="scss" scoped>
.summary-panel {
  :deep(.el-card__header) {
    background: #fafafa;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    .stat-item {
      text-align: center;

      label {
        color: #909399;
        font-size: 14px;
      }

      .value {
        font-size: 24px;
        margin-top: 8px;

        &.income {
          color: #67c23a;
        }

        &.balance {
          color: #409eff;
        }
      }
    }
  }
}
</style>