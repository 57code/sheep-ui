import type { App } from 'vue'
import { RightCircleIcon as _RightCircleIcon } from './right-circle'

const RightCircleIcon = {
  install: (app: App) => {
    app.component('RightCircleIcon', _RightCircleIcon)
  }
}

export default RightCircleIcon
