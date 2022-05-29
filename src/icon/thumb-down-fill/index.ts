import type { App } from 'vue'
import { ThumbDownFillIcon as _ThumbDownFillIcon } from './thumb-down-fill'

const ThumbDownFillIcon = {
  install: (app: App) => {
    app.component('ThumbDownFillIcon', _ThumbDownFillIcon)
  }
}

export default ThumbDownFillIcon
