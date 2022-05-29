import type { App } from 'vue'
import { VoiceIcon as _VoiceIcon } from './voice'

const VoiceIcon = {
  install: (app: App) => {
    app.component('VoiceIcon', _VoiceIcon)
  }
}

export default VoiceIcon
