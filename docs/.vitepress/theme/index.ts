import Theme from 'vitepress/dist/client/theme-default'
// import HelloWorld from '../../../src/components/HelloWorld'
import Test from '../../../src/components/Test'

import 'vitepress-theme-demoblock/theme/styles/index.css'
import '../../../src/index.scss'
import '../sheepui-theme/styles/index.scss'
import {registerComponents} from './register-components'
import SheepUI from '../../../src/index'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}) {
    // 注册组件
    // app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
    registerComponents(app)
    app.use(SheepUI)
  }
}