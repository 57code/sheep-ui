import type { App } from 'vue'
import { InfoCircleFillIcon as _InfoCircleFillIcon } from './info-circle-fill'

const InfoCircleFillIcon = {
  install: (app: App) => {
    app.component('InfoCircleFillIcon', _InfoCircleFillIcon)
  }
}

export default InfoCircleFillIcon
