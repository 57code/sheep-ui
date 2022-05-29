import type { App } from 'vue'
import { MuteIcon as _MuteIcon } from './mute'

const MuteIcon = {
  install: (app: App) => {
    app.component('MuteIcon', _MuteIcon)
  }
}

export default MuteIcon
