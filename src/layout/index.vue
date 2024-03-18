<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'

const collapsed = ref(false)

const changeCollapsed = () => {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div
    @click="changeCollapsed"
    class="clear-both relative w-full h-full"
    :class="[collapsed ? 'openSidebar' : 'hideSidebar']"
  >
    <!-- 左侧 menu -->
    <sidebar
      id="guide-sidebar"
      class="sidebar-container overflow-hidden fixed left-0 top-0 bottom-0 z-[999] w-[210px] h-full text-[0] bg-[#304156] transition-width duration-[0.28s]"
    />
    <div class="relative ml-[210px] min-h-full transition-width">
      <div class="fixed right-0 top-0 z-10 w-calc(100% - 210px)">
        <!-- 顶部的 navbar -->
        <navbar @click="changeCollapsed" />
        <!-- tags -->
        <!-- <tags-view></tags-view> -->
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
