import type { App } from 'vue'
import { ThumbUpIcon as _ThumbUpIcon } from './thumb-up'

const ThumbUpIcon = {
  install: (app: App) => {
    app.component('ThumbUpIcon', _ThumbUpIcon)
  }
}

export default ThumbUpIcon
