import Theme from 'vitepress/theme'
import './demo-block.scss'
import '../../../src/index.scss'
import {registerComponents} from './register-components'
import SheepUI from '../../../src/index'
import type {App} from 'vue'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}:{app:App<never>}) {
    // 注册组件
    registerComponents(app)
    app.use(SheepUI)
  }
}
