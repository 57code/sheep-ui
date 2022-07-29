import DefaultTheme from 'vitepress/theme'
import Button from '../../../src/button/src/Button'
import Tree from '../../../src/tree/src/tree'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
import './demoblock.scss'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('s-button', Button)
    app.component('STree', Tree)

    // 注册DemoBlock所需组件
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
