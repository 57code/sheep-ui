// 入口文件
// 1.引入实现组件批量导出去
import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import SpacePlugin, { SSpace } from '../src/space'
import version from '../src/version'
// 2.导出这些组件
export { Button, SSpace, version }

const installs = [ButtonPlugin, SpacePlugin]

// 3.导出一个vue插件
export default {
  version,
  install(app: App) {
    installs.forEach(p => app.use(p))
  }
}
