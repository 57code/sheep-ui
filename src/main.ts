import { createApp } from 'vue'
import App from './App.vue'

import './index.scss'
import Button from './button'
import Space from './space'
// 使用全量导出
// import SheepUI from '../build/'

createApp(App).use(Button).use(Space).mount('#app')
