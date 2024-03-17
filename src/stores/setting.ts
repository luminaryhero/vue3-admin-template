import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', () => {
  const collapsed = ref(false)
  function changeCollapsed() {
    collapsed.value = !collapsed.value
  }

  return { collapsed, changeCollapsed }
})
