import type { App } from 'vue'
import { ToolIcon as _ToolIcon } from './tool'

const ToolIcon = {
  install: (app: App) => {
    app.component('ToolIcon', _ToolIcon)
  }
}

export default ToolIcon
