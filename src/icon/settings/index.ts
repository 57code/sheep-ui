import type { App } from 'vue'
import { SettingsIcon as _SettingsIcon } from './settings'

const SettingsIcon = {
  install: (app: App) => {
    app.component('SettingsIcon', _SettingsIcon)
  }
}

export default SettingsIcon
