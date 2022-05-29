import type { App } from 'vue'
import { ThumbUpFillIcon as _ThumbUpFillIcon } from './thumb-up-fill'

const ThumbUpFillIcon = {
  install: (app: App) => {
    app.component('ThumbUpFillIcon', _ThumbUpFillIcon)
  }
}

export default ThumbUpFillIcon
