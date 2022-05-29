import type { App } from 'vue'
import { AlignRightIcon as _AlignRightIcon } from './align-right'

const AlignRightIcon = {
  install: (app: App) => {
    app.component('AlignRightIcon', _AlignRightIcon)
  }
}

export default AlignRightIcon
