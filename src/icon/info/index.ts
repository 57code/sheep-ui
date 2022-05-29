import type { App } from 'vue'
import { InfoIcon as _InfoIcon } from './info'

const InfoIcon = {
  install: (app: App) => {
    app.component('InfoIcon', _InfoIcon)
  }
}

export default InfoIcon
