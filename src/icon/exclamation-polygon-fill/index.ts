import type { App } from 'vue'
import { ExclamationPolygonFillIcon as _ExclamationPolygonFillIcon } from './exclamation-polygon-fill'

const ExclamationPolygonFillIcon = {
  install: (app: App) => {
    app.component('ExclamationPolygonFillIcon', _ExclamationPolygonFillIcon)
  }
}

export default ExclamationPolygonFillIcon
