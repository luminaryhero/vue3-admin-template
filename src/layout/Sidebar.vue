<script lang="ts" setup>
import type { Expand, Fold } from '@element-plus/icons-vue'
import { ref } from 'vue'
const emit = defineEmits(['update:collapsed'])

const activeIndex = ref('1')

const collapsed = ref(false)

const handleSelect = (indexPath: string[]) => {
  console.log('Selected item:', indexPath)
}

function changeCollapsed() {
  // 处理菜单选择逻辑
  collapsed.value = !collapsed.value
  emit('update:collapsed', collapsed.value)
}
</script>

<template>
  <el-aside>
    <el-menu
      :default-active="activeIndex"
      :collapse="collapsed"
      :collapse-transition="false"
      :router="true"
      @select="handleSelect"
    >
      <el-menu-item index="home">
        <el-icon><HomeFilled class="flex-1" /></el-icon>
        <template #title>
          <span class="ml-14">首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="user">
        <el-icon><UserFilled /></el-icon>
        <template #title>
          <span class="ml-14">用户管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="setting">
        <el-icon><Setting /></el-icon>
        <template #title>
          <span class="ml-14">系统设置</span>
        </template>
      </el-menu-item>

      <!-- 更多菜单项 -->
      <el-menu-item>
        <template v-if="collapsed">
          <el-icon @click="changeCollapsed"><Fold /></el-icon>
        </template>
        <template v-else>
          <el-icon @click="changeCollapsed"><Expand /></el-icon>
        </template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style scoped>
.el-aside {
  display: flex;
  height: 100vh;
  background-color: #304156;
}

.el-menu {
  border-right: none;
}

.el-menu-item {
  background-color: #1f2d3d;
  color: #bfcbd9;
}

.el-menu-item:hover {
  background-color: #001528;
}
</style>
