import type { App } from 'vue'
import { InfoCircleIcon as _InfoCircleIcon } from './info-circle'

const InfoCircleIcon = {
  install: (app: App) => {
    app.component('InfoCircleIcon', _InfoCircleIcon)
  }
}

export default InfoCircleIcon
