import ElementPlus, { type Options } from 'element-plus'
import 'element-plus/dist/index.css'
import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export const elementPlusPlugin = {
  install(app: App, options: Options) {
    app.use(ElementPlus, options)

    // 导入所有图标并进行全局注册
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}
