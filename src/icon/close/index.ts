import type { App } from 'vue'
import { CloseIcon as _CloseIcon } from './close'

const CloseIcon = {
  install: (app: App) => {
    app.component('CloseIcon', _CloseIcon)
  }
}

export default CloseIcon
