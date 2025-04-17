<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  chartData: Object
})

let myChart = null
const chartRef = ref(null)

// 响应式图表（网页14、15）
const initChart = () => {
  myChart = echarts.init(chartRef.value)

  const option = {
    tooltip: {
      trigger: 'axis',
      formatter: '{b}<br/>¥{c}'
    },
    xAxis: {
      type: 'category',
      data: props.chartData.dates,
      axisLabel: {
        color: '#606266'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '¥{value}'
      }
    },
    series: [{
      data: props.chartData.amounts,
      type: 'line',
      smooth: true,
      symbolSize: 8,
      itemStyle: {
        color: '#ff6a00'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0,
          x2: 0, y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(255,106,0,0.3)'
          }, {
            offset: 1, color: 'rgba(255,106,0,0)'
          }]
        }
      }
    }]
  }

  myChart.setOption(option)
  window.addEventListener('resize', handleResize)
}

// 响应式调整（网页14）
const handleResize = () => myChart?.resize()

watch(() => props.chartData, () => {
  myChart?.setOption({
    xAxis: { data: props.chartData.dates },
    series: [{ data: props.chartData.amounts }]
  })
})

onMounted(initChart)
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  myChart?.dispose()
})
</script>