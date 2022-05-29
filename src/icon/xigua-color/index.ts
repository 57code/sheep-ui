import type { App } from 'vue'
import { XiguaColorIcon as _XiguaColorIcon } from './xigua-color'

const XiguaColorIcon = {
  install: (app: App) => {
    app.component('XiguaColorIcon', _XiguaColorIcon)
  }
}

export default XiguaColorIcon
