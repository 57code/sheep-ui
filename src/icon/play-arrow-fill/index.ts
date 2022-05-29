import type { App } from 'vue'
import { PlayArrowFillIcon as _PlayArrowFillIcon } from './play-arrow-fill'

const PlayArrowFillIcon = {
  install: (app: App) => {
    app.component('PlayArrowFillIcon', _PlayArrowFillIcon)
  }
}

export default PlayArrowFillIcon
