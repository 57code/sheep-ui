import type { App } from 'vue'
import { ChineseFillIcon as _ChineseFillIcon } from './chinese-fill'

const ChineseFillIcon = {
  install: (app: App) => {
    app.component('ChineseFillIcon', _ChineseFillIcon)
  }
}

export default ChineseFillIcon
