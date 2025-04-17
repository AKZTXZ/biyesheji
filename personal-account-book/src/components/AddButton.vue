<template>
  <el-button type="primary" class="float-button" @click="showDialog = true">
    <el-icon>
      <Plus />
    </el-icon>
    记一笔
  </el-button>

  <el-dialog v-model="showDialog" title="新增记录">
    <!-- 记账表单将在后续补充 -->
    <CreateForm v-model="showDialog" @submit="handleSubmit" />
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import CreateForm from '@/components/CreateForm.vue'

const showDialog = ref(false)
</script>

<style scoped>
.float-button {
  position: fixed;
  right: 40px;
  bottom: 40px;
  height: 50px;
  width: 120px;
  border-radius: 25px;
  background: #ff6b35;
  border: none;
  box-shadow: 0 2px 12px rgba(255, 107, 53, 0.3);
}
</style>