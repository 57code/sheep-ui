import type { App } from 'vue'
import { MosaicIcon as _MosaicIcon } from './mosaic'

const MosaicIcon = {
  install: (app: App) => {
    app.component('MosaicIcon', _MosaicIcon)
  }
}

export default MosaicIcon
