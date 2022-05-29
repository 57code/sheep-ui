import type { App } from 'vue'
import { ThumbDownIcon as _ThumbDownIcon } from './thumb-down'

const ThumbDownIcon = {
  install: (app: App) => {
    app.component('ThumbDownIcon', _ThumbDownIcon)
  }
}

export default ThumbDownIcon
