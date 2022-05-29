import type { App } from 'vue'
import { ScissorIcon as _ScissorIcon } from './scissor'

const ScissorIcon = {
  install: (app: App) => {
    app.component('ScissorIcon', _ScissorIcon)
  }
}

export default ScissorIcon
