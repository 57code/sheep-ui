import type { App } from 'vue'
import Switch from './src/switch'
import { installComponent } from '../install'
import type { SheepUIOptions } from '../_utils/global-config'
export { Switch as SSwitch }
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, Switch, options)
  }
}
