import type { App } from 'vue'
import { SkipNextIcon as _SkipNextIcon } from './skip-next'

const SkipNextIcon = {
  install: (app: App) => {
    app.component('SkipNextIcon', _SkipNextIcon)
  }
}

export default SkipNextIcon
