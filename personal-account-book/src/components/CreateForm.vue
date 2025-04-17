<template>
  <el-dialog v-model="showDialog" title="记一笔" width="600px">
    <!-- 类型切换 -->
    <div class="type-switch">
      <el-radio-group v-model="formData.type">
        <el-radio-button label="支出" value="expense" />
        <el-radio-button label="收入" value="income" />
        <el-radio-button label="转账" value="transfer" />
      </el-radio-group>
    </div>

    <!-- 动态表单 -->
    <el-form ref="formRef" :model="formData" :rules="rules" label-position="top">
      <!-- 通用字段 -->
      <el-form-item label="金额" prop="amount">
        <el-input-number v-model="formData.amount" :precision="2" :min="0" controls-position="right"
          style="width: 100%" />
      </el-form-item>

      <!-- 分类选择 -->
      <el-form-item label="分类" prop="category">
        <el-cascader v-model="formData.category" :options="categories" :props="{
          value: 'id',
          label: 'name',
          children: 'subCategories'
        }" filterable />
      </el-form-item>

      <!-- 转账专属字段 -->
      <template v-if="formData.type === 'transfer'">
        <el-form-item label="转出账户" prop="fromAccount">
          <el-select v-model="formData.fromAccount">
            <el-option v-for="account in accounts" :key="account.id" :label="account.name" :value="account.id" />
          </el-select>
        </el-form-item>

        <el-form-item label="转入账户" prop="toAccount">
          <el-select v-model="formData.toAccount">
            <el-option v-for="account in accounts" :key="account.id" :label="account.name" :value="account.id" />
          </el-select>
        </el-form-item>
      </template>

      <!-- 日期选择 -->
      <el-form-item label="时间" prop="date">
        <el-date-picker v-model="formData.date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" />
      </el-form-item>

      <!-- 备注 -->
      <el-form-item label="备注" prop="remark">
        <el-input v-model="formData.remark" type="textarea" :rows="2" maxlength="100" show-word-limit />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="showDialog = false">取消</el-button>
      <el-button type="primary" @click="handleSubmit">确认</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

// 表单数据结构
const formData = reactive({
  type: 'expense',
  amount: null,
  category: [],
  date: new Date(),
  remark: '',
  fromAccount: null,
  toAccount: null
})

// 验证规则
const rules = {
  amount: [
    { required: true, message: '请输入金额', trigger: 'blur' },
    { type: 'number', min: 0.01, message: '金额必须大于0' }
  ],
  category: [
    { required: true, message: '请选择分类', trigger: 'change' }
  ],
  fromAccount: [
    {
      required: true,
      validator: (rule, value, callback) => {
        if (formData.type === 'transfer' && !value) {
          callback(new Error('请选择转出账户'))
        } else {
          callback()
        }
      }
    }
  ]
}

// 模拟数据
const categories = ref([
  {
    id: 1,
    name: '餐饮',
    subCategories: [
      { id: 11, name: '早餐' },
      { id: 12, name: '午餐' }
    ]
  },
  {
    id: 2,
    name: '交通',
    subCategories: [
      { id: 21, name: '公共交通' },
      { id: 22, name: '打车' }
    ]
  }
])

const accounts = ref([
  { id: 1, name: '现金钱包', balance: 5000 },
  { id: 2, name: '支付宝', balance: 15000 }
])

// 表单提交
const handleSubmit = async () => {
  try {
    await formRef.value.validate()
    // 提交逻辑...
    ElMessage.success('记录添加成功')
    showDialog.value = false
  } catch (e) {
    console.error('表单验证失败', e)
  }
}
</script>

<style scoped>
.type-switch {
  margin-bottom: 20px;

  :deep(.el-radio-group) {
    width: 100%;

    .el-radio-button {
      flex: 1;
      --el-radio-button-checked-bg-color: var(--el-color-primary-light-9);
    }
  }
}
</style>