import type { App } from 'vue'
import { CaretRightIcon as _CaretRightIcon } from './caret-right'

const CaretRightIcon = {
  install: (app: App) => {
    app.component('CaretRightIcon', _CaretRightIcon)
  }
}

export default CaretRightIcon
