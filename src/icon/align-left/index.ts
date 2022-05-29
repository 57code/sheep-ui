import type { App } from 'vue'
import { AlignLeftIcon as _AlignLeftIcon } from './align-left'

const AlignLeftIcon = {
  install: (app: App) => {
    app.component('AlignLeftIcon', _AlignLeftIcon)
  }
}

export default AlignLeftIcon
