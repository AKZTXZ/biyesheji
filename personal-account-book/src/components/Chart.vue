<template>
  <el-card class="chart-card">
    <div class="chart-title">{{ title }}</div>
    <div ref="chartRef" :style="{ height: height }"></div>
  </el-card>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  type: {
    type: String,
    default: 'line'
  },
  data: {
    type: Object,
    required: true
  },
  title: String,
  height: {
    type: String,
    default: '400px'
  }
})

const chartRef = ref(null)
let chartInstance = null

const initChart = () => {
  if (!chartRef.value) return

  chartInstance = echarts.init(chartRef.value)
  const options = {
    line: {
      xAxis: {
        type: 'category',
        data: props.data.xAxis,
        axisLabel: {
          color: '#606266'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#606266'
        }
      },
      series: [{
        data: props.data.series,
        type: 'line',
        smooth: true,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255,107,53,0.3)' },
            { offset: 1, color: 'rgba(255,107,53,0)' }
          ])
        },
        itemStyle: {
          color: '#ff6b35'
        }
      }]
    },
    pie: {
      tooltip: {
        trigger: 'item'
      },
      series: [{
        type: 'pie',
        radius: ['40%', '70%'],
        data: props.data.series,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        }
      }]
    }
  }

  chartInstance.setOption(options[props.type])
}

onMounted(initChart)
onBeforeUnmount(() => chartInstance?.dispose())

watch(() => props.data, () => {
  chartInstance?.dispose()
  initChart()
}, { deep: true })
</script>

<style scoped>
.chart-card {
  margin-bottom: 20px;

  .chart-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
    padding-left: 10px;
    border-left: 4px solid #ff6b35;
  }
}
</style>