import { App } from 'vue'
import Tree from './src/tree'

// 具名导出
export { Tree }

// 导出插件
export default {
  install(app: App) {
    app.component(Tree.name, Tree)
  }
}
