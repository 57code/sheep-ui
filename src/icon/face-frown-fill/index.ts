import type { App } from 'vue'
import { FaceFrownFillIcon as _FaceFrownFillIcon } from './face-frown-fill'

const FaceFrownFillIcon = {
  install: (app: App) => {
    app.component('FaceFrownFillIcon', _FaceFrownFillIcon)
  }
}

export default FaceFrownFillIcon
