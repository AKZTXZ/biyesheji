<template>
  <div class="flow-container">
    <!-- 过滤条件 -->
    <el-card class="filter-card">
      <div class="filter-group">
        <el-date-picker v-model="dateRange" type="daterange" range-separator="-" start-placeholder="开始日期"
          end-placeholder="结束日期" />

        <el-input v-model="searchKey" placeholder="搜索备注" clearable style="width: 200px">
          <template #prefix>
            <el-icon>
              <Search />
            </el-icon>
          </template>
        </el-input>
      </div>
    </el-card>

    <!-- 数据表格 -->
    <el-table :data="filteredData" stripe style="width: 100%" v-loading="loading">
      <el-table-column prop="date" label="日期" width="120" sortable>
        <template #default="{ row }">
          {{ dayjs(row.date).format('MM-DD HH:mm') }}
        </template>
      </el-table-column>

      <el-table-column prop="type" label="类型" width="100">
        <template #default="{ row }">
          <el-tag :type="row.type === 'income' ? 'success' : 'danger'" effect="plain">
            {{ typeMap[row.type] }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="category" label="分类">
        <template #default="{ row }">
          {{ row.category.join(' / ') }}
        </template>
      </el-table-column>

      <el-table-column prop="amount" label="金额" align="right" width="120">
        <template #default="{ row }">
          <span :class="row.type === 'income' ? 'income' : 'expense'">
            {{ row.type === 'income' ? '+' : '-' }}{{ row.amount.toFixed(2) }}
          </span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" show-overflow-tooltip />

      <el-table-column label="操作" width="80">
        <template #default="{ row }">
          <el-button type="text" @click="handleEdit(row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination">
      <el-pagination v-model:current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next"
        :total="total" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import dayjs from 'dayjs'

// 模拟数据
const mockData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  date: dayjs().subtract(i, 'day').format(),
  type: i % 3 === 0 ? 'income' : 'expense',
  category: ['餐饮', '午餐'],
  amount: Math.random() * 1000 + 100,
  remark: `消费备注 ${i + 1}`
}))

// 过滤逻辑
const dateRange = ref([])
const searchKey = ref('')
const currentPage = ref(1)
const pageSize = 10

const filteredData = computed(() => {
  return mockData.filter(item => {
    const [start, end] = dateRange.value || []
    const matchDate = !start || !end ||
      (dayjs(item.date).isAfter(start) && dayjs(item.date).isBefore(end))

    const matchSearch = !searchKey.value ||
      item.remark.includes(searchKey.value)

    return matchDate && matchSearch
  }).slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize)
})

const typeMap = {
  expense: '支出',
  income: '收入',
  transfer: '转账'
}
</script>

<style scoped>
.flow-container {
  padding: 20px;

  .filter-card {
    margin-bottom: 20px;

    .filter-group {
      display: flex;
      gap: 15px;
    }
  }

  .income {
    color: #67c23a;
  }

  .expense {
    color: #f56c6c;
  }

  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>