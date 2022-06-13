import { App } from 'vue'
import Trigger from './src/trigger'
import { installComponent } from '../install'
import type { SheepUIOptions } from '../_utils/global-config'

// 具名导出
export { Trigger as STrigger }

// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, Trigger, options)
  }
}
