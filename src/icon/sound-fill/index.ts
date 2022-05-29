import type { App } from 'vue'
import { SoundFillIcon as _SoundFillIcon } from './sound-fill'

const SoundFillIcon = {
  install: (app: App) => {
    app.component('SoundFillIcon', _SoundFillIcon)
  }
}

export default SoundFillIcon
