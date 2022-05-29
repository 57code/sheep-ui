import type { App } from 'vue'
import { CaretUpIcon as _CaretUpIcon } from './caret-up'

const CaretUpIcon = {
  install: (app: App) => {
    app.component('CaretUpIcon', _CaretUpIcon)
  }
}

export default CaretUpIcon
