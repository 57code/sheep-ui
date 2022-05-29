import type { App } from 'vue'
import { BytedanceColorIcon as _BytedanceColorIcon } from './bytedance-color'

const BytedanceColorIcon = {
  install: (app: App) => {
    app.component('BytedanceColorIcon', _BytedanceColorIcon)
  }
}

export default BytedanceColorIcon
