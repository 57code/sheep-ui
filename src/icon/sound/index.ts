import type { App } from 'vue'
import { SoundIcon as _SoundIcon } from './sound'

const SoundIcon = {
  install: (app: App) => {
    app.component('SoundIcon', _SoundIcon)
  }
}

export default SoundIcon
