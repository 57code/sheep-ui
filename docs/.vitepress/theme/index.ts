import Theme from 'vitepress/dist/client/theme-default'
import HelloWorld from '../../../src/components/HelloWorld.vue'
import Test from '../../../src/components/Test'

import 'vitepress-theme-demoblock/theme/styles/index.css'
import '../../../src/index.scss'
import '../sheepui-theme/styles/index.scss'
import {registerComponents} from './register-components'
import SheepUI from '../../../scripts/entry'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}) {
    // 注册组件
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
    registerComponents(app)
    app.use(SheepUI)
  }
}