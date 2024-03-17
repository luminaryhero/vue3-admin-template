<template>
  <div class="w-full">
    <div class="py-20">
      <el-button @click="handleAdd" type="primary">新增用户</el-button>
    </div>

    <el-table :data="users" style="width: 100%" :border="true" v-loading="loading">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="handleEdit(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button @click="handleDelete(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="50" class="mt-20" />

    <el-dialog v-model="dialogVisible" title="用户信息">
      <el-form :model="currentUser">
        <el-form-item label="姓名">
          <el-input v-model="currentUser.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="currentUser.email"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="currentUser.phone"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveUser">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)

const users = ref([])

setTimeout(() => {
  users.value = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', phone: '1234567890' },
    { id: 2, name: '李四', email: 'lisi@example.com', phone: '0987654321' }
    // 更多用户数据
  ]
  loading.value = false
}, 1000)

async function fetchData() {}

const dialogVisible = ref(false)
const currentUser = ref({
  id: null,
  name: '',
  email: '',
  phone: ''
})

const handleAdd = () => {
  currentUser.value = {
    id: null,
    name: '',
    email: '',
    phone: ''
  }
  dialogVisible.value = true
}

const handleEdit = (row) => {
  currentUser.value = { ...row }
  dialogVisible.value = true
}

const handleDelete = (row) => {
  users.value = users.value.filter((user) => user.id !== row.id)
}

const saveUser = () => {
  if (currentUser.value.id) {
    // 编辑
    const index = users.value.findIndex((user) => user.id === currentUser.value.id)
    if (index !== -1) {
      users.value[index] = currentUser.value
    }
  } else {
    // 新增
    currentUser.value.id = users.value.length + 1
    users.value.push(currentUser.value)
  }
  dialogVisible.value = false
}
</script>

<style scoped>
/* 样式部分保持不变 */
</style>
