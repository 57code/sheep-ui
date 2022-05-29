import type { App } from 'vue'
import { RotateLeftIcon as _RotateLeftIcon } from './rotate-left'

const RotateLeftIcon = {
  install: (app: App) => {
    app.component('RotateLeftIcon', _RotateLeftIcon)
  }
}

export default RotateLeftIcon
