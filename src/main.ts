import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { elementPlusPlugin } from './plugins/element-plus'
import 'uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(elementPlusPlugin, {})

app.mount('#app')
