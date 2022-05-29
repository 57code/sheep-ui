import type { App } from 'vue'
import { LayoutIcon as _LayoutIcon } from './layout'

const LayoutIcon = {
  install: (app: App) => {
    app.component('LayoutIcon', _LayoutIcon)
  }
}

export default LayoutIcon
