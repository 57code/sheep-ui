// 入口文件
// 1.引入实现组件批量导出去
import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'

// 2.导出这些组件
export { Button }

const installs = [ButtonPlugin]

// 3.导出一个vue插件
export default {
  install(app: App) {
    installs.forEach(p => app.use(p))
  }
}
