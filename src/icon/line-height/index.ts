import type { App } from 'vue'
import { LineHeightIcon as _LineHeightIcon } from './line-height'

const LineHeightIcon = {
  install: (app: App) => {
    app.component('LineHeightIcon', _LineHeightIcon)
  }
}

export default LineHeightIcon
