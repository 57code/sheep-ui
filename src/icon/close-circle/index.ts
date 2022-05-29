import type { App } from 'vue'
import { CloseCircleIcon as _CloseCircleIcon } from './close-circle'

const CloseCircleIcon = {
  install: (app: App) => {
    app.component('CloseCircleIcon', _CloseCircleIcon)
  }
}

export default CloseCircleIcon
