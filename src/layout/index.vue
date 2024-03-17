<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

const collapsed = ref(false)
</script>

<template>
  <div class="w-full">
    <Navbar class="w-full h-60 bg-[#304156]"></Navbar>
    <div class="flex w-screen">
      <Sidebar
        v-model:collapsed="collapsed"
        class="flex flex-col flex-shrink-0 transition-width-200"
        :class="collapsed ? 'w-64' : 'w-150'"
      />
      <router-view class="flex-shrink-0 bg-white px-30"></router-view>
    </div>
  </div>
</template>

<style scoped></style>
