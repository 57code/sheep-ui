import type { App } from 'vue'
import { MusicIcon as _MusicIcon } from './music'

const MusicIcon = {
  install: (app: App) => {
    app.component('MusicIcon', _MusicIcon)
  }
}

export default MusicIcon
