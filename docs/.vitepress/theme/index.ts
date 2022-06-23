import Theme from 'vitepress/theme'
import './demo-block.scss'
import { registerComponents } from './register-components'
import SheepUI from '../../../src'
import { App } from 'vue'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({ app }: { app: App }) {
    // 注册组件
    registerComponents(app)
    app.use(SheepUI)
  }
}
