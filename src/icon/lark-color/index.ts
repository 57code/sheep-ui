import type { App } from 'vue'
import { LarkColorIcon as _LarkColorIcon } from './lark-color'

const LarkColorIcon = {
  install: (app: App) => {
    app.component('LarkColorIcon', _LarkColorIcon)
  }
}

export default LarkColorIcon
