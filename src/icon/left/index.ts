import type { App } from 'vue'
import { LeftIcon as _LeftIcon } from './left'

const LeftIcon = {
  install: (app: App) => {
    app.component('LeftIcon', _LeftIcon)
  }
}

export default LeftIcon
