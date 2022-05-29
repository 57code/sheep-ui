import type { App } from 'vue'
import { CaretLeftIcon as _CaretLeftIcon } from './caret-left'

const CaretLeftIcon = {
  install: (app: App) => {
    app.component('CaretLeftIcon', _CaretLeftIcon)
  }
}

export default CaretLeftIcon
