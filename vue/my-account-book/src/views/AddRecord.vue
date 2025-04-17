<template>
  <el-dialog v-model="visible" title="新增记账" width="600px">
    <el-tabs v-model="activeType">
      <el-tab-pane v-for="type in recordTypes" :key="type.value" :label="type.label" :name="type.value">
        <el-form :model="formData" label-width="80px">
          <el-form-item label="金额" prop="amount">
            <el-input-number v-model="formData.amount" :precision="2" :min="0.01" controls-position="right"
              style="width: 100%" />
          </el-form-item>

          <el-form-item label="分类">
            <el-cascader v-model="formData.category" :options="categoryOptions[activeType]"
              :props="{ expandTrigger: 'hover' }" style="width: 100%" />
          </el-form-item>

          <!-- 转账类型特有字段 -->
          <template v-if="activeType === 'transfer'">
            <el-form-item label="转出账户">
              <el-select v-model="formData.fromAccount">
                <el-option v-for="account in accounts" :key="account.id" :label="account.name" :value="account.id" />
              </el-select>
            </el-form-item>
            <el-form-item label="转入账户">
              <el-select v-model="formData.toAccount">
                <el-option v-for="account in accounts" :key="account.id" :label="account.name" :value="account.id" />
              </el-select>
            </el-form-item>
          </template>

          <!-- 其他类型共用字段 -->
          <template v-else>
            <el-form-item :label="`${activeTypeMap[activeType]}账户`">
              <el-select v-model="formData.account">
                <el-option v-for="account in accounts" :key="account.id" :label="account.name" :value="account.id" />
              </el-select>
            </el-form-item>
          </template>

          <!-- 其他公共字段 -->
          <el-form-item label="时间">
            <el-date-picker v-model="formData.time" type="datetime" value-format="YYYY-MM-DD HH:mm:ss"
              style="width: 100%" />
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>

    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'

const visible = ref(false)
const activeType = ref('expense')

// 类型配置
const recordTypes = [
  { label: '支出', value: 'expense' },
  { label: '收入', value: 'income' },
  { label: '转账', value: 'transfer' },
  { label: '余额调整', value: 'balance' },
  { label: '退款', value: 'refund' }
]

// 模拟数据
const accounts = ref([
  { id: 1, name: '现金钱包' },
  { id: 2, name: '招商银行' },
  { id: 3, name: '支付宝' }
])

const categoryOptions = ref({
  expense: [
    { value: 'food', label: '餐饮', children: [...] },
    { value: 'transport', label: '交通' }
  ],
  income: [
    { value: 'salary', label: '工资' },
    { value: 'investment', label: '投资收益' }
  ]
})

const formData = reactive({
  amount: 0,
  category: [],
  account: '',
  time: new Date().toISOString(),
  // 转账专用字段
  fromAccount: '',
  toAccount: ''
})

const submitForm = () => {
  console.log('提交数据:', JSON.parse(JSON.stringify(formData)))
  visible.value = false
}
// 新增验证规则（网页8、9、10）
const formRules = reactive({
  amount: [
    { required: true, message: '金额不能为空', trigger: 'blur' },
    {
      validator: (_, value, callback) => {
        if (value <= 0) callback(new Error('金额必须大于0'))
        else callback()
      },
      trigger: 'blur'
    }
  ],
  category: [
    { required: true, message: '必须选择分类', trigger: 'change' }
  ],
  time: [
    { required: true, message: '必须选择时间', trigger: 'change' }
  ],
  // 转账特殊验证（网页3）
  fromAccount: [
    {
      required: true,
      message: '必须选择转出账户',
      trigger: 'change',
      validator: (_, value, callback) => {
        if (activeType.value === 'transfer' && !value) {
          callback(new Error('必须选择转出账户'))
        } else callback()
      }
    }
  ],
  toAccount: [
    {
      required: true,
      validator: (_, value, callback) => {
        if (activeType.value === 'transfer') {
          if (!value) callback(new Error('必须选择转入账户'))
          else if (value === formData.fromAccount) {
            callback(new Error('转入账户不能与转出账户相同'))
          } else callback()
        } else callback()
      },
      trigger: 'change'
    }
  ]
})

// 动态切换验证规则（网页8）
const dynamicRules = computed(() => {
  return activeType.value === 'transfer'
    ? { ...formRules }
    : omit(formRules, ['fromAccount', 'toAccount'])
})

// 提交时统一验证（网页10）
const submitForm = async () => {
  try {
    await formRef.value.validate()
    // 提交逻辑...
  } catch (error) {
    ElMessage.error('请检查表单填写完整性')
  }
}
</script>