<template>
  <el-container class="navbar-container">
    <el-header class="navbar-header">
      <h1 class="system-title">后台管理系统</h1>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar :size="40" :src="userAvatar"></el-avatar>
          <span>{{ userName }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="profile">个人中心</el-dropdown-item>
            <el-dropdown-item command="settings">设置</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

// 模拟用户数据
const userName = ref('张三')
const userAvatar = ref('https://example.com/avatar.png')

const router = useRouter()

const handleCommand = (command) => {
  if (command === 'logout') {
    // 处理退出登录逻辑
    ElMessage.success('退出登录成功')
    // 跳转到登录页面
    router.push('/login')
  } else {
    ElMessage.info(`点击了${command}`)
  }
}
</script>

<style scoped>
.navbar-container {
  width: 100%;
}

.navbar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.system-title {
  font-size: 24px;
  font-weight: bold;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.el-dropdown-link span {
  margin-left: 10px;
}
</style>
