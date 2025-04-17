<template>
  <div ref="chart" class="bg-white p-4 rounded shadow h-96"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chart = ref(null);

onMounted(() => {
  const myChart = echarts.init(chart.value);
  const option = {
    xAxis: {
      type: 'category',
      data: ['1日', '2日', '3日', '4日', '5日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [100, 200, 150, 300, 250],
        type: 'line'
      }
    ]
  };
  myChart.setOption(option);
});
</script>

<style scoped>
/* 样式 */
</style>