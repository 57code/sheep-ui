import type { App } from 'vue'
import { CaretDownIcon as _CaretDownIcon } from './caret-down'

const CaretDownIcon = {
  install: (app: App) => {
    app.component('CaretDownIcon', _CaretDownIcon)
  }
}

export default CaretDownIcon
