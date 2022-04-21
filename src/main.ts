import { createApp } from 'vue'
import App from './App.vue'

import './index.scss'
import Button from './button'

// 使用全量导出
import SheepUI from '../build/'
console.log(SheepUI.version)
createApp(App).use(SheepUI).mount('#app')
