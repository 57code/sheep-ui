import type { App } from 'vue'
import { DesktopIcon as _DesktopIcon } from './desktop'

const DesktopIcon = {
  install: (app: App) => {
    app.component('DesktopIcon', _DesktopIcon)
  }
}

export default DesktopIcon
