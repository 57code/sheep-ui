import type { App } from 'vue'
import { AlignCenterIcon as _AlignCenterIcon } from './align-center'

const AlignCenterIcon = {
  install: (app: App) => {
    app.component('AlignCenterIcon', _AlignCenterIcon)
  }
}

export default AlignCenterIcon
