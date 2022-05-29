import type { App } from 'vue'
import { CloseCircleFillIcon as _CloseCircleFillIcon } from './close-circle-fill'

const CloseCircleFillIcon = {
  install: (app: App) => {
    app.component('CloseCircleFillIcon', _CloseCircleFillIcon)
  }
}

export default CloseCircleFillIcon
