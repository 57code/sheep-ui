import type { App } from 'vue'
import { QqZoneIcon as _QqZoneIcon } from './qq-zone'

const QqZoneIcon = {
  install: (app: App) => {
    app.component('QqZoneIcon', _QqZoneIcon)
  }
}

export default QqZoneIcon
