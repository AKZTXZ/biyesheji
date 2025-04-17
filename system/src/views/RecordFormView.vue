<template>
  <div class="bg-white p-4 rounded shadow">
    <h3 class="text-xl font-bold mb-4">记账</h3>
    <form @submit.prevent="submitRecord">
      <div class="mb-4">
        <label for="type" class="block text-gray-700 text-sm font-bold mb-2">类型</label>
        <select id="type" v-model="record.type"
          class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="支出">支出</option>
          <option value="收入">收入</option>
          <option value="转账">转账</option>
          <option value="余额">余额</option>
          <option value="退款">退款</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="amount" class="block text-gray-700 text-sm font-bold mb-2">金额</label>
        <input type="number" id="amount" v-model="record.amount"
          class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="category" class="block text-gray-700 text-sm font-bold mb-2">分类</label>
        <input type="text" id="category" v-model="record.category"
          class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="account" class="block text-gray-700 text-sm font-bold mb-2">账户</label>
        <input type="text" id="account" v-model="record.account"
          class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="time" class="block text-gray-700 text-sm font-bold mb-2">时间</label>
        <input type="date" id="time" v-model="record.time"
          class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="note" class="block text-gray-700 text-sm font-bold mb-2">备注</label>
        <input type="text" id="note" v-model="record.note"
          class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="image" class="block text-gray-700 text-sm font-bold mb-2">图片</label>
        <input type="file" id="image" @change="handleImageChange"
          class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">提交</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const record = ref({
  type: '支出',
  amount: 0,
  category: '',
  account: '',
  time: '',
  note: '',
  image: ''
});

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      record.value.image = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const submitRecord = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/records', record.value);
    console.log('记录保存成功', response.data);
    // 可以添加跳转到其他页面的逻辑
  } catch (error) {
    console.error('记录保存失败', error);
  }
};
</script>

<style scoped>
/* 样式 */
</style>