import type { App } from 'vue'
import { MuteFillIcon as _MuteFillIcon } from './mute-fill'

const MuteFillIcon = {
  install: (app: App) => {
    app.component('MuteFillIcon', _MuteFillIcon)
  }
}

export default MuteFillIcon
