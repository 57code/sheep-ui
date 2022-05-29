import type { App } from 'vue'
import { LocationIcon as _LocationIcon } from './location'

const LocationIcon = {
  install: (app: App) => {
    app.component('LocationIcon', _LocationIcon)
  }
}

export default LocationIcon
