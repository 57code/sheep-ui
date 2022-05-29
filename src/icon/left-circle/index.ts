import type { App } from 'vue'
import { LeftCircleIcon as _LeftCircleIcon } from './left-circle'

const LeftCircleIcon = {
  install: (app: App) => {
    app.component('LeftCircleIcon', _LeftCircleIcon)
  }
}

export default LeftCircleIcon
