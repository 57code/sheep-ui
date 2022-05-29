import type { App } from 'vue'
import { FaceMehFillIcon as _FaceMehFillIcon } from './face-meh-fill'

const FaceMehFillIcon = {
  install: (app: App) => {
    app.component('FaceMehFillIcon', _FaceMehFillIcon)
  }
}

export default FaceMehFillIcon
