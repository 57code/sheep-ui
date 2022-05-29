import type { App } from 'vue'
import { LayersIcon as _LayersIcon } from './layers'

const LayersIcon = {
  install: (app: App) => {
    app.component('LayersIcon', _LayersIcon)
  }
}

export default LayersIcon
