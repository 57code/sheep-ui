import type { App } from 'vue'
import { RightIcon as _RightIcon } from './right'

const RightIcon = {
  install: (app: App) => {
    app.component('RightIcon', _RightIcon)
  }
}

export default RightIcon
