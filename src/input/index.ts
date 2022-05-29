import type { App } from 'vue'
import Input from './src/input'

import { installComponent } from '../install'
import type { SheepUIOptions } from '../_utils/global-config'
// 具名导出
export { Input as SInput }

// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, Input, options)
  }
}
